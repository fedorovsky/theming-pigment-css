import { palette } from './palete';
import { hexToRgba } from './utils/hex-to-rgba';

const colors = {
  neutral: {
    neutral100: palette.white,
    neutral150: palette.neutrals.light.grey20,
    neutral200: palette.neutrals.light.grey60,
    neutral250: palette.neutrals.light.grey60,
    neutral280: palette.neutrals.light.grey100,
    neutral300: palette.neutrals.light.grey120,
    neutral350: palette.neutrals.light.grey120,
    neutral400: palette.neutrals.light.grey180,
    neutral500: palette.neutrals.light.grey300,
    neutral550: palette.neutrals.light.grey400,
    neutral600: palette.neutrals.light.grey500,
    neutral700: palette.neutrals.light.grey600,
    neutral750: palette.neutrals.light.grey600,
    neutral800: palette.neutrals.light.grey900,
    neutral: palette.smokyBlack,
  },
  custom: {
    custom100: palette.neutrals.light.grey60,
    custom200: palette.white,
    custom300: palette.neutrals.light.grey60,
    custom400: palette.white,
  },
  primary: {
    primary100: palette.accent.tangelo,
  },
  secondary: {
    secondary100: palette.accent.brandies,
  },
  system: {
    system100: palette.accent.fireOpal,
    system200: palette.accent.sunsetOrange,
    system300: palette.accent.ripeMango,
    system400: palette.accent.forestGreen,
    system500: palette.white,
  },
  text: {
    textNeutral: palette.smokyBlack,
    textNeutral100: hexToRgba(palette.smokyBlack, 0.9),
    textNeutral200: hexToRgba(palette.smokyBlack, 0.7),
    textNeutral300: hexToRgba(palette.smokyBlack, 0.6),
    textNeutral400: hexToRgba(palette.smokyBlack, 0.5),
    textNeutral500: hexToRgba(palette.smokyBlack, 0.3),
  },
  link: {
    link100: palette.accent.brandies,
    link200: palette.accent.tangelo,
    link100Hover: hexToRgba(palette.accent.brandies, 0.8),
  },
};

export const lightTheme = {
  name: 'light',
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
