import { palette } from './palete';
import { hexToRgba } from './utils/hex-to-rgba';

const colors = {
  neutral: {
    neutral100: palette.neutrals.dark.grey120,
    neutral150: palette.neutrals.dark.grey150,
    neutral200: palette.neutrals.dark.grey60,
    neutral250: palette.neutrals.dark.grey180,
    neutral280: palette.neutrals.dark.grey40,
    neutral300: palette.smokyBlack,
    neutral350: palette.neutrals.dark.grey180,
    neutral400: palette.neutrals.dark.grey180,
    neutral500: palette.neutrals.dark.grey300,
    neutral550: palette.neutrals.dark.grey500,
    neutral600: palette.neutrals.dark.grey500,
    neutral700: palette.neutrals.dark.grey600,
    neutral750: palette.neutrals.dark.grey700,
    neutral800: palette.neutrals.dark.grey900,
    neutral: palette.white,
  },
  custom: {
    custom100: palette.neutrals.dark.grey240,
    custom200: palette.neutrals.dark.grey240,
    custom300: palette.neutrals.light.grey280,
    custom400: palette.neutrals.light.grey280,
  },
  primary: {
    primary100: palette.accent.tomato,
  },
  secondary: {
    secondary100: palette.accent.blueJeans,
  },
  system: {
    system100: palette.accent.fireOpal,
    system200: palette.accent.sunsetOrange,
    system300: palette.accent.ripeMango,
    system400: palette.accent.forestGreen,
    system500: palette.white,
  },
  text: {
    textNeutral: palette.white,
    textNeutral100: hexToRgba(palette.white, 0.9),
    textNeutral200: hexToRgba(palette.white, 0.7),
    textNeutral300: hexToRgba(palette.white, 0.6),
    textNeutral400: hexToRgba(palette.white, 0.5),
    textNeutral500: hexToRgba(palette.white, 0.3),
  },
  link: {
    link100: palette.accent.blueJeans,
    link200: palette.accent.tomato,
    link100Hover: hexToRgba(palette.accent.blueJeans, 0.8),
  },
};

export const darkTheme = {
  name: 'dark',
  colors: {
    ...colors.neutral,
    ...colors.primary,
    ...colors.secondary,
    ...colors.system,
    ...colors.text,
    ...colors.link,
    ...colors.custom,
  },
};
