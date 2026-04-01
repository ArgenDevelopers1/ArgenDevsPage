import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgsDir = path.join(__dirname, 'public', 'imgs');

const images = [
  'diagnostico.png',
  'propuesta.png',
  'desarrollo.png',
  'despliegue.png',
  'soporte.png'
];

async function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

async function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

async function compressImages() {
  console.log('Starting image compression...\n');
  console.log('='.repeat(80));

  const results = [];

  for (const image of images) {
    const inputPath = path.join(imgsDir, image);
    const baseName = path.parse(image).name;

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  File not found: ${image}`);
      continue;
    }

    const originalSize = await getFileSize(inputPath);
    const originalSizeFormatted = await formatBytes(originalSize);

    console.log(`\nProcessing: ${image}`);
    console.log(`Original size: ${originalSizeFormatted} (${originalSize} bytes)`);

    try {
      // Create optimized JPEG version
      const jpegPath = path.join(imgsDir, `${baseName}.jpg`);
      await sharp(inputPath)
        .resize(1200, 800, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({ quality: 80, progressive: true })
        .toFile(jpegPath);

      const jpegSize = await getFileSize(jpegPath);
      const jpegSizeFormatted = await formatBytes(jpegSize);
      const jpegReduction = ((1 - jpegSize / originalSize) * 100).toFixed(1);

      console.log(`  ✓ JPEG optimized: ${jpegSizeFormatted} (${jpegReduction}% smaller)`);

      // Create WebP version
      const webpPath = path.join(imgsDir, `${baseName}.webp`);
      await sharp(inputPath)
        .resize(1200, 800, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: 80 })
        .toFile(webpPath);

      const webpSize = await getFileSize(webpPath);
      const webpSizeFormatted = await formatBytes(webpSize);
      const webpReduction = ((1 - webpSize / originalSize) * 100).toFixed(1);

      console.log(`  ✓ WebP created: ${webpSizeFormatted} (${webpReduction}% smaller)`);

      results.push({
        image,
        original: originalSize,
        originalFormatted: originalSizeFormatted,
        jpeg: jpegSize,
        jpegFormatted: jpegSizeFormatted,
        jpegReduction,
        webp: webpSize,
        webpFormatted: webpSizeFormatted,
        webpReduction
      });

    } catch (error) {
      console.error(`  ✗ Error processing ${image}: ${error.message}`);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('\nSUMMARY:\n');

  let totalOriginal = 0;
  let totalJpeg = 0;
  let totalWebp = 0;

  results.forEach(r => {
    totalOriginal += r.original;
    totalJpeg += r.jpeg;
    totalWebp += r.webp;

    console.log(`${r.image}`);
    console.log(`  Original:    ${r.originalFormatted}`);
    console.log(`  JPEG:        ${r.jpegFormatted} (${r.jpegReduction}% smaller)`);
    console.log(`  WebP:        ${r.webpFormatted} (${r.webpReduction}% smaller)\n`);
  });

  const totalOriginalFormatted = await formatBytes(totalOriginal);
  const totalJpegFormatted = await formatBytes(totalJpeg);
  const totalWebpFormatted = await formatBytes(totalWebp);
  const jpegTotalReduction = ((1 - totalJpeg / totalOriginal) * 100).toFixed(1);
  const webpTotalReduction = ((1 - totalWebp / totalOriginal) * 100).toFixed(1);

  console.log('='.repeat(80));
  console.log('TOTAL COMPRESSION:');
  console.log(`  Original:    ${totalOriginalFormatted} (${totalOriginal} bytes)`);
  console.log(`  JPEG:        ${totalJpegFormatted} (${jpegTotalReduction}% reduction)`);
  console.log(`  WebP:        ${totalWebpFormatted} (${webpTotalReduction}% reduction)`);
  console.log('='.repeat(80));

  console.log('\nOptimization complete! Files saved in', imgsDir);
  console.log('\nNote: Update your HTML to use:');
  console.log('  <picture>');
  console.log('    <source srcset="image.webp" type="image/webp">');
  console.log('    <img src="image.jpg" alt="description">');
  console.log('  </picture>');
}

compressImages().catch(console.error);
