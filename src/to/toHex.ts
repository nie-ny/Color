import getRgbaVal from '../get/getRgbaVal';
import type { IRGBA } from '../types/index';

/**
 * 将颜色转换为 hex|hexa 格式
 * @param color 插件支持的颜色格式 hsl|rgb...
 * @param bol 是否返回 hexa格式
 * @param opacity 设置透明度
 * @returns
 */
export default function toHex(color: string, bol: boolean = false, opacity?: number): string {
  const rgba: IRGBA = getRgbaVal(color);
  return rgbaToHex(rgba, bol, opacity);
}

/**
 * 将 IRGBA 对象转换为 Hex格式字符串
 * @param rgba
 * @param bol 是否返回 hexa格式
 * @param opacity
 * @returns
 */
export function rgbaToHex(rgba: IRGBA, bol: boolean = false, opacity?: number): string {
  if (!bol)
    return `#${format10To16(rgba.red)}${format10To16(rgba.green)}${format10To16(rgba.blue)}`;
  return `#${format10To16(rgba.red)}${format10To16(rgba.green)}${format10To16(rgba.blue)}${
    typeof opacity === 'number'
      ? format10To16(~~(opacity * 255))
      : format10To16(~~(rgba.alpha * 255))
  }`;
}

// 10进制转16进制 不足两位 补0
const format10To16 = (x: number): string => Number(x).toString(16).padStart(2, '0');
