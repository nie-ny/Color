import assert from 'assert';
import isHex from '../src/is/isHex';
import isHexa from '../src/is/isHexa';
import isRgb from '../src/is/isRgb';
import isRgba from '../src/is/isRgba';
import isHsl from '../src/is/isHsl';
import isHsla from '../src/is/isHsla';
import isColor from '../src/is/isColor';

describe('isHex', function () {
  it(`isHex('#000')`, () => {
    assert.strictEqual(isHex('#000'), true);
  });
  it(`isHex('#000fff')`, () => {
    assert.strictEqual(isHex('#000fff'), true);
  });
  it(`isHex('')`, function () {
    assert.strictEqual(isHex(''), false);
  });
  it(`isHex('no')`, function () {
    assert.strictEqual(isHex('no'), false);
  });
  it(`isHex('#000a')`, () => {
    assert.strictEqual(isHex('#000a'), false);
  });

  it(`isHex('#000fffa')`, () => {
    assert.strictEqual(isHex('#000fffa'), false);
  });
  it(`isHex('rgb(0,0,0)')`, () => {
    assert.strictEqual(isHex('rgb(0,0,0)'), false);
  });
});

describe('isHexa', function () {
  it(`isHexa('#0000')`, () => {
    assert.strictEqual(isHexa('#0000'), true);
  });
  it(`isHexa('#000fffff')`, () => {
    assert.strictEqual(isHexa('#000fffff'), true);
  });
  it(`isHexa('')`, function () {
    assert.strictEqual(isHexa(''), false);
  });
  it(`isHexa('no')`, function () {
    assert.strictEqual(isHexa('no'), false);
  });
  it(`isHexa('#000a33')`, () => {
    assert.strictEqual(isHexa('#000a33'), false);
  });

  it(`isHexa('#000fffhh')`, () => {
    assert.strictEqual(isHexa('#000fffhh'), false);
  });
  it(`isHexa('rgb(0,0,0)')`, () => {
    assert.strictEqual(isHexa('rgb(0,0,0)'), false);
  });
});

describe('isRgb', function () {
  it(`isRgb('RGB(0,0,0)')`, function () {
    assert.strictEqual(isRgb('RGB(0,0,0)'), true);
  });
  it(`isRgb('RGB( 255, 255 , 255)')`, function () {
    assert.strictEqual(isRgb('RGB( 255, 255 , 255)'), true);
  });
  it(`isRgb('RGB( 255 255  255)')`, function () {
    assert.strictEqual(isRgb('RGB( 255 255  255)'), true);
  });
  it(`isRgb('RGB( 2%, 4%, 5%)')`, function () {
    assert.strictEqual(isRgb('RGB( 2%, 4%, 5%)'), true);
  });
  it(`isRgb('')`, function () {
    assert.strictEqual(isRgb(''), false);
  });
  it(`isRgb('RGB( 255255  255)')`, function () {
    assert.strictEqual(isRgb('RGB( 255255  255)'), false);
  });
  it(`isRgb('RGB( 255% 255% 255%)')`, function () {
    assert.strictEqual(isRgb('RGB( 255% 255% 255%)'), false);
  });
  it(`isRgb('RGB( 275, 255 , 255)')`, function () {
    assert.strictEqual(isRgb('RGB( 275, 255 , 255)'), false);
  });
  it(`isRgb('rgb( a, a, 255)')`, function () {
    assert.strictEqual(isRgb('RGB( a, a, 255)'), false);
  });
  it(`isRgb('rgb( 0, 0, 0)s')`, function () {
    assert.strictEqual(isRgb('rgb( 0, 0, 0)s'), false);
  });
  it(`isRgb('rgba( 0, 0, 0)')`, function () {
    assert.strictEqual(isRgb('rgba( 0, 0, 0)'), false);
  });
});

describe('isRgba', function () {
  it(`isRgba('rgba(0,0,0,1)')`, function () {
    assert.strictEqual(isRgba('rgba(0,0,0,1)'), true);
  });
  it(`isRgba('RGBA( 255, 255 , 255, 0.1)')`, function () {
    assert.strictEqual(isRgba('RGBA( 255, 255 , 255, 0.1)'), true);
  });
  it(`isRgba('RGBA( 100 100 100 / 0.1)')`, function () {
    assert.strictEqual(isRgba('RGBA( 100 100 100 / 0.1)'), true);
  });

  it(`isRgba('RGBA( 255, 255 , 255)')`, function () {
    assert.strictEqual(isRgba('RGBA( 255, 255 , 255)'), false);
  });
  it(`isRgba('rgba( a, a, 255, 1)')`, function () {
    assert.strictEqual(isRgba('rgba( a, a, 255, 1)'), false);
  });
  it(`isRgba('rgba( 0, 0, 0, 1)s')`, function () {
    assert.strictEqual(isRgba('rgba( 0, 0, 0, 1)s'), false);
  });
  it(`isRgba('rgb( 0, 0, 0, 1)')`, function () {
    assert.strictEqual(isRgba('rgb( 0, 0, 0, 1)'), false);
  });
});

describe('isHsl', function () {
  it(`isHsl('HSL(0,0%,0%)')`, function () {
    assert.strictEqual(isHsl('HSL(0,0%,0%)'), true);
  });
  it(`isHsl('hsl(1,2%,3%)')`, function () {
    assert.strictEqual(isHsl('hsl(1,2%,3%)'), true);
  });
  it(`isHsl('hsl(1 2% 3%)')`, function () {
    assert.strictEqual(isHsl('hsl(1 2% 3%)'), true);
  });
  it(`isHsl('hsl(1 , 2%, 3% )')`, function () {
    assert.strictEqual(isHsl('hsl(1 , 2%, 3% )'), true);
  });
  it(`isHsl('hsl(400,2%,3%)')`, function () {
    assert.strictEqual(isHsl('hsl(400,2%,3%)'), false);
  });
  it(`isHsl('hsl(ss,2%,3%)')`, function () {
    assert.strictEqual(isHsl('hsl(ss,2%,3%)'), false);
  });
  it(`isHsl('hsl(2,2%,3%)s')`, function () {
    assert.strictEqual(isHsl('hsl(2,2%,3%)s'), false);
  });
  it(`isHsl('hsl(100,200%,3%)')`, function () {
    assert.strictEqual(isHsl('hsl(100,200%,3%)'), false);
  });
});

describe('isHsla', function () {
  it(`isHsla('HSLa(0,0%,0%,0.1)')`, function () {
    assert.strictEqual(isHsla('HSLa(0,0%,0%,0.1)'), true);
  });
  it(`isHsla('hsla(1,2%,3%,0.1)')`, function () {
    assert.strictEqual(isHsla('hsla(1,2%,3%,0.1)'), true);
  });
  it(`isHsla('hsla(1 , 2%, 3% ,0.1)')`, function () {
    assert.strictEqual(isHsla('hsla(1 , 2%, 3% ,0.1)'), true);
  });
  it(`isHsla('hsla(1 2% 3% / 0.1)')`, function () {
    assert.strictEqual(isHsla('hsla(1 2% 3% / 0.1)'), true);
  });
  it(`isHsla('hsla(400,2%,3%)')`, function () {
    assert.strictEqual(isHsla('hsla(400,2%,3%,0.1)'), false);
  });
  it(`isHsla('hsla(ss,2%,3%)')`, function () {
    assert.strictEqual(isHsla('hsla(ss,2%,3%,0.1)'), false);
  });
  it(`isHsla('hsla(2,2%,3%)s')`, function () {
    assert.strictEqual(isHsla('hsla(2,2%,3%,0.1)s'), false);
  });
  it(`isHsla('hsla(100,200%,3%)')`, function () {
    assert.strictEqual(isHsla('hsla(100,200%,3%,0.1)'), false);
  });
  it(`isHsla('hsla(1 , 2%, 3% ,2)')`, function () {
    assert.strictEqual(isHsla('hsla(1 , 2%, 3% ,2)'), false);
  });
});

describe('isColor', function () {
  it(`isColor('#000')`, () => {
    assert.strictEqual(isColor('#000'), true);
  });
  it(`isColor('rgb(0,0,0)')`, () => {
    assert.strictEqual(isColor('rgb(0,0,0)'), true);
  });
  it(`isColor('rgba(0,0,0,1)')`, () => {
    assert.strictEqual(isColor('rgba(0,0,0,1)'), true);
  });
  it(`isColor('HSL(0,0%,0%)')`, () => {
    assert.strictEqual(isColor('HSL(0,0%,0%)'), true);
  });
  it(`isColor('HSLa(0,0%,0%)')`, () => {
    assert.strictEqual(isColor('HSLa(0,0%,0%,0.1)'), true);
  });
  it(`isColor('red')`, () => {
    assert.strictEqual(isColor('red'), true);
  });
  it(`isColor('wwwww')`, () => {
    assert.strictEqual(isColor('wwwww'), false);
  });
});
