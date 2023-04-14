import { isRgbPerCent } from '../is/isRgb';

interface IObject {
  red: number;
  green: number;
  blue: number;
}

/**
 * 将 rgb格式颜色字符串 转换 为具有每种颜色值的对象
 * @param color rgb格式 rgb(0,0,0) rgb(1 1 1) rgb(100%, 50%, 99%)
 * @returns
 */
export default function toRGBObject(color: string = ''): IObject {
  let arr: Array<number> = [];
  if (isRgbPerCent(color)) {
    arr =
      color.match(/\d+%/g)?.map((item: string) => {
        item = item.replace('%', '');
        return ~~((255 / 100) * Number(item));
      }) || [];
  } else {
    arr = color.match(/\d+/g)?.map(Number) || [];
  }
  const [red = 0, green = 0, blue = 0] = arr;
  return { red, green, blue };
}
