import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const projectRoot = path.resolve(__dirname, '..');

const imageDirs = [
  path.join(projectRoot, 'public'),
  path.join(projectRoot, 'src', 'images')
];

async function optimizeImages() {
  console.log('Starting image optimization with imagemin...');

  for (const dir of imageDirs) {
    console.log(`Processing directory: ${dir}`);
    try {
      const files = await imagemin([`${dir}/**/*.{jpg,jpeg,png}`], {
        destination: dir,
        plugins: [
          imageminWebp({quality: 75})
        ]
      });

      files.forEach(file => {
        console.log(`Successfully converted: ${file.sourcePath} -> ${file.destinationPath}`);
      });

    } catch (error) {
      console.error(`Error processing directory ${dir}:`, error);
    }
  }

  console.log('Image optimization complete!');
}

optimizeImages().catch(err => {
  console.error('An error occurred during image optimization:', err);
  process.exit(1);
});
