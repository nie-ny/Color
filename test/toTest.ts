import assert from 'assert';
import toRgb_aByObject from '../src/to/toRgb_aByObject';
import toHex_aByObject from '../src/to/toHex_aByObject';
import toHsl_aByObject from '../src/to/toHsl_aByObject';

describe('toRgb_aByObject', function () {
  it(`toRgb_aByObject('rgb(1,1,1)')`, () => {
    assert.deepStrictEqual(toRgb_aByObject('rgb(1 , 1 , 1 )'), {
      red: 1,
      green: 1,
      blue: 1,
      alpha: 1
    });
  });
  it(`toRgb_aByObject('rgb(10 10 1)')`, () => {
    assert.deepStrictEqual(toRgb_aByObject('rgb(10  10  1 )'), {
      red: 10,
      green: 10,
      blue: 1,
      alpha: 1
    });
  });
  it(`toRgb_aByObject('rgba(10,10,1, 0.12 )')`, () => {
    assert.deepStrictEqual(toRgb_aByObject('rgba(10,10,1, 0.12 )'), {
      red: 10,
      green: 10,
      blue: 1,
      alpha: 0.12
    });
  });
});

describe('toHex_aByObject', function () {
  it(`toHex_aByObject('#333')`, () => {
    assert.deepStrictEqual(toHex_aByObject('#333'), {
      red: 51,
      green: 51,
      blue: 51,
      alpha: 1
    });
  });
  it(`toHex_aByObject('#ffffff')`, () => {
    assert.deepStrictEqual(toHex_aByObject('#ffffff'), {
      red: 255,
      green: 255,
      blue: 255,
      alpha: 1
    });
  });
  it(`toHex_aByObject('#ffffff00')`, () => {
    assert.deepStrictEqual(toHex_aByObject('#ffffff00'), {
      red: 255,
      green: 255,
      blue: 255,
      alpha: 0
    });
  });
  it(`toHex_aByObject('#fff1')`, () => {
    assert.deepStrictEqual(toHex_aByObject('#fff1'), {
      red: 255,
      green: 255,
      blue: 255,
      alpha: 0.1
    });
  });
});

describe('toHsl_aByObject', function () {
  it(`toHsl_aByObject('hsla(36,50%,50%,0.5)')`, () => {
    assert.deepStrictEqual(toHsl_aByObject('hsla(36,50%,50%,0.5)'), {
      red: 191.25,
      green: 140.25,
      blue: 63.75,
      alpha: 0.5
    });
  });

  it(`toHsl_aByObject('hsla( 360, 50%, 50%, 1)')`, () => {
    assert.deepStrictEqual(toHsl_aByObject('hsla(360,50%,50%, 1)'), {
      red: 191.25,
      green: 63.75,
      blue: 63.75,
      alpha: 1
    });
  });

  it(`toHsl_aByObject('hsl( 200, 50%, 50%')`, () => {
    assert.deepStrictEqual(toHsl_aByObject('hsl( 200, 50%, 50%)'), {
      red: 63.75,
      green: 148.74999999999997,
      blue: 191.25,
      alpha: 1
    });
  });
});
