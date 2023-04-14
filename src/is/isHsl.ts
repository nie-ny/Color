/**
 * 是否为 Hsl 格式的颜色
 * @param color Hsl格式 hsl(0,10%,10%) hsl(100 100% 100%)
 * @returns
 */
export default function isHsl(color: string): boolean {
  if (typeof color !== 'string') return false;
  color = color.toLowerCase();

  // hsl(0,10%,10%) 格式
  if (
    /^hsl[\(]([\s]*([012]?[0-9][0-9]?|3[0-5][0-9]|360)[\s]*,)([\s]*((0|100|[0-9][0-9]?)%)[\s]*,)([\s]*((0|100|[0-9][0-9]?)%)[\s]*)[\)]$/.test(
      color
    )
  )
    return true;

  // hsl(100 100% 100%) 格式
  if (
    /^hsl[\(]([\s]*([012]?[0-9][0-9]?|3[0-5][0-9]|360)[\s]*[\s])([\s]*((0|100|[0-9][0-9]?)%)[\s]*[\s])([\s]*((0|100|[0-9][0-9]?)%)[\s]*)[\)]$/.test(
      color
    )
  )
    return true;

  return false;
}
