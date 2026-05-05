/**
 * Crea versioni ridimensionate delle immagini principali per srcset mobile.
 * Requisiti: Node.js + npm install sharp
 *
 * Utilizzo:
 *   npm install sharp
 *   node resize-images.js
 */

const sharp = require('sharp');
const path  = require('path');
const fs    = require('fs');

const imgDir = path.join(__dirname, 'images');

const tasks = [
  { src: 'suzuki-sv-7gx-side-by-side.webp', widths: [480, 960] },
  { src: 'vendita-moto-nuove-livorno.webp',          widths: [480] },
  { src: 'officina-specializzata-moto-livorno.webp', widths: [480] },
  { src: 'ricambi-originali-suzuki-livorno.webp',    widths: [480] },
  { src: 'recupero-moto-su-strada.webp',             widths: [480] },
  { src: 'negozio-fuori.webp',                       widths: [480, 960] },
  { src: 'prova-su-strada-moto-livorno.webp',        widths: [480, 960] },
];

(async () => {
  for (const { src, widths } of tasks) {
    const input = path.join(imgDir, src);
    if (!fs.existsSync(input)) { console.warn('Non trovato:', src); continue; }
    const base = path.basename(src, '.webp');
    for (const w of widths) {
      const out = path.join(imgDir, `${base}-${w}w.webp`);
      await sharp(input)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(out);
      console.log(`✓ ${base}-${w}w.webp`);
    }
  }
  console.log('\nFatto! Ora aggiungi srcset alle immagini in index.html.');
})().catch(console.error);
