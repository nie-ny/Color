/**
 * 是否为 RGBA 格式的颜色
 * @param color rgba格式 rgba(0,0,0,1) rgba(100 100 100 / 0.5)
 * @returns
 */
export default function isRgba(color: string): boolean {
  if (typeof color !== 'string') return false;
  color = color.toLowerCase();

  if (isRgbaDef(color)) return true;
  if (isRgbaSpace(color)) return true;

  return false;
}

/**
 * 正常格式 效验
 * @param color rgba(0,0,0,1) 格式
 * @returns
 */
export function isRgbaDef(color: string): boolean {
  if (
    /^rgba[\(]([\s]*([0-1]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])[\s]*,){3}([\s]*(1|1.0|0|0.[1-9])[\s]*[\)]){1}$/.test(
      color
    )
  )
    return true;
  return false;
}

/**
 * 空格格式 效验
 * @param color rgba(100 100 100 / 0.5) 格式
 * @returns
 */
export function isRgbaSpace(color: string): boolean {
  if (
    /^rgba[\(]([\s]*([0-1]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])[\s]*[\s]){3}([/][\s])([\s]*(1|1.0|0|0.[1-9])[\s]*[\)])$/.test(
      color
    )
  )
    return true;
  return false;
}
