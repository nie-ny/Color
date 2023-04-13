import isHex from './isHex';
import isRgb from './isRgb';
import isRgba from './isRgba';
import isHsl from './isHsl';
import isHsla from './isHsla';
import getColorByKeyword from '../get/getColorByKeyword';

/**
 * 是否为 常用颜色类型
 * @param color 各种颜色类型的字符串
 * @returns
 */
export default function isColor(color: string): boolean {
  if (isHex(color)) return true;
  if (isRgb(color)) return true;
  if (isRgba(color)) return true;
  if (isHsl(color)) return true;
  if (isHsla(color)) return true;

  const keywordColor = getColorByKeyword(color as any);
  if (keywordColor) return true;

  return false;
}
