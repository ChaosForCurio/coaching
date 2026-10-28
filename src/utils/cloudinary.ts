/**
 * Cloudinary Media & Dynamic OG Image Utilities
 * Uses uploaded images (not fetch) for maximum compatibility with Cloudinary security settings.
 */

const CLOUD_NAME = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || 'dhfmifvp2';

/**
 * Mapping of local public/ paths to Cloudinary public IDs.
 * These were uploaded via scripts/upload-to-cloudinary.mjs
 */
const UPLOADED_IMAGE_MAP: Record<string, string> = {
  // public/images/
  '/images/classroom.png': 'bhavya/images/classroom',
  '/images/faculty-classroom.jpg': 'bhavya/images/faculty-classroom',
  '/images/hero-bg.jpg': 'bhavya/images/hero-bg',
  '/images/library-classroom.jpg': 'bhavya/images/library-classroom',
  '/images/og-banner.jpg': 'bhavya/images/og-banner',
  '/images/web-dev.jpg': 'bhavya/images/web-dev',
  // public/images/programs/
  '/images/programs/dca.jpg': 'bhavya/images/programs/dca',
  '/images/programs/digital-marketing.jpg':
    'bhavya/images/programs/digital-marketing',
  '/images/programs/graphic-design.jpg':
    'bhavya/images/programs/graphic-design',
  '/images/programs/rscit.jpg': 'bhavya/images/programs/rscit',
  '/images/programs/tally.jpg': 'bhavya/images/programs/tally',
  '/images/programs/web-dev.jpg': 'bhavya/images/programs/web-dev',
  // public/avatars/
  '/avatars/ankit.png': 'bhavya/avatars/ankit',
  '/avatars/deepak.png': 'bhavya/avatars/deepak',
  '/avatars/neha.png': 'bhavya/avatars/neha',
  '/avatars/pooja.png': 'bhavya/avatars/pooja',
  '/avatars/rahul.png': 'bhavya/avatars/rahul',
  '/avatars/suman.png': 'bhavya/avatars/suman',
  // public/ root
  '/instagram-icon.png': 'bhavya/instagram-icon',
  '/favicon.svg': 'bhavya/favicon',
};

interface ImageTransformOptions {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'thumb' | 'limit' | 'scale';
  gravity?: 'face' | 'center' | 'auto';
  quality?: string; // 'auto', 'auto:best', 'auto:eco', '80'
  format?: string; // 'auto', 'webp', 'avif'
}

/**
 * Returns an optimized Cloudinary URL for an uploaded image.
 * Automatically serves modern formats (WebP/AVIF) and compresses to save bandwidth.
 *
 * Falls back to the original local path if the image isn't in the upload map.
 */
export function getOptimizedImageUrl(
  imagePath: string,
  options: ImageTransformOptions = {}
): string {
  if (!imagePath) return '';

  // If already a Cloudinary URL, return as-is
  if (imagePath.startsWith('https://res.cloudinary.com')) {
    return imagePath;
  }

  // Look up the Cloudinary public ID from our upload map
  const publicId = UPLOADED_IMAGE_MAP[imagePath];

  // If not in the map, return the original path unchanged
  if (!publicId) {
    return imagePath;
  }

  const {
    width,
    height,
    crop = 'fill',
    gravity,
    quality = 'auto',
    format = 'auto',
  } = options;

  const transformations: string[] = [`f_${format}`, `q_${quality}`];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop && (width || height)) transformations.push(`c_${crop}`);
  if (gravity) transformations.push(`g_${gravity}`);

  const transformString = transformations.join(',');

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformString}/${publicId}`;
}

/**
 * Avatar optimizer using Cloudinary smart face gravity crop (g_face,c_thumb).
 */
export function getOptimizedAvatarUrl(avatarPath: string, size = 120): string {
  return getOptimizedImageUrl(avatarPath, {
    width: size,
    height: size,
    crop: 'thumb',
    gravity: 'face',
    quality: 'auto',
  });
}

interface DynamicOgOptions {
  title: string;
  badge?: string; // e.g. "Certification Course", "Kota, Rajasthan", "Official Blog"
  category?: string; // e.g. "Bhavya Career Institute"
}

/**
 * Encodes text properly for Cloudinary URL overlays:
 * - Replaces commas with %2C
 * - Replaces slashes with %2F
 * - Normalizes special punctuation
 */
function cleanOverlayText(text: string): string {
  return encodeURIComponent(
    text.replace(/,/g, '%2C').replace(/\//g, '%2F').trim()
  );
}

/**
 * Generates dynamic Open Graph (OG) social card (1200x630) using uploaded og-banner.
 * Overlays custom text, badges, and branding over the institute banner.
 */
export function generateDynamicOgImage({
  title,
  badge = 'Bhavya Career Institute',
  category = 'Kota, Rajasthan',
}: DynamicOgOptions): string {
  const ogBannerPublicId = 'bhavya/images/og-banner';

  // Truncate title if very long so it fits neatly in 2-3 lines
  const displayTitle = title.length > 55 ? `${title.slice(0, 52)}...` : title;
  const encodedTitle = cleanOverlayText(displayTitle);
  const encodedBadge = cleanOverlayText(badge.toUpperCase());
  const encodedCategory = cleanOverlayText(category);

  // Cloudinary transformations:
  // 1. Resize base banner to 1200x630 with dark tint for high legibility
  // 2. Overlay badge text (top)
  // 3. Overlay large bold title (middle)
  // 4. Overlay category/location subtitle (bottom)
  const transformChain = [
    'f_auto',
    'q_auto',
    'w_1200',
    'h_630',
    'c_fill',
    // Darken slightly for clean contrast:
    'e_brightness:-20',
    // Badge overlay (top)
    `l_text:Arial_22_bold:${encodedBadge},co_rgb:F4B51B,c_fit,w_1000/fl_layer_apply,g_north_west,x_80,y_180`,
    // Title overlay (large bold white)
    `l_text:Arial_52_bold:${encodedTitle},co_rgb:FFFFFF,c_fit,w_1040/fl_layer_apply,g_north_west,x_80,y_230`,
    // Category / Location subtitle (bottom)
    `l_text:Arial_24:${encodedCategory},co_rgb:E2E8F0,c_fit,w_1000/fl_layer_apply,g_north_west,x_80,y_480`,
  ].join('/');

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformChain}/${ogBannerPublicId}`;
}
