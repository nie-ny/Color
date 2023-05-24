import getRgbaVal from './getRgbaVal';
import { rgbaToHex } from '../to/toHex';
import { rgbaToHsl } from '../to/toHsl';
import { rgbaToRgb } from '../to/toRgb';
import type { IRGBA, IFormat } from '../types/index';

/**
 * 获取颜色 色阶
 * @param startColor 开始颜色
 * @param endColor 结束颜色
 * @param steps 色阶数
 * @returns 颜色数组
 */
export default function generateColorPalette(
  startColor: string,
  endColor: string,
  steps: number = 10,
  format?: IFormat
): string[] {
  const startRgb: IRGBA = getRgbaVal(startColor);
  const endRgb: IRGBA = getRgbaVal(endColor);

  const colors: string[] = [];
  for (let i = 0; i < steps; i++) {
    const color: IRGBA = {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 1
    };
    color.red = Math.round(startRgb.red + (endRgb.red - startRgb.red) * (i / (steps - 1)));
    color.green = Math.round(startRgb.green + (endRgb.green - startRgb.green) * (i / (steps - 1)));
    color.blue = Math.round(startRgb.blue + (endRgb.blue - startRgb.blue) * (i / (steps - 1)));
    color.format = startRgb.format;
    colors.push(formatColor(color, format));
  }
  return colors;
}

/**
 * rgba对象 转换为 颜色字符串
 * @param rgba
 * @param format
 * @returns
 */
function formatColor(rgba: IRGBA, format?: IFormat): string {
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
