import { extendTheme } from '@pigment-css/vite-plugin';

export default {
  theme: extendTheme({
    colors: {
      primary: '#0070f3',
      secondary: '#ff4081',
      error: '#ff0000',
    },
    spacing: {
      sm: '8px',
      md: '16px',
      lg: '32px',
    },
  }),
};
