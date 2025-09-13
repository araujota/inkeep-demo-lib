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
