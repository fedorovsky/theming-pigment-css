import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { lightTheme } from './src/light-theme';
import { darkTheme } from './src/dark-theme';

/**
 * Type for nested theme properties (excluding the 'name' field)
 */
type NestedTheme = {
  [key: string]: string | NestedTheme;
};

/**
 * Type for a theme object with a name
 */
interface Theme {
  name: string;
  [key: string]: string | NestedTheme;
}

/**
 * Array of available themes for easy addition of new ones
 */
const themes: Theme[] = [
  lightTheme,
  darkTheme,
  // Add new themes here
];

/**
 * In ESM modules, __dirname is not available, so we get it like this:
 */
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

/**
 * Recursively builds an array of CSS custom property strings
 */
function buildLines(obj: NestedTheme, prefix: string[] = []): string[] {
  return Object.entries(obj).flatMap(([key, val]) => {
    const pathKeys = [...prefix, key];
    if (val !== null && typeof val === 'object') {
      return buildLines(val, pathKeys);
    }
    return [`  --${pathKeys.join('-')}: ${val};`];
  });
}

/**
 * Generates CSS for the given theme with a dynamic name
 */
function generateCss(theme: Theme): string {
  const { name, ...vars } = theme;
  const lines = buildLines(vars as NestedTheme);
  return [`[data-theme="${name}"] {`, ...lines, `}`].join('\n');
}

/**
 * Generate CSS for all themes and combine them
 */
const cssBlocks = themes.map(generateCss).join('\n\n');
const outputCss = `${cssBlocks}\n`;

/**
 * Path for the output file
 */
const outPath = path.resolve(__dirname, 'out', 'theme.css');

/**
 * Ensure the directory exists (recursively)
 */
fs.mkdirSync(path.dirname(outPath), { recursive: true });

/**
 * Write the final CSS file
 */
fs.writeFileSync(outPath, outputCss, { encoding: 'utf-8' });

console.log('✅ theme.css generated at', outPath);
