/**
 * Writes QuickScan4C.tsx from stdin lines formatted like read_file output:
 * "     N|content"
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '../src/components/QuickScan4C.tsx');

let raw = fs.readFileSync(0, 'utf8');
const lines = raw.split(/\r?\n/).map((l) => {
  const m = l.match(/^\s*\d+\|(.*)$/);
  return m ? m[1] : l;
});
fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
console.log('Wrote', outPath, 'bytes', fs.statSync(outPath).size);
