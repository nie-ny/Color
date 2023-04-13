/**
 * 是否为 Hsl 格式的颜色
 * @param color Hsl格式 hsl(0,10%,10%)
 * @returns
 */
export default function isHsl(color: string): boolean {
  if (typeof color !== 'string') return false;
  color = color.toLowerCase();

  return /^hsl[\(]([\s]*([012]?[0-9][0-9]?|3[0-5][0-9]|360)[\s]*,)([\s]*((0|100|[0-9][0-9]?)%)[\s]*,)([\s]*((0|100|[0-9][0-9]?)%)[\s]*)[\)]$/.test(
    color
  );
}
