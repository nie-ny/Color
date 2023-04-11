import assert from 'assert';
import isHex from '../src/isHex';

describe('isHex', function () {
  it(`isHex('')`, function () {
    assert.strictEqual(isHex(''), false);
  });
  it(`isHex('no')`, function () {
    assert.strictEqual(isHex('no'), false);
  });
  it(`isHex('#000')`, () => {
    assert.strictEqual(isHex('#000'), true);
  });
  it(`isHex('#000fff')`, () => {
    assert.strictEqual(isHex('#000fff'), true);
  });
  it(`isHex('rgb(0,0,0)')`, () => {
    assert.strictEqual(isHex('rgb(0,0,0)'), false);
  });
});
