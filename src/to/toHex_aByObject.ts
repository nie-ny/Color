import type { IRGBA } from '../types/index';

/**
 * 将 hex|hexa格式颜色字符串 转换 为具有每种颜色值的对象
 * @param color #000|#ffffff|#0001|#ffffff11
 * @returns
 */
export default function toHex_aByObject(color: string = ''): IRGBA {
  let alphaBol = false;
  let h = color.slice(color.startsWith('#') ? 1 : 0);
  if (h.length === 3 || h.length === 4)
    h = Array.from(h)
      .map((x) => x + x)
      .join('');
  if (h.length === 8) alphaBol = true;
  let arr: Array<number> = [];
  if (alphaBol) {
    arr = Array(4)
      .fill(0)
      .map((_, i) => parseInt(`0x${h[i * 2]}${h[i * 2 + 1]}`)) as Array<number>;
  } else {
    arr = Array(3)
      .fill(0)
      .map((_, i) => parseInt(`0x${h[i * 2]}${h[i * 2 + 1]}`)) as Array<number>;
  }

  let alpha: number = 1;
  if (arr[3] >= 0) {
    alpha = arr[3] ? Number((arr[3] / 255).toFixed(1)) : 0;
  }

  return {
    red: arr[0],
    green: arr[1],
    blue: arr[2],
    alpha
  };
}
