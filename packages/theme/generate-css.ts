#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { themeLight } from './src/themeLight';
import { themeDark } from './src/themeDark';

/**
 * Тип для вложенных свойств темы (без поля name)
 */
type NestedTheme = {
  [key: string]: string | NestedTheme;
};

/**
 * Тип для объекта темы с названием
 */
interface Theme {
  name: string;
  [key: string]: string | NestedTheme;
}

/**
 * Массив доступных тем, чтобы легко добавлять новые
 */
const themes: Theme[] = [
  themeLight,
  themeDark,
  // Добавляйте сюда новые темы
];

/**
 * В ESM-модулях нет __dirname, получаем его так:
 */
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

/**
 * Рекурсивно строит массив строк CSS custom properties
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
 * Генерация CSS для заданной темы с динамическим именем
 */
function generateCss(theme: Theme): string {
  const { name, ...vars } = theme;
  const lines = buildLines(vars as NestedTheme);
  return [`[data-theme="${name}"] {`, ...lines, `}`].join('\n');
}

/**
 * Генерируем CSS для всех тем и объединяем
 */
const cssBlocks = themes.map(generateCss).join('\n\n');
const outputCss = `${cssBlocks}\n`;

/**
 * Путь для записи файла
 */
const outPath = path.resolve(__dirname, 'out', 'theme.css');

/**
 * Убедимся, что директория существует (рекурсивно)
 */
fs.mkdirSync(path.dirname(outPath), { recursive: true });

/**
 * Запись итогового CSS-файла
 */
fs.writeFileSync(outPath, outputCss, { encoding: 'utf-8' });

console.log('✅ theme.css generated at', outPath);
