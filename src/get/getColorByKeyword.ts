import { ColorKeywords } from '../components/enum';

/**
 * 按关键字获取颜色
 * @param keyword 颜色枚举键值
 * @returns hex 格式颜色值
 */
export default function getColorByKeyword(keyword: keyof typeof ColorKeywords): string {
  return ColorKeywords[keyword];
}
