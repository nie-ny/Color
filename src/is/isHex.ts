/**
 * 是否为 Hex 格式的颜色
 * @param color Hex格式 #000000
 * @returns
 */
export default function isHex(color: string): boolean {
  if (typeof color !== 'string') return false;
  color = color.toLowerCase();

  return /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(color);
}
