/**
 * 是否为 RGBA 格式的颜色
 * @param color rgba格式 rgba(0,0,0,1)
 * @returns
 */
export default function isRgba(color: string): boolean {
  if (typeof color !== 'string') return false;
  color = color.toLowerCase();

  return /^rgba[\(]([\s]*([0-1]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])[\s]*,){3}([\s]*(1|1.0|0|0.[1-9])[\s]*[\)]){1}$/.test(
    color
  );
}
