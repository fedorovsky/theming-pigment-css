import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { lightTheme } from './src/light-theme';

/**
 * Get __dirname in an ES module
 */
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

/**
 * Describes the shape of the original theme
 */
type ThemeObject = {
  [key: string]: string | ThemeObject | null;
};

/**
 * Describes the shape of the resulting tokens
 */
type TokenObject = {
  [key: string]: string | TokenObject;
};

/**
 * Recursively builds a token object in the form { key: "var(--prefix-key)", nested: { … } }
 */
function buildTokens(obj: ThemeObject, prefix: string[] = []): TokenObject {
  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => {
      const newPrefix = [...prefix, key];
      if (val !== null && typeof val === 'object') {
        // nested object — recursion
        return [key, buildTokens(val, newPrefix)];
      } else {
        // simple token — return var(--a-b-c)
        const varName = `--${newPrefix.join('-')}`;
        return [key, `var(${varName})`];
      }
    }),
  ) as TokenObject;
}

// Remove the `name` field from the original theme before generating tokens
const { name, ...themeWithoutName } = lightTheme;

// Generate tokens from the theme without `name`
const tokens: TokenObject = buildTokens(themeWithoutName);

/**
 * Create the contents of the output file
 */
const tsContent = `export const tokens = ${JSON.stringify(tokens, null, 2)} as const;

export type Tokens = typeof tokens;
`;

// Output path
const outPath: string = path.resolve(__dirname, 'out', 'tokens.ts');

// Ensure the directory exists
fs.mkdirSync(path.dirname(outPath), { recursive: true });

// Write the file in UTF-8
fs.writeFileSync(outPath, tsContent, { encoding: 'utf-8' });

console.log('✅ tokens.ts generated at', outPath);
