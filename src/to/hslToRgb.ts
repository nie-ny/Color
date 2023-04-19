/**
 * hsl色值 转换 rgb色值
 * @param h 色相 [0~360]
 * @param s 饱和度 [0~100]
 * @param l 亮度 [0~100]
 * @returns {[r,g,b]}
 */
export default function hslToRgb(h: number, s: number, l: number): Array<number> {
  s = s / 100;
  l = l / 100;
  const C = (1 - Math.abs(2 * l - 1)) * s;
  const hPrime = h / 60;
  const X = C * (1 - Math.abs((hPrime % 2) - 1));
  const m = l - C / 2;
  const withLight = (r: number, g: number, b: number): Array<number> => [
    ~~((r + m) * 255),
    ~~((g + m) * 255),
    ~~((b + m) * 255)
  ];

  if (hPrime <= 1) {
    return withLight(C, X, 0);
  } else if (hPrime <= 2) {
    return withLight(X, C, 0);
  } else if (hPrime <= 3) {
    return withLight(0, C, X);
  } else if (hPrime <= 4) {
    return withLight(0, X, C);
  } else if (hPrime <= 5) {
    return withLight(X, 0, C);
  } else if (hPrime <= 6) {
    return withLight(C, 0, X);
  }
  return [0, 0, 0];
}
