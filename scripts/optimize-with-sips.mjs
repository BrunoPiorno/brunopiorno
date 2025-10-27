import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const projectRoot = path.resolve(__dirname, '..');

const imageDirs = [
  path.join(projectRoot, 'public'),
  path.join(projectRoot, 'src', 'images')
];

const supportedExtensions = ['.jpg', '.jpeg', '.png'];

async function optimizeImages() {
  console.log('Iniciando optimización de imágenes con sips...');

  for (const dir of imageDirs) {
    if (!fs.existsSync(dir)) {
      console.log(`Directorio no encontrado, saltando: ${dir}`);
      continue;
    }
    
    const files = await fs.promises.readdir(dir, { recursive: true });

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (supportedExtensions.includes(ext)) {
        const inputPath = path.join(dir, file);

        // Determine the original format to be explicit with sips
        const format = ext === '.png' ? 'png' : 'jpeg';

        // Explicitly set the format and output file to overwrite the original,
        // preventing a strange system default to webp.
        const command = `sips -Z 1920 -s format ${format} --setProperty formatOptions 70 "${inputPath}" --out "${inputPath}"`;

        console.log(`Convirtiendo: ${path.basename(inputPath)}`);
        
        await new Promise((resolve, reject) => {
          exec(command, (error, stdout, stderr) => {
            if (error) {
              console.error(`Error convirtiendo ${path.basename(inputPath)}:`, stderr);
              return reject(error);
            }
            resolve(stdout);
          });
        });
      }
    }
  }

  console.log('¡Optimización de imágenes completada!');
}

optimizeImages().catch(err => {
  console.error('Ocurrió un error durante la optimización de imágenes:', err);
  process.exit(1);
});
