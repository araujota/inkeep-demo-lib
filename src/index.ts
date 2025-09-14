/**
 * inkeep-demo-lib
 * A tiny utilities library used to demonstrate documentation crawling and indexing.
 * 
 * @packageDocumentation
 */

/**
 * A resilient FIFO queue with time-based dequeue, used for demo purposes.
 */
export class TinyQueue<T> {
  private items: T[] = [];
  private timeouts: number[] = [];

  /**
   * Enqueue a value.
   * @param value Item to enqueue.
   * @returns New length of the queue.
   * @example
   * const q = new TinyQueue<number>();
   * q.enqueue(42);
   */
  enqueue(value: T): number {
    this.items.push(value);
    this.timeouts.push(Date.now());
    return this.items.length;
  }

  /**
   * Dequeue the next value if it has been in the queue at least `minMs` milliseconds.
   * @param minMs Minimum age in milliseconds before dequeue is allowed.
   * @returns The dequeued value, or `undefined` if none is ready.
   */
  dequeue(minMs = 0): T | undefined {
    if (this.items.length === 0) return undefined;
    const age = Date.now() - this.timeouts[0];
    if (age < minMs) return undefined;
    this.timeouts.shift();
    return this.items.shift();
  }

  /** Number of items currently in the queue. */
  get length(): number {
    return this.items.length;
  }

  /** Remove all items from the queue. */
  clear(): void {
    this.items = [];
    this.timeouts = [];
  }
}

/**
 * Compute a stable hash (djb2) for strings.
 * @param s Input string.
 * @returns 32-bit integer hash.
 * @example
 * hash("hello"); // 99162322
 */
export function hash(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h) + s.charCodeAt(i);
  }
  return h >>> 0;
}

// ============================================================================
// ARRAY UTILITIES
// ============================================================================

/**
 * Split an array into chunks of a specified size.
 * @param array The array to chunk.
 * @param size The size of each chunk.
 * @returns Array of chunks.
 * @example
 * chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) throw new Error('Chunk size must be greater than 0');
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/**
 * Flatten a nested array by one level.
 * @param array The array to flatten.
 * @returns Flattened array.
 * @example
 * flatten([[1, 2], [3, 4], [5]]); // [1, 2, 3, 4, 5]
 */
export function flatten<T>(array: T[][]): T[] {
  return array.reduce((acc, val) => acc.concat(val), []);
}

/**
 * Get unique values from an array.
 * @param array The array to process.
 * @returns Array with unique values.
 * @example
 * unique([1, 2, 2, 3, 3, 3]); // [1, 2, 3]
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Shuffle an array randomly using Fisher-Yates algorithm.
 * @param array The array to shuffle.
 * @returns A new shuffled array.
 * @example
 * shuffle([1, 2, 3, 4, 5]); // [3, 1, 5, 2, 4] (random order)
 */
export function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// ============================================================================
// STRING UTILITIES
// ============================================================================

/**
 * Capitalize the first letter of a string.
 * @param str The string to capitalize.
 * @returns Capitalized string.
 * @example
 * capitalize("hello world"); // "Hello world"
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Convert a string to camelCase.
 * @param str The string to convert.
 * @returns camelCase string.
 * @example
 * camelCase("hello-world_test"); // "helloWorldTest"
 */
export function camelCase(str: string): string {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
    .replace(/^[A-Z]/, char => char.toLowerCase());
}

/**
 * Convert a string to kebab-case.
 * @param str The string to convert.
 * @returns kebab-case string.
 * @example
 * kebabCase("HelloWorldTest"); // "hello-world-test"
 */
export function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Truncate a string to a specified length with optional ellipsis.
 * @param str The string to truncate.
 * @param length Maximum length.
 * @param suffix Suffix to append when truncated.
 * @returns Truncated string.
 * @example
 * truncate("Hello World", 5); // "Hello..."
 */
export function truncate(str: string, length: number, suffix = '...'): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + suffix;
}

// ============================================================================
// OBJECT UTILITIES
// ============================================================================

/**
 * Create a deep clone of an object.
 * @param obj The object to clone.
 * @returns Deep cloned object.
 * @example
 * const original = { a: { b: 1 } };
 * const cloned = deepClone(original);
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as unknown as T;
  if (typeof obj === 'object') {
    const cloned = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }
  return obj;
}

/**
 * Merge two objects deeply.
 * @param target The target object.
 * @param source The source object.
 * @returns Merged object.
 * @example
 * merge({ a: 1, b: { c: 2 } }, { b: { d: 3 } }); // { a: 1, b: { c: 2, d: 3 } }
 */
export function merge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
  const result = deepClone(target);
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      const sourceValue = source[key];
      if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
        result[key] = merge(result[key] || {} as any, sourceValue) as any;
      } else {
        result[key] = sourceValue as T[Extract<keyof T, string>];
      }
    }
  }
  return result;
}

/**
 * Pick specific properties from an object.
 * @param obj The source object.
 * @param keys Keys to pick.
 * @returns Object with only picked properties.
 * @example
 * pick({ a: 1, b: 2, c: 3 }, ['a', 'c']); // { a: 1, c: 3 }
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 * Omit specific properties from an object.
 * @param obj The source object.
 * @param keys Keys to omit.
 * @returns Object without omitted properties.
 * @example
 * omit({ a: 1, b: 2, c: 3 }, ['b']); // { a: 1, c: 3 }
 */
export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };
  keys.forEach(key => {
    delete result[key];
  });
  return result;
}

// ============================================================================
// MATH UTILITIES
// ============================================================================

/**
 * Clamp a number between min and max values.
 * @param value The number to clamp.
 * @param min Minimum value.
 * @param max Maximum value.
 * @returns Clamped number.
 * @example
 * clamp(10, 0, 5); // 5
 * clamp(-5, 0, 10); // 0
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Generate a random number between min and max (inclusive).
 * @param min Minimum value.
 * @param max Maximum value.
 * @returns Random number.
 * @example
 * random(1, 10); // Random number between 1 and 10
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Calculate the average of an array of numbers.
 * @param numbers Array of numbers.
 * @returns Average value.
 * @example
 * average([1, 2, 3, 4, 5]); // 3
 */
export function average(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}

/**
 * Calculate the sum of an array of numbers.
 * @param numbers Array of numbers.
 * @returns Sum of all numbers.
 * @example
 * sum([1, 2, 3, 4, 5]); // 15
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

/**
 * Check if a string is a valid email address.
 * @param email The string to validate.
 * @returns True if valid email.
 * @example
 * isEmail("test@example.com"); // true
 * isEmail("invalid-email"); // false
 */
export function isEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Check if a string is a valid URL.
 * @param url The string to validate.
 * @returns True if valid URL.
 * @example
 * isURL("https://example.com"); // true
 * isURL("not-a-url"); // false
 */
export function isURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if a value is empty (null, undefined, empty string, empty array, empty object).
 * @param value The value to check.
 * @returns True if empty.
 * @example
 * isEmpty(""); // true
 * isEmpty([]); // true
 * isEmpty({}); // true
 * isEmpty("hello"); // false
 */
export function isEmpty(value: any): boolean {
  if (value == null) return true;
  if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

// ============================================================================
// DATE UTILITIES
// ============================================================================

/**
 * Format a date to a readable string.
 * @param date The date to format.
 * @param format Format string (YYYY-MM-DD, MM/DD/YYYY, etc.).
 * @returns Formatted date string.
 * @example
 * formatDate(new Date(), "YYYY-MM-DD"); // "2023-12-25"
 */
export function formatDate(date: Date, format = "YYYY-MM-DD"): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return format
    .replace('YYYY', year.toString())
    .replace('MM', month)
    .replace('DD', day);
}

/**
 * Check if a date is today.
 * @param date The date to check.
 * @returns True if the date is today.
 * @example
 * isToday(new Date()); // true
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return date.getDate() === today.getDate() &&
         date.getMonth() === today.getMonth() &&
         date.getFullYear() === today.getFullYear();
}

/**
 * Calculate the number of days between two dates.
 * @param date1 First date.
 * @param date2 Second date.
 * @returns Number of days between the dates.
 * @example
 * const date1 = new Date('2023-01-01');
 * const date2 = new Date('2023-01-10');
 * daysBetween(date1, date2); // 9
 */
export function daysBetween(date1: Date, date2: Date): number {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}
