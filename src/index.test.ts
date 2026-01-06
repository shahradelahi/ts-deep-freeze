import { describe, expect, it } from 'vitest';

import { deepFreeze } from '.';

describe('deepFreeze', () => {
  it('freezes a plain object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const result = deepFreeze(obj);

    expect(result).toBe(obj);
    expect(Object.isFrozen(obj)).toBe(true);
    expect(Object.isFrozen(obj.b)).toBe(true);
  });

  it('freezes arrays', () => {
    const arr = [1, { a: 2 }];
    deepFreeze(arr);

    expect(Object.isFrozen(arr)).toBe(true);
    expect(Object.isFrozen(arr[1])).toBe(true);
  });

  it('handles cyclic references gracefully', () => {
    const obj: any = { a: 1 };
    obj.self = obj;

    deepFreeze(obj);

    expect(Object.isFrozen(obj)).toBe(true);
    expect(Object.isFrozen(obj.self)).toBe(true);
  });

  it('ignores non-object values', () => {
    expect(deepFreeze(null)).toBe(null);
    expect(deepFreeze(undefined)).toBe(undefined);
    expect(deepFreeze(123)).toBe(123);
    expect(deepFreeze('string')).toBe('string');
  });

  it('handles functions (freezes properties attached to them)', () => {
    const fn: any = () => true;
    fn.prop = { a: 1 };

    deepFreeze(fn);

    expect(Object.isFrozen(fn)).toBe(true);
    expect(Object.isFrozen(fn.prop)).toBe(true);
  });

  it('prevents modification in runtime', () => {
    const obj = { a: 1, b: [2] };
    deepFreeze(obj);

    expect(() => {
      obj.a = 2;
    }).toThrow();

    expect(() => {
      obj.b.push(3);
    }).toThrow();
  });
});
