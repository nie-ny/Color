/**
 * rgb颜色值 转换 hsl颜色值
 * @param r 红色值
 * @param g 绿色值
 * @param b 蓝色值
 * @returns {[h,s,l]}
 */
export default function rgbToHsl(r: number, g: number, b: number): Array<number> {
  (r /= 255), (g /= 255), (b /= 255);
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // 设为0
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}
