/**
 * 是否为 Hexa 格式的颜色
 * @param color Hex格式 #00000000
 * @returns
 */
export default function isHexa(color: string): boolean {
  if (typeof color !== 'string') return false;
  color = color.toLowerCase();

  return /^#([0-9a-fA-f]{4}|[0-9a-fA-f]{8})$/.test(color);
}
