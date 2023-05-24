import getRgbaVal from '../get/getRgbaVal';
import type { IRGBA } from '../types/index';

/**
 * 将颜色转换为 rgb|rgba 格式
 * @param color 插件支持的颜色格式 hex|rgb...
 * @param bol 是否返回 rgba格式
 * @param opacity 设置透明度
 * @returns
 */
export default function toRgb(color: string, bol: boolean = false, opacity?: number): string {
  const rgba: IRGBA = getRgbaVal(color);
  return rgbaToRgb(rgba, bol, opacity);
}

/**
 * 将 IRGBA 对象转换为 rgb格式字符串
 * @param rgba
 * @param bol 是否返回 rgba格式
 * @param opacity
 * @returns
 */
export function rgbaToRgb(rgba: IRGBA, bol: boolean = false, opacity?: number): string {
  if (!bol) return `rgb(${rgba.red}, ${rgba.green}, ${rgba.blue})`;
  return `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${
    typeof opacity === 'number' ? opacity : rgba.alpha
  })`;
}
