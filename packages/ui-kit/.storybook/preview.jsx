/** @type { import('@storybook/react-vite').Preview } */
import React from 'react';
import '@fedorovskyi/theme/theme.css';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Light / Dark switch',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light Theme' },
        { value: 'dark', title: 'Dark Theme' },
      ],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;
    return (
      <div data-theme={theme}>
        <Story {...context} />
      </div>
    );
  },
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
