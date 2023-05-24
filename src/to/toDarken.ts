import getRgbaVal from '../get/getRgbaVal';
import { rgbaToHex } from './toHex';
import { rgbaToHsl } from './toHsl';
import { rgbaToRgb } from './toRgb';
import type { IRGBA, IFormat } from '../types/index';

/**
 * 颜色加深
 * @param color 插件支持的颜色格式 hsl|rgb...
 * @param percent 深度 百分比（1-100）
 * @param format 颜色返回格式
 * @returns
 */
export default function toDarken(color: string, percent: number, format?: IFormat): string {
  if (percent < 0) percent = 0;
  if (percent > 100) percent = 100;
  const rgba: IRGBA = getRgbaVal(color);
  rgba.red = Math.round(rgba.red - 2.55 * percent);
  rgba.green = Math.round(rgba.green - 2.55 * percent);
  rgba.blue = Math.round(rgba.blue - 2.55 * percent);
  rgba.red = rgba.red < 0 ? 0 : rgba.red;
  rgba.green = rgba.green < 0 ? 0 : rgba.green;
  rgba.blue = rgba.blue < 0 ? 0 : rgba.blue;

  // 自定义样式
  if (format === 'hex') return rgbaToHex(rgba, false);
  if (format === 'hexa') return rgbaToHex(rgba, true);
  if (format === 'hsl') return rgbaToHsl(rgba, false);
  if (format === 'hsla') return rgbaToHsl(rgba, true);
  if (format === 'rgb') return rgbaToRgb(rgba, false);
  if (format === 'rgba') return rgbaToRgb(rgba, true);
  // 原有样式
  if (rgba.format === 'hex') return rgbaToHex(rgba, false);
  if (rgba.format === 'hexa') return rgbaToHex(rgba, true);
  if (rgba.format === 'hsl') return rgbaToHsl(rgba, false);
  if (rgba.format === 'hsla') return rgbaToHsl(rgba, true);
  if (rgba.format === 'rgb') return rgbaToRgb(rgba, false);
  if (rgba.format === 'rgba') return rgbaToRgb(rgba, true);

  return '';
}
