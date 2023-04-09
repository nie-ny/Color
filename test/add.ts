import assert from 'assert';
import add from '../src/add';

describe('add', function () {
  it('数字相加', function () {
    assert.strictEqual(add(6, 4), 10);
    assert.strictEqual(add(-6, 4), -2);
    assert.strictEqual(add(-6, -4), -10);
  });
});
