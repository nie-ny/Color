import assert from 'assert';
import toRGBObject from '../src/to/toRGBObject';

describe('toRGBObject', function () {
  it(`toRGBObject('rgb(1,1,1)')`, () => {
    assert.deepStrictEqual(toRGBObject('rgb(1 , 1 , 1 )'), { red: 1, green: 1, blue: 1 });
  });
  it(`toRGBObject('rgb(10 10 1)')`, () => {
    assert.deepStrictEqual(toRGBObject('rgb(10  10  1 )'), { red: 10, green: 10, blue: 1 });
  });
  it(`toRGBObject('rgb(10%,10%,1%)')`, () => {
    assert.deepStrictEqual(toRGBObject('rgb(10%,10%,1%)'), { red: 25, green: 25, blue: 2 });
  });
});
