/**
 * 是否为 Hsla 格式的颜色
 * @param color Hsla格式 hsl(0,10%,10%,0.1) hsla(100 100% 100% / 0.5)
 * @returns
 */
export default function isHsla(color: string): boolean {
  if (typeof color !== 'string') return false;
  color = color.toLowerCase();

  // hsl(0,10%,10%,0.1) 格式
  if (
    /^hsla[\(]([\s]*([012]?[0-9][0-9]?|3[0-5][0-9]|360)[\s]*,)([\s]*((0|100|[0-9][0-9]?)%)[\s]*,){2}([\s]*(1|1.0|0|0.[0-9])[\s]*)[\)]$/.test(
      color
    )
  )
    return true;

  // hsla(100 100% 100% / 0.5) 格式
  if (
    /^hsla[\(]([\s]*([012]?[0-9][0-9]?|3[0-5][0-9]|360)[\s]*[\s])([\s]*((0|100|[0-9][0-9]?)%)[\s]*[\s]){2}([/][\s])([\s]*(1|1.0|0|0.[0-9])[\s]*)[\)]$/.test(
      color
    )
  )
    return true;

  return false;
}
