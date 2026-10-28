/**
 * Upload all public images to Cloudinary
 * Run: node scripts/upload-to-cloudinary.mjs
 */
import { createHash, createHmac } from 'crypto';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, basename, extname } from 'path';
import { config } from 'dotenv';

config();

const CLOUD_NAME = process.env.PUBLIC_CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.Cloudinary_APi_Key;
const API_SECRET = process.env.Cloudinary_APi_Secret;

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error('❌ Missing Cloudinary credentials in .env');
  process.exit(1);
}

const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

/**
 * Generate Cloudinary signature for signed upload
 */
function generateSignature(params) {
  // Sort params alphabetically and create the string to sign
  const sortedKeys = Object.keys(params).sort();
  const toSign = sortedKeys.map(k => `${k}=${params[k]}`).join('&');
  return createHash('sha1').update(toSign + API_SECRET).digest('hex');
}

/**
 * Upload a single file to Cloudinary
 */
async function uploadFile(filePath, folder, publicId) {
  const fileBuffer = readFileSync(filePath);
  const base64File = `data:image/${extname(filePath).slice(1)};base64,${fileBuffer.toString('base64')}`;

  const timestamp = Math.floor(Date.now() / 1000);

  const params = {
    folder,
    public_id: publicId,
    timestamp: String(timestamp),
    overwrite: 'true',
  };

  const signature = generateSignature(params);

  const formData = new FormData();
  formData.append('file', base64File);
  formData.append('folder', folder);
  formData.append('public_id', publicId);
  formData.append('timestamp', String(timestamp));
  formData.append('overwrite', 'true');
  formData.append('signature', signature);
  formData.append('api_key', API_KEY);

  try {
    const res = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (data.secure_url) {
      const sizeKB = (fileBuffer.length / 1024).toFixed(0);
      console.log(`  ✅ ${publicId} (${sizeKB} KB) → ${data.secure_url}`);
      return { publicId, url: data.secure_url, success: true };
    } else {
      console.error(`  ❌ ${publicId}: ${data.error?.message || JSON.stringify(data)}`);
      return { publicId, success: false, error: data.error?.message };
    }
  } catch (err) {
    console.error(`  ❌ ${publicId}: ${err.message}`);
    return { publicId, success: false, error: err.message };
  }
}

/**
 * Scan a directory and upload all images
 */
async function uploadDirectory(dirPath, cloudinaryFolder) {
  const files = readdirSync(dirPath).filter(f => {
    const ext = extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif'].includes(ext);
  });

  console.log(`\n📁 Uploading ${files.length} files from ${dirPath} → "${cloudinaryFolder}/"...\n`);

  const results = [];
  for (const file of files) {
    const filePath = join(dirPath, file);
    if (!statSync(filePath).isFile()) continue;

    const publicId = basename(file, extname(file));
    const result = await uploadFile(filePath, cloudinaryFolder, publicId);
    results.push(result);
  }

  return results;
}

// ── Main ──────────────────────────────────────────────────────
async function main() {
  console.log('🚀 Cloudinary Batch Uploader');
  console.log(`   Cloud: ${CLOUD_NAME}`);
  console.log('─'.repeat(50));

  const allResults = [];

  // 1. Upload public/images/
  const imgResults = await uploadDirectory('public/images', 'bhavya/images');
  allResults.push(...imgResults);

  // 1b. Upload public/images/programs/
  const progResults = await uploadDirectory('public/images/programs', 'bhavya/images/programs');
  allResults.push(...progResults);

  // 2. Upload public/avatars/
  const avatarResults = await uploadDirectory('public/avatars', 'bhavya/avatars');
  allResults.push(...avatarResults);

  // 3. Upload og-banner, favicon, instagram-icon from public/
  const rootFiles = ['og-banner.jpg', 'instagram-icon.png', 'favicon.svg'].filter(f => {
    try { statSync(join('public', f)); return true; } catch { return false; }
  });

  if (rootFiles.length > 0) {
    console.log(`\n📁 Uploading ${rootFiles.length} root files → "bhavya/"...\n`);
    for (const file of rootFiles) {
      const filePath = join('public', file);
      // For og-banner, place in images folder for consistency
      const folder = file.includes('og-banner') ? 'bhavya/images' : 'bhavya';
      const publicId = basename(file, extname(file));
      const result = await uploadFile(filePath, folder, publicId);
      allResults.push(result);
    }
  }

  // Summary
  const success = allResults.filter(r => r.success).length;
  const failed = allResults.filter(r => !r.success).length;

  console.log('\n' + '─'.repeat(50));
  console.log(`✅ Uploaded: ${success}  |  ❌ Failed: ${failed}  |  Total: ${allResults.length}`);

  if (failed > 0) {
    console.log('\nFailed uploads:');
    allResults.filter(r => !r.success).forEach(r => {
      console.log(`  - ${r.publicId}: ${r.error}`);
    });
  }

  // Print URL mapping for reference
  console.log('\n📋 URL Mapping:');
  allResults.filter(r => r.success).forEach(r => {
    console.log(`  ${r.publicId} → ${r.url}`);
  });
}

main().catch(console.error);
