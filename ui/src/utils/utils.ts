interface RgbaColor {
  r: number;
  g: number;
  b: number;
}

export const hexToRgba = (hex: string): RgbaColor => {
  hex = hex.replace(/^#/, "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r: r, g: g, b: b };
};
