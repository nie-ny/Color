import rgbToHsl from './rgbToHsl';
import getRgbaVal from '../get/getRgbaVal';
import type { IRGBA } from '../types/index';

/**
 * 将颜色转换为 hsl|hsla 格式
 * @param color 插件支持的颜色格式 hex|rgb...
 * @param bol 是否返回 hsla格式
 * @param opacity 设置透明度
 * @returns
 */
export default function toHsl(color: string, bol: boolean = false, opacity?: number): string {
  const rgba: IRGBA = getRgbaVal(color);
  return rgbaToHsl(rgba, bol, opacity);
}

/**
 * 将 IRGBA 对象转换为 hsl格式字符串
 * @param rgba
 * @param bol 是否返回 hsla格式
 * @param opacity
 * @returns
 */
export function rgbaToHsl(rgba: IRGBA, bol: boolean = false, opacity?: number): string {
  const [h, s, l] = rgbToHsl(rgba.red, rgba.green, rgba.blue);
  if (!bol) return `hsl( ${h}, ${s}%, ${l}%)`;
  return `hsla( ${h}, ${s}%, ${l}%, ${typeof opacity === 'number' ? opacity : rgba.alpha})`;
}
