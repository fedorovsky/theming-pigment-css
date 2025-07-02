/** @type { import('@storybook/react-vite').StorybookConfig } */

const config = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
