// themeUtils.js
import { THEMES } from './theme-constants';

// Read saved preference or default to SYSTEM
export function getSavedTheme() {
  return localStorage.getItem('theme') || THEMES.SYSTEM;
}

// Detect current system preference
export function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT;
}

// Apply the “actual” theme to <html>
export function applyTheme(theme: string) {
  const active = theme === THEMES.SYSTEM ? getSystemTheme() : theme;
  document.documentElement.setAttribute('data-theme', active);
}

// Listen for system changes and re-apply if in SYSTEM mode
export function watchSystemTheme() {
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  mql.addEventListener('change', (e) => {
    if (getSavedTheme() === THEMES.SYSTEM) {
      applyTheme(THEMES.SYSTEM);
    }
  });
}
