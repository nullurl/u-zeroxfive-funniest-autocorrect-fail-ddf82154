// Autocorrect fail entry: the line beside this file is the entry; copy it to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const DEFAULT_OUTPUT_DIR = '/output';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? DEFAULT_OUTPUT_DIR;
const TEXT_FILE = 'entry.txt';

copyFileSync(new URL(`./${TEXT_FILE}`, import.meta.url), join(outputDir, TEXT_FILE));
