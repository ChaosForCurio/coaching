/**
 * Unified Cloudinary upload utility.
 * Handles server-side signed uploads via the Cloudinary REST API.
 * Used for avatars, assignment submissions, or any future file uploads.
 */

export interface UploadResult {
  url: string;
  publicId: string;
  format: string;
  bytes: number;
}

/**
 * Uploads a file to Cloudinary using a signed upload (server-side).
 *
 * @param file    - The File/Blob to upload
 * @param folder  - Cloudinary folder to store the file in (e.g. "coaching_avatars", "coaching_submissions")
 */
export async function uploadToCloudinary(
  file: File | Blob,
  folder: string = 'coaching_avatars'
): Promise<UploadResult> {
  const cloudName = import.meta.env?.PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = import.meta.env?.Cloudinary_APi_Key || process.env.Cloudinary_APi_Key;
  const apiSecret = import.meta.env?.Cloudinary_APi_Secret || process.env.Cloudinary_APi_Secret;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Cloudinary credentials are not configured. Set PUBLIC_CLOUDINARY_CLOUD_NAME, Cloudinary_APi_Key, and Cloudinary_APi_Secret.');
  }

  // Generate a timestamp + signature for the signed upload
  const timestamp = Math.round(Date.now() / 1000);
  const paramsToSign = `folder=${folder}&timestamp=${timestamp}`;

  // Server-side SHA-1 signature (Node.js crypto)
  const { createHash } = await import('node:crypto');
  const signature = createHash('sha1')
    .update(paramsToSign + apiSecret)
    .digest('hex');

  const formData = new FormData();
  formData.append('file', file);
  formData.append('api_key', apiKey);
  formData.append('timestamp', String(timestamp));
  formData.append('signature', signature);
  formData.append('folder', folder);

  const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
  const response = await fetch(uploadUrl, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({ error: { message: response.statusText } }));
    throw new Error(`Cloudinary upload failed: ${err?.error?.message ?? response.statusText}`);
  }

  const result = await response.json();

  return {
    url: result.secure_url,
    publicId: result.public_id,
    format: result.format,
    bytes: result.bytes,
  };
}

/**
 * Deletes a Cloudinary asset by public ID (for cleanup on re-upload).
 */
export async function deleteFromCloudinary(publicId: string): Promise<void> {
  const cloudName = import.meta.env?.PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = import.meta.env?.Cloudinary_APi_Key || process.env.Cloudinary_APi_Key;
  const apiSecret = import.meta.env?.Cloudinary_APi_Secret || process.env.Cloudinary_APi_Secret;

  if (!cloudName || !apiKey || !apiSecret) return;

  const timestamp = Math.round(Date.now() / 1000);
  const { createHash } = await import('node:crypto');
  const signature = createHash('sha1')
    .update(`public_id=${publicId}&timestamp=${timestamp}${apiSecret}`)
    .digest('hex');

  await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ public_id: publicId, api_key: apiKey, timestamp, signature }),
  });
}
