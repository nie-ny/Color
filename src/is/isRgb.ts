/**
 * 是否为 RGB 格式的颜色
 * @param color rgb格式 rgb(0,0,0) rgb(1 1 1)
 * @returns
 */
export default function isRgb(color: string): boolean {
  if (typeof color !== 'string') return false;
  color = color.toLowerCase();

  // rgb(0,0,0) 格式
  if (
    /^rgb[\(]([\s]*([0-1]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])[\s]*,){2}([\s]*([0-1]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])[\s]*[\)]){1}$/.test(
      color
    )
  )
    return true;

  // rgb(100%, 50%, 99%) 格式
  if (
    /^rgb[\(]([\s]*([0-9]?[0-9]|100)%[\s]*,){2}([\s]*([0-9]?[0-9]|100)%[\s]*[\)]){1}$/.test(color)
  )
    return true;

  // rgb(1 1 1) 格式
  if (
    /^rgb[\(]([\s]*([0-1]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])[\s]*[\s]){2}([\s]*([0-1]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])[\s]*[\)]){1}$/.test(
      color
    )
  )
    return true;

  return false;
}
