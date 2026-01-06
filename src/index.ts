import type { DeepReadonly } from './typings';

/**
 * Recursively freezes an object and its properties.
 * This function modifies the object in place and returns it.
 *
 * @template T The type of the object.
 * @param obj The object to freeze.
 * @returns The same object, but deeply frozen.
 *
 * @example
 * const obj = { a: 1, b: { c: 2 } };
 * deepFreeze(obj);
 * // obj is now frozen, including obj.b
 */
export function deepFreeze<T>(obj: T): DeepReadonly<T> {
  if (
    obj === null ||
    (typeof obj !== 'object' && typeof obj !== 'function') ||
    Object.isFrozen(obj)
  ) {
    return obj as DeepReadonly<T>;
  }

  Object.freeze(obj);

  const keys = Reflect.ownKeys(obj);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key === undefined) continue;
    const value = (obj as any)[key];
    deepFreeze(value);
  }

  return obj as DeepReadonly<T>;
}

export { deepFreeze as default };
export type * from './typings';
