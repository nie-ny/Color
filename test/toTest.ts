import assert from 'assert';
import toRgb_aByObject from '../src/to/toRgb_aByObject';
import toHex_aByObject from '../src/to/toHex_aByObject';
import toHsl_aByObject from '../src/to/toHsl_aByObject';
import toRgb from '../src/to/toRgb';
import toHex from '../src/to/toHex';
import toHsl from '../src/to/toHsl';

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
      red: 191,
      green: 140,
      blue: 63,
      alpha: 0.5
    });
  });

  it(`toHsl_aByObject('hsla( 360, 50%, 50%, 1)')`, () => {
    assert.deepStrictEqual(toHsl_aByObject('hsla(360,50%,50%, 1)'), {
      red: 191,
      green: 63,
      blue: 63,
      alpha: 1
    });
  });

  it(`toHsl_aByObject('hsl( 200, 50%, 50%')`, () => {
    assert.deepStrictEqual(toHsl_aByObject('hsl( 200, 50%, 50%)'), {
      red: 63,
      green: 148,
      blue: 191,
      alpha: 1
    });
  });
});

describe('toRgb', function () {
  it(`toRgb('#70557C')`, () => {
    assert.strictEqual(toRgb('#70557C'), 'rgb( 112, 85, 124)');
  });
  it(`toRgb('red', true)`, () => {
    assert.strictEqual(toRgb('red', true), 'rgba( 255, 0, 0, 1)');
  });
  it(`toRgb('hsl(228, 56%, 19%)', true, 0.5)`, () => {
    assert.strictEqual(toRgb('hsl(228, 56%, 19%)', true, 0.5), 'rgba( 21, 32, 75, 0.5)');
  });
  it(`toRgb('#70557C00', true)`, () => {
    assert.strictEqual(toRgb('#70557C00', true), 'rgba( 112, 85, 124, 0)');
  });
});

describe('toHex', function () {
  it(`toHex('rgb( 112, 85, 124)')`, () => {
    assert.strictEqual(toHex('rgb( 112, 85, 124)'), '#70557c');
  });
  it(`toHex('rgba( 112, 85, 124, 0.5)')`, () => {
    assert.strictEqual(toHex('rgba( 112, 85, 124, 0.5)', true), '#70557c7f');
  });
  it(`toHex('red', true)`, () => {
    assert.strictEqual(toHex('red', true, 0), '#ff000000');
  });
  it(`toHex('red')`, () => {
    assert.strictEqual(toHex('red'), '#ff0000');
  });
  it(`toHex('hsl(228, 56%, 19%)', true)`, () => {
    assert.strictEqual(toHex('hsl(228, 56%, 19%)', true, 0.5), '#15204b7f');
  });
  it(`toHex('hsl(228, 56%, 19%)', true)`, () => {
    assert.strictEqual(toHex('hsla(228, 56%, 19%, 0.5)', true), '#15204b7f');
  });
});

describe('toHsl', function () {
  it(`toHsl('rgb( 112, 85, 124)')`, () => {
    assert.strictEqual(toHsl('rgb( 112, 85, 124)'), 'hsl( 282, 19%, 41%)');
  });
  it(`toHsl('rgba( 112, 85, 124, 0.5)')`, () => {
    assert.strictEqual(toHsl('rgba( 112, 85, 124, 0.5)', true), 'hsla( 282, 19%, 41%, 0.5)');
  });
  it(`toHsl('red', true)`, () => {
    assert.strictEqual(toHsl('red', true), 'hsla( 0, 100%, 50%, 1)');
  });
  it(`toHsl('red')`, () => {
    assert.strictEqual(toHsl('red'), 'hsl( 0, 100%, 50%)');
  });
  it(`toHsl('hsl(228, 56%, 19%)', true)`, () => {
    assert.strictEqual(toHsl('hsl(228, 56%, 19%)', true, 0.5), 'hsla( 228, 56%, 19%, 0.5)');
  });
  it(`toHsl('#ffaa22aa', true)`, () => {
    assert.strictEqual(toHsl('#ffaa22aa', true), 'hsla( 37, 100%, 57%, 0.7)');
  });
});
