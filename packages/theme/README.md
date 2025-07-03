# @fedorovskyi/theme

A utility toolkit for generating and applying themes in CSS and JS.

## Installation

```bash
npm install @fedorovskyi/theme
```

## Quick Start

### Importing in JavaScript / TypeScript

import tokens from "@fedorovskyi/theme";
```

The module exports a `tokens` object — a collection of CSS variables and theme tokens.

### Including the CSS

```none
@import "@fedorovskyi/theme/theme.css"; // In CSS files
|
OR
|
import '@fedorovskyi/theme/theme.css'; // In JavaScript files
``` 

## Scripts

* **`npm run build`**
  Generate tokens and build CSS/JS:

    1. `generate:tokens` — generate token files in `out/`
    2. `generate:css` — build `out/theme.css`
    3. `build:css` — minify and output to `dist/theme.css`
    4. `build:js` — bundle ES module and CommonJS in `dist/`

* **`npm run release`**
  Build the project and publish it to npm.

* **`npm run format`**
  Format all files with Prettier.

## Exported Files

* `dist/tokens.js` — ES module with theme tokens
* `dist/tokens.cjs` — CommonJS version
* `dist/tokens.d.ts` — TypeScript declarations
* `dist/theme.css` — compiled CSS file
