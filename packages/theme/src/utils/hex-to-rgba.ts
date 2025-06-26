const isValidHex = (hex: string): boolean => {
  const validHexRegex = /^#?([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
  return validHexRegex.test(hex.trim());
};

const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  const HEX = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(HEX);

  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

export const hexToRgba = (hex: string, alpha: number) => {
  if (!isValidHex(hex)) {
    return '';
  }

  const color = hexToRgb(hex);
  if (!color) {
    return hex;
  }
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};
