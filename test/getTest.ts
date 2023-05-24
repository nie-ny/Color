import assert from 'assert';
import getRandomHex from '../src/get/getRandomHex';
import getColorByKeyword from '../src/get/getColorByKeyword';
import getRgbaVal from '../src/get/getRgbaVal';
import getGeneratePalette from '../src/get/getGeneratePalette';

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
      red: 63,
      green: 148,
      blue: 191,
      alpha: 1,
      format: 'hsl'
    });
  });
  it(`getRgbaVal('rgba( 20, 20, 200, 0.5)')`, () => {
    assert.deepStrictEqual(getRgbaVal('rgba( 20, 20, 200, 0.5)'), {
      red: 20,
      green: 20,
      blue: 200,
      alpha: 0.5,
      format: 'rgba'
    });
  });
  it(`getRgbaVal('#000000ff')`, () => {
    assert.deepStrictEqual(getRgbaVal('#000000aa'), {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0.7,
      format: 'hexa'
    });
  });
  it(`getRgbaVal('red')`, () => {
    assert.deepStrictEqual(getRgbaVal('red'), {
      red: 255,
      green: 0,
      blue: 0,
      alpha: 1,
      format: 'hex'
    });
  });
});

describe('getGeneratePalette', function () {
  it(`getGeneratePalette("#ff0000", "yellow", 6, 'rgb')`, () => {
    assert.deepStrictEqual(getGeneratePalette('#ff0000', 'yellow', 6, 'rgb'), [
      'rgb(255, 0, 0)',
      'rgb(255, 51, 0)',
      'rgb(255, 102, 0)',
      'rgb(255, 153, 0)',
      'rgb(255, 204, 0)',
      'rgb(255, 255, 0)'
    ]);
  });

  it(`getGeneratePalette("#ff0000", "yellow", 6)`, () => {
    assert.deepStrictEqual(getGeneratePalette('#ff0000', 'yellow', 6), [
      '#ff0000',
      '#ff3300',
      '#ff6600',
      '#ff9900',
      '#ffcc00',
      '#ffff00'
    ]);
  });

  it(`getGeneratePalette("#cccccc", "#000000", 8, 'rgb')`, () => {
    assert.deepStrictEqual(getGeneratePalette('#cccccc', '#000000', 8, 'rgb'), [
      'rgb(204, 204, 204)',
      'rgb(175, 175, 175)',
      'rgb(146, 146, 146)',
      'rgb(117, 117, 117)',
      'rgb(87, 87, 87)',
      'rgb(58, 58, 58)',
      'rgb(29, 29, 29)',
      'rgb(0, 0, 0)'
    ]);
  });
});
