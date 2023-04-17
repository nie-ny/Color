import isHex from './isHex';
import isHexa from './isHexa';
import isRgb from './isRgb';
import isRgba from './isRgba';
import isHsl from './isHsl';
import isHsla from './isHsla';
import getColorByKeyword from '../get/getColorByKeyword';
import { ColorKeywords } from '../components/enum';

/**
 * 颜色验证，插件支持的返回对应格式名，关键字返回对应的hex格式颜色。不支持报错。
 * @param color 颜色字段
 * @returns
 */
export default function isValidator(color: string): string {
  if (isHex(color)) return 'hex';
  if (isHexa(color)) return 'hexa';
  if (isRgb(color)) return 'rgb';
  if (isRgba(color)) return 'rgba';
  if (isHsl(color)) return 'hsl';
  if (isHsla(color)) return 'hsla';

  const keywordColor = getColorByKeyword(color as keyof typeof ColorKeywords);
  if (!keywordColor) throw new Error(`Color: 非插件支持类型 ${color}`);

  return keywordColor;
}
