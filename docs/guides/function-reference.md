# Function Reference

Complete reference for all functions and classes in the Inkeep Demo Library.

## 📊 Array Utilities

### `chunk<T>(array: T[], size: number): T[][]`

Split an array into chunks of a specified size.

**Parameters:**
- `array` - The array to chunk
- `size` - The size of each chunk (must be > 0)

**Returns:** Array of chunks

**Example:**
```typescript
import { chunk } from 'inkeep-demo-lib';

chunk([1, 2, 3, 4, 5], 2);
// Result: [[1, 2], [3, 4], [5]]

chunk(['a', 'b', 'c', 'd'], 3);
// Result: [['a', 'b', 'c'], ['d']]
```

**Throws:** Error if size ≤ 0

---

### `flatten<T>(array: T[][]): T[]`

Flatten a nested array by one level.

**Parameters:**
- `array` - The nested array to flatten

**Returns:** Flattened array

**Example:**
```typescript
import { flatten } from 'inkeep-demo-lib';

flatten([[1, 2], [3, 4], [5]]);
// Result: [1, 2, 3, 4, 5]

flatten([['a', 'b'], ['c'], ['d', 'e']]);
// Result: ['a', 'b', 'c', 'd', 'e']
```

---

### `unique<T>(array: T[]): T[]`

Get unique values from an array (removes duplicates).

**Parameters:**
- `array` - The array to process

**Returns:** Array with unique values

**Example:**
```typescript
import { unique } from 'inkeep-demo-lib';

unique([1, 2, 2, 3, 3, 3]);
// Result: [1, 2, 3]

unique(['apple', 'banana', 'apple', 'cherry']);
// Result: ['apple', 'banana', 'cherry']
```

---

### `shuffle<T>(array: T[]): T[]`

Shuffle an array randomly using Fisher-Yates algorithm.

**Parameters:**
- `array` - The array to shuffle

**Returns:** A new shuffled array (original array unchanged)

**Example:**
```typescript
import { shuffle } from 'inkeep-demo-lib';

shuffle([1, 2, 3, 4, 5]);
// Result: [3, 1, 5, 2, 4] (random order)

const original = ['a', 'b', 'c'];
const shuffled = shuffle(original);
// original is unchanged: ['a', 'b', 'c']
// shuffled is random: ['c', 'a', 'b']
```

## 🔤 String Utilities

### `capitalize(str: string): string`

Capitalize the first letter of a string and make the rest lowercase.

**Parameters:**
- `str` - The string to capitalize

**Returns:** Capitalized string

**Example:**
```typescript
import { capitalize } from 'inkeep-demo-lib';

capitalize("hello world");
// Result: "Hello world"

capitalize("JAVASCRIPT");
// Result: "Javascript"

capitalize("");
// Result: ""
```

---

### `camelCase(str: string): string`

Convert a string to camelCase.

**Parameters:**
- `str` - The string to convert

**Returns:** camelCase string

**Example:**
```typescript
import { camelCase } from 'inkeep-demo-lib';

camelCase("hello-world");
// Result: "helloWorld"

camelCase("user_profile_image");
// Result: "userProfileImage"

camelCase("My Awesome Function");
// Result: "myAwesomeFunction"
```

---

### `kebabCase(str: string): string`

Convert a string to kebab-case.

**Parameters:**
- `str` - The string to convert

**Returns:** kebab-case string

**Example:**
```typescript
import { kebabCase } from 'inkeep-demo-lib';

kebabCase("HelloWorldTest");
// Result: "hello-world-test"

kebabCase("userProfileImage");
// Result: "user-profile-image"

kebabCase("My Awesome Function");
// Result: "my-awesome-function"
```

---

### `truncate(str: string, length: number, suffix?: string): string`

Truncate a string to a specified length with optional suffix.

**Parameters:**
- `str` - The string to truncate
- `length` - Maximum length
- `suffix` - Suffix to append when truncated (default: "...")

**Returns:** Truncated string

**Example:**
```typescript
import { truncate } from 'inkeep-demo-lib';

truncate("Hello World", 5);
// Result: "Hello..."

truncate("Short", 10);
// Result: "Short" (no truncation needed)

truncate("Long text here", 8, "→");
// Result: "Long tex→"
```

## 🏗️ Object Utilities

### `deepClone<T>(obj: T): T`

Create a deep clone of an object.

**Parameters:**
- `obj` - The object to clone

**Returns:** Deep cloned object

**Example:**
```typescript
import { deepClone } from 'inkeep-demo-lib';

const original = {
  name: "John",
  address: { city: "NYC", zip: 10001 },
  hobbies: ["reading", "coding"]
};

const cloned = deepClone(original);
cloned.address.city = "LA"; // Original is unchanged

console.log(original.address.city); // "NYC"
console.log(cloned.address.city);   // "LA"
```

**Handles:** Objects, arrays, dates, primitives, and nested structures

---

### `merge<T>(target: T, source: Partial<T>): T`

Merge two objects deeply.

**Parameters:**
- `target` - The target object
- `source` - The source object to merge

**Returns:** Merged object (new object, originals unchanged)

**Example:**
```typescript
import { merge } from 'inkeep-demo-lib';

const config = {
  api: { timeout: 5000, retries: 3 },
  ui: { theme: "light" }
};

const userPrefs = {
  api: { timeout: 10000 },
  ui: { animations: false }
};

const result = merge(config, userPrefs);
// Result: {
//   api: { timeout: 10000, retries: 3 },
//   ui: { theme: "light", animations: false }
// }
```

---

### `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>`

Pick specific properties from an object.

**Parameters:**
- `obj` - The source object
- `keys` - Array of keys to pick

**Returns:** Object with only picked properties

**Example:**
```typescript
import { pick } from 'inkeep-demo-lib';

const user = {
  id: 1,
  name: "John",
  email: "john@example.com",
  password: "secret"
};

const publicInfo = pick(user, ['id', 'name']);
// Result: { id: 1, name: "John" }
```

---

### `omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>`

Omit specific properties from an object.

**Parameters:**
- `obj` - The source object  
- `keys` - Array of keys to omit

**Returns:** Object without omitted properties

**Example:**
```typescript
import { omit } from 'inkeep-demo-lib';

const user = {
  id: 1,
  name: "John",
  email: "john@example.com",
  password: "secret"
};

const safeUser = omit(user, ['password']);
// Result: { id: 1, name: "John", email: "john@example.com" }
```

## 🔢 Math Utilities

### `clamp(value: number, min: number, max: number): number`

Clamp a number between min and max values.

**Parameters:**
- `value` - The number to clamp
- `min` - Minimum value
- `max` - Maximum value

**Returns:** Clamped number

**Example:**
```typescript
import { clamp } from 'inkeep-demo-lib';

clamp(10, 0, 5);   // Result: 5
clamp(-5, 0, 10);  // Result: 0
clamp(3, 0, 10);   // Result: 3

// UI volume control
const volume = clamp(userInput, 0, 100);
```

---

### `random(min: number, max: number): number`

Generate a random integer between min and max (inclusive).

**Parameters:**
- `min` - Minimum value
- `max` - Maximum value

**Returns:** Random integer

**Example:**
```typescript
import { random } from 'inkeep-demo-lib';

random(1, 6);     // Dice roll: 1, 2, 3, 4, 5, or 6
random(0, 255);   // RGB color value
random(1, 100);   // Percentage
```

---

### `average(numbers: number[]): number`

Calculate the average of an array of numbers.

**Parameters:**
- `numbers` - Array of numbers

**Returns:** Average value (0 if empty array)

**Example:**
```typescript
import { average } from 'inkeep-demo-lib';

average([1, 2, 3, 4, 5]);  // Result: 3
average([10, 20, 30]);     // Result: 20
average([]);               // Result: 0
```

---

### `sum(numbers: number[]): number`

Calculate the sum of an array of numbers.

**Parameters:**
- `numbers` - Array of numbers

**Returns:** Sum of all numbers

**Example:**
```typescript
import { sum } from 'inkeep-demo-lib';

sum([1, 2, 3, 4, 5]);  // Result: 15
sum([10, -5, 3]);      // Result: 8
sum([]);               // Result: 0
```

## ✅ Validation Utilities

### `isEmail(email: string): boolean`

Check if a string is a valid email address.

**Parameters:**
- `email` - The string to validate

**Returns:** True if valid email format

**Example:**
```typescript
import { isEmail } from 'inkeep-demo-lib';

isEmail("user@example.com");     // Result: true
isEmail("test.email@domain.co"); // Result: true
isEmail("invalid-email");        // Result: false
isEmail("@domain.com");          // Result: false
```

**Note:** Uses basic regex validation, not comprehensive RFC compliance

---

### `isURL(url: string): boolean`

Check if a string is a valid URL.

**Parameters:**
- `url` - The string to validate

**Returns:** True if valid URL format

**Example:**
```typescript
import { isURL } from 'inkeep-demo-lib';

isURL("https://example.com");        // Result: true
isURL("http://localhost:3000");      // Result: true
isURL("ftp://files.example.com");    // Result: true
isURL("not-a-url");                  // Result: false
isURL("javascript:alert('xss')");    // Result: true (be careful!)
```

**Note:** Uses native URL constructor for validation

---

### `isEmpty(value: any): boolean`

Check if a value is empty (null, undefined, empty string, empty array, empty object).

**Parameters:**
- `value` - The value to check

**Returns:** True if empty

**Example:**
```typescript
import { isEmpty } from 'inkeep-demo-lib';

isEmpty(null);           // Result: true
isEmpty(undefined);      // Result: true
isEmpty("");             // Result: true
isEmpty([]);             // Result: true
isEmpty({});             // Result: true

isEmpty("hello");        // Result: false
isEmpty([1, 2, 3]);      // Result: false
isEmpty({ a: 1 });       // Result: false
isEmpty(0);              // Result: false
isEmpty(false);          // Result: false
```

## 📅 Date Utilities

### `formatDate(date: Date, format?: string): string`

Format a date to a readable string.

**Parameters:**
- `date` - The date to format
- `format` - Format string (default: "YYYY-MM-DD")

**Returns:** Formatted date string

**Supported patterns:**
- `YYYY` - 4-digit year
- `MM` - 2-digit month (01-12)  
- `DD` - 2-digit day (01-31)

**Example:**
```typescript
import { formatDate } from 'inkeep-demo-lib';

const date = new Date('2023-12-25');

formatDate(date);                    // Result: "2023-12-25"
formatDate(date, "MM/DD/YYYY");      // Result: "12/25/2023"
formatDate(date, "DD-MM-YYYY");      // Result: "25-12-2023"
```

---

### `isToday(date: Date): boolean`

Check if a date is today.

**Parameters:**
- `date` - The date to check

**Returns:** True if the date is today

**Example:**
```typescript
import { isToday } from 'inkeep-demo-lib';

isToday(new Date());                    // Result: true
isToday(new Date('2023-01-01'));        // Result: false (unless today is Jan 1, 2023)

// Usage in UI
function getPostLabel(postDate: Date) {
  return isToday(postDate) ? "Today" : formatDate(postDate);
}
```

---

### `daysBetween(date1: Date, date2: Date): number`

Calculate the number of days between two dates.

**Parameters:**
- `date1` - First date
- `date2` - Second date

**Returns:** Number of days between the dates (absolute value)

**Example:**
```typescript
import { daysBetween } from 'inkeep-demo-lib';

const start = new Date('2023-01-01');
const end = new Date('2023-01-10');

daysBetween(start, end);  // Result: 9
daysBetween(end, start);  // Result: 9 (always positive)

// Usage
function getEventDuration(startDate: Date, endDate: Date) {
  const days = daysBetween(startDate, endDate);
  return `${days} day${days !== 1 ? 's' : ''}`;
}
```

## 🗃️ Data Structures

### `TinyQueue<T>`

A resilient FIFO queue with time-based dequeue functionality.

#### Constructor

```typescript
const queue = new TinyQueue<T>();
```

#### Methods

##### `enqueue(value: T): number`

Add a value to the queue.

**Parameters:**
- `value` - Item to enqueue

**Returns:** New length of the queue

**Example:**
```typescript
import { TinyQueue } from 'inkeep-demo-lib';

const queue = new TinyQueue<string>();
const length = queue.enqueue("task1");  // Returns: 1
queue.enqueue("task2");                 // Returns: 2
```

##### `dequeue(minMs?: number): T | undefined`

Remove and return the next value if it has been in the queue long enough.

**Parameters:**
- `minMs` - Minimum age in milliseconds before dequeue is allowed (default: 0)

**Returns:** The dequeued value, or `undefined` if none is ready

**Example:**
```typescript
const queue = new TinyQueue<string>();
queue.enqueue("task");

// Immediate dequeue
const task1 = queue.dequeue();     // Returns: "task"

// Time-based dequeue
queue.enqueue("delayed-task");
const task2 = queue.dequeue(1000); // Returns: undefined (not old enough)

setTimeout(() => {
  const task3 = queue.dequeue(1000); // Returns: "delayed-task" (after 1 second)
}, 1100);
```

##### `length: number` (getter)

Get the current number of items in the queue.

**Example:**
```typescript
const queue = new TinyQueue<number>();
console.log(queue.length);  // 0

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.length);  // 2
```

##### `clear(): void`

Remove all items from the queue.

**Example:**
```typescript
const queue = new TinyQueue<string>();
queue.enqueue("task1");
queue.enqueue("task2");

queue.clear();
console.log(queue.length);  // 0
```

#### Use Cases

- **Rate limiting:** Ensure minimum time between operations
- **Task processing:** Process tasks with delays
- **Batch processing:** Collect items before processing
- **Debouncing:** Wait for quiet periods

**Example: Rate Limiter**
```typescript
import { TinyQueue } from 'inkeep-demo-lib';

class APIRateLimiter {
  private queue = new TinyQueue<() => Promise<any>>();
  private minDelay = 1000; // 1 second between requests

  async execute<T>(apiCall: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.enqueue(async () => {
        try {
          const result = await apiCall();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      
      this.processQueue();
    });
  }

  private async processQueue() {
    const task = this.queue.dequeue(this.minDelay);
    if (task) {
      await task();
      
      // Process next task after delay
      if (this.queue.length > 0) {
        setTimeout(() => this.processQueue(), this.minDelay);
      }
    }
  }
}
```

## 🔗 Type Definitions

All functions are fully typed for TypeScript users:

```typescript
// Generic functions preserve your types
function chunk<T>(array: T[], size: number): T[][]
function unique<T>(array: T[]): T[]
function deepClone<T>(obj: T): T

// Object utilities with key constraints  
function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>
function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>

// Type-safe data structures
class TinyQueue<T> {
  enqueue(value: T): number
  dequeue(minMs?: number): T | undefined
  // ...
}
```

This ensures full IntelliSense support and compile-time type checking in TypeScript projects.
