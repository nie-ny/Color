/**
 * 是否是 Hex 格式的颜色
 * @param color 十六进制颜色
 * @returns
 */
export default function isHex(color: string): boolean {
  if (typeof color !== 'string') return false;
  color = color.toLowerCase();

  return /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(color);
}
