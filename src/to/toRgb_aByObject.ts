import type { IObject } from '../types/index';

/**
 * 将 rgb|rgba格式颜色字符串 转换 为具有每种颜色值的对象
 * @param color rgb格式 rgb(0,0,0)|rgb(1 1 1)  rgba格式 rgb(0,0,0,0.1)|rgb(1 1 1 0.5)
 * @returns
 */
export default function toRgb_aByObject(color: string = ''): IObject {
  let arr: Array<number> = [];
  arr = color.match(/\d+/g)?.map(Number) || [];
  const [red = 0, green = 0, blue = 0] = arr;

  let alpha = 1;
  const [alphaStr = ''] = color.match(/([0]([.]{1}[0-9]*){1}[\s]*\)|1[\s]*\))/g)?.map(String) || [];
  if (alphaStr) {
    alpha = Number(alphaStr.substring(0, alphaStr.length - 1).replace(/\s*/g, ''));
  }
  return { red, green, blue, alpha };
}
