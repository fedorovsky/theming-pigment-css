'use client';

import * as React from 'react';
import { THEMES } from './theme-constants';
import { getSavedTheme, applyTheme, watchSystemTheme } from './theme-utils';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = React.useState(getSavedTheme());

  // On mount: apply theme and start watching system changes
  React.useEffect(() => {
    applyTheme(theme);
    watchSystemTheme();
  }, [theme]);

  // On user change: save and apply immediately
  React.useEffect(() => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }, [theme]);

  return (
    <div>
      <label style={{ display: 'block', fontSize: '24px' }}>
        <input
          type="radio"
          checked={theme === THEMES.LIGHT}
          onChange={() => setTheme(THEMES.LIGHT)}
        />
        Light
      </label>
      <label style={{ display: 'block', fontSize: '24px' }}>
        <input
          type="radio"
          checked={theme === THEMES.DARK}
          onChange={() => setTheme(THEMES.DARK)}
        />
        Dark
      </label>
      <label style={{ display: 'block', fontSize: '24px' }}>
        <input
          type="radio"
          checked={theme === THEMES.SYSTEM}
          onChange={() => setTheme(THEMES.SYSTEM)}
        />
        System
      </label>
    </div>
  );
};
