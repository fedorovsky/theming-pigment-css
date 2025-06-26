#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { themeLight } from './src/themeLight'; // убрали .ts-расширение

/**
 * Получаем __dirname в ES-модуле
 */
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

/**
 * Описание формы исходной темы
 */
type ThemeObject = {
  [key: string]: string | ThemeObject | null;
};

/**
 * Описание формы итоговых токенов
 */
type TokenObject = {
  [key: string]: string | TokenObject;
};

/**
 * Рекурсивно строит объект токенов вида { key: "var(--prefix-key)", nested: { … } }
 */
function buildTokens(obj: ThemeObject, prefix: string[] = []): TokenObject {
  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => {
      const newPrefix = [...prefix, key];
      if (val !== null && typeof val === 'object') {
        // вложенный объект — рекурсия
        return [key, buildTokens(val, newPrefix)];
      } else {
        // простой токен — возвращаем var(--a-b-c)
        const varName = `--${newPrefix.join('-')}`;
        return [key, `var(${varName})`];
      }
    }),
  ) as TokenObject;
}

// Убираем поле `name` из исходной темы перед генерацией токенов
const { name, ...themeWithoutName } = themeLight;

// Генерируем токены из темы без `name`
const tokens: TokenObject = buildTokens(themeWithoutName);

/**
 * Формируем содержимое выходного файла
 */
const tsContent = `export const tokens = ${JSON.stringify(tokens, null, 2)} as const;

export type Tokens = typeof tokens;
`;

// Путь вывода
const outPath: string = path.resolve(__dirname, 'out', 'tokens.ts');

// Убедимся, что директория существует
fs.mkdirSync(path.dirname(outPath), { recursive: true });

// Запись файла в UTF-8
fs.writeFileSync(outPath, tsContent, { encoding: 'utf-8' });

console.log('✅ tokens.ts generated at', outPath);
