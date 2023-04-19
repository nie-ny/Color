import assert from 'assert';
import getRandomHex from '../src/get/getRandomHex';
import getColorByKeyword from '../src/get/getColorByKeyword';
import getRgbaVal from '../src/get/getRgbaVal';

describe('getRandomHex', function () {
  // it(`getRandomHex('hexa')`, () => {
  //   assert.strictEqual(getRandomHex('hexa'), '');
  // });
});

describe('getColorByKeyword', function () {
  it(`getColorByKeyword('red')`, () => {
    assert.strictEqual(getColorByKeyword('red'), '#ff0000');
  });
  it(`getColorByKeyword('blue')`, () => {
    assert.strictEqual(getColorByKeyword('blue'), '#0000ff');
  });
});

describe('getRgbaVal', function () {
  it(`getRgbaVal('hsl( 200, 50%, 50%)')`, () => {
    assert.deepStrictEqual(getRgbaVal('hsl( 200, 50%, 50%)'), {
      red: 63.75,
      green: 148.74999999999997,
      blue: 191.25,
      alpha: 1
    });
  });
  it(`getRgbaVal('rgba( 20, 20, 200, 0.5)')`, () => {
    assert.deepStrictEqual(getRgbaVal('rgba( 20, 20, 200, 0.5)'), {
      red: 20,
      green: 20,
      blue: 200,
      alpha: 0.5
    });
  });
  it(`getRgbaVal('#000000ff')`, () => {
    assert.deepStrictEqual(getRgbaVal('#000000aa'), {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0.7
    });
  });
  it(`getRgbaVal('red')`, () => {
    assert.deepStrictEqual(getRgbaVal('red'), {
      red: 255,
      green: 0,
      blue: 0,
      alpha: 1
    });
  });
});
