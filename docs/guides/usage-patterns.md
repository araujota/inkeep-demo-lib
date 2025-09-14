# Usage Patterns

This guide shows practical examples of how to use all the functions and features in the Inkeep Demo Library.

## 📊 Array Utilities

### Working with Collections

```ts
import { chunk, flatten, unique, shuffle } from "inkeep-demo-lib";

// Paginate data
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pages = chunk(data, 3); // [[1,2,3], [4,5,6], [7,8,9], [10]]

// Flatten nested structures
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = flatten(nested); // [1, 2, 3, 4, 5, 6]

// Remove duplicates from user input
const userTags = ["javascript", "react", "javascript", "node", "react"];
const uniqueTags = unique(userTags); // ["javascript", "react", "node"]

// Randomize quiz questions
const questions = ["Q1", "Q2", "Q3", "Q4"];
const randomized = shuffle(questions); // Random order each time
```

### Real-world Example: Processing API Data

```ts
import { chunk, unique, flatten } from "inkeep-demo-lib";

// Process large datasets in batches
async function processBatchedData(items: any[]) {
  const batches = chunk(items, 50); // Process 50 items at a time
  
  const results = [];
  for (const batch of batches) {
    const processed = await processBatch(batch);
    results.push(processed);
  }
  
  return flatten(results);
}

// Clean up duplicate entries from multiple sources
function mergeDataSources(sources: string[][]) {
  const combined = flatten(sources);
  return unique(combined);
}
```

## 🔤 String Utilities

### Text Processing and Formatting

```ts
import { capitalize, camelCase, kebabCase, truncate } from "inkeep-demo-lib";

// Format user input
const userName = "john doe";
const displayName = capitalize(userName); // "John doe"

// API field conversion
const apiField = "user_profile_image";
const jsProperty = camelCase(apiField); // "userProfileImage"

// URL slug generation
const title = "My Awesome Blog Post";
const slug = kebabCase(title); // "my-awesome-blog-post"

// Preview text for cards
const longText = "This is a very long description that needs to be truncated";
const preview = truncate(longText, 30); // "This is a very long descriptio..."
```

### Form Processing Example

```ts
import { capitalize, camelCase, truncate } from "inkeep-demo-lib";

interface UserForm {
  firstName: string;
  lastName: string;
  bio: string;
}

function processUserForm(rawData: Record<string, string>): UserForm {
  return {
    firstName: capitalize(rawData.first_name || ""),
    lastName: capitalize(rawData.last_name || ""),
    bio: truncate(rawData.bio || "", 200)
  };
}
```

## 🏗️ Object Utilities

### Safe Object Manipulation

```ts
import { deepClone, merge, pick, omit } from "inkeep-demo-lib";

// Safe state updates (React/Redux pattern)
const originalState = {
  user: { name: "John", settings: { theme: "dark" } },
  posts: [{ id: 1, title: "Hello" }]
};

const newState = deepClone(originalState);
newState.user.name = "Jane"; // Safe to mutate the clone

// Configuration merging
const defaultConfig = {
  api: { timeout: 5000, retries: 3 },
  ui: { theme: "light", animations: true }
};

const userConfig = {
  api: { timeout: 10000 },
  ui: { theme: "dark" }
};

const finalConfig = merge(defaultConfig, userConfig);
// Result: { api: { timeout: 10000, retries: 3 }, ui: { theme: "dark", animations: true } }

// API response filtering
const apiResponse = {
  id: 1,
  name: "John",
  email: "john@example.com",
  password: "secret",
  internalId: "xyz123"
};

const publicData = omit(apiResponse, ["password", "internalId"]);
const userCredentials = pick(apiResponse, ["email", "password"]);
```

### Database Model Example

```ts
import { pick, omit, deepClone } from "inkeep-demo-lib";

class UserModel {
  private data: any;

  constructor(userData: any) {
    this.data = deepClone(userData); // Prevent external mutations
  }

  getPublicProfile() {
    return pick(this.data, ["id", "name", "avatar", "bio"]);
  }

  getPrivateData() {
    return omit(this.data, ["password", "apiKeys", "internalNotes"]);
  }
}
```

## 🔢 Math Utilities

### Numerical Operations and Constraints

```ts
import { clamp, random, average, sum } from "inkeep-demo-lib";

// UI component constraints
function setVolume(value: number) {
  const volume = clamp(value, 0, 100); // Ensure 0-100 range
  console.log(`Volume set to ${volume}%`);
}

// Game mechanics
function rollDice() {
  return random(1, 6); // Fair dice roll
}

function generateRandomColor() {
  const r = random(0, 255);
  const g = random(0, 255);
  const b = random(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// Analytics and statistics
const scores = [85, 92, 78, 96, 88];
const totalScore = sum(scores); // 439
const averageScore = average(scores); // 87.8
```

### Performance Monitoring Example

```ts
import { average, sum, clamp } from "inkeep-demo-lib";

class PerformanceMonitor {
  private responseTimes: number[] = [];

  recordResponseTime(ms: number) {
    // Clamp to reasonable range to avoid outliers
    const clampedTime = clamp(ms, 0, 10000);
    this.responseTimes.push(clampedTime);
  }

  getStats() {
    return {
      total: sum(this.responseTimes),
      average: average(this.responseTimes),
      count: this.responseTimes.length
    };
  }
}
```

## ✅ Validation Utilities

### Input Validation and Data Cleaning

```ts
import { isEmail, isURL, isEmpty } from "inkeep-demo-lib";

// Form validation
function validateContactForm(data: any) {
  const errors: string[] = [];

  if (isEmpty(data.name)) {
    errors.push("Name is required");
  }

  if (!isEmpty(data.email) && !isEmail(data.email)) {
    errors.push("Invalid email format");
  }

  if (!isEmpty(data.website) && !isURL(data.website)) {
    errors.push("Invalid website URL");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Data sanitization
function sanitizeUserInput(input: any) {
  if (isEmpty(input)) return null;
  
  if (typeof input === 'string') {
    return input.trim();
  }
  
  return input;
}
```

### API Request Validation

```ts
import { isEmail, isURL, isEmpty } from "inkeep-demo-lib";

interface CreateUserRequest {
  email: string;
  website?: string;
  bio?: string;
}

function validateCreateUserRequest(req: any): CreateUserRequest | null {
  // Required fields
  if (isEmpty(req.email) || !isEmail(req.email)) {
    throw new Error("Valid email is required");
  }

  // Optional fields with validation
  if (!isEmpty(req.website) && !isURL(req.website)) {
    throw new Error("Website must be a valid URL");
  }

  return {
    email: req.email,
    website: isEmpty(req.website) ? undefined : req.website,
    bio: isEmpty(req.bio) ? undefined : req.bio
  };
}
```

## 📅 Date Utilities

### Date Formatting and Calculations

```ts
import { formatDate, isToday, daysBetween } from "inkeep-demo-lib";

// Display formatting
const now = new Date();
const displayDate = formatDate(now, "YYYY-MM-DD"); // "2023-12-25"
const usFormat = formatDate(now, "MM/DD/YYYY"); // "12/25/2023"

// Conditional logic
function getPostLabel(postDate: Date) {
  if (isToday(postDate)) {
    return "Today";
  }
  
  const days = daysBetween(new Date(), postDate);
  if (days === 1) return "Yesterday";
  if (days <= 7) return `${days} days ago`;
  
  return formatDate(postDate, "MM/DD/YYYY");
}

// Event planning
function calculateEventDuration(startDate: Date, endDate: Date) {
  const duration = daysBetween(startDate, endDate);
  return `${duration} day${duration !== 1 ? 's' : ''}`;
}
```

### Content Management Example

```ts
import { formatDate, isToday, daysBetween } from "inkeep-demo-lib";

class BlogPost {
  constructor(
    public title: string,
    public publishDate: Date,
    public content: string
  ) {}

  getDisplayDate(): string {
    if (isToday(this.publishDate)) {
      return "Published today";
    }

    const days = daysBetween(new Date(), this.publishDate);
    if (days <= 30) {
      return `Published ${days} days ago`;
    }

    return `Published on ${formatDate(this.publishDate, "MM/DD/YYYY")}`;
  }

  isRecent(): boolean {
    return daysBetween(new Date(), this.publishDate) <= 7;
  }
}
```

## 🗃️ Data Structures

### TinyQueue for Rate Limiting and Task Management

```ts
import { TinyQueue } from "inkeep-demo-lib";

// Rate limiting example
class RateLimiter {
  private queue = new TinyQueue<() => void>();

  async executeWithDelay(task: () => void, minDelayMs: number = 1000) {
    this.queue.enqueue(task);
    
    // Process queue with minimum delay
    const task = this.queue.dequeue(minDelayMs);
    if (task) {
      task();
    }
  }
}

// Background task processor
class TaskProcessor {
  private taskQueue = new TinyQueue<{ id: string; data: any }>();

  addTask(id: string, data: any) {
    this.taskQueue.enqueue({ id, data });
    console.log(`Task ${id} queued (${this.taskQueue.length} total)`);
  }

  processNext(minAgeMs: number = 5000) {
    // Only process tasks that have been waiting at least 5 seconds
    const task = this.taskQueue.dequeue(minAgeMs);
    if (task) {
      console.log(`Processing task ${task.id}:`, task.data);
      return task;
    }
    console.log("No tasks ready for processing");
    return null;
  }

  clear() {
    this.taskQueue.clear();
    console.log("Task queue cleared");
  }
}
```

## 🔗 Combining Utilities

### Real-world Application Example

```ts
import {
  chunk, unique, capitalize, camelCase, deepClone,
  merge, clamp, isEmail, formatDate, TinyQueue
} from "inkeep-demo-lib";

// E-commerce product processor
class ProductProcessor {
  private processingQueue = new TinyQueue<any>();
  private config = {
    batchSize: 10,
    nameMaxLength: 50,
    descriptionMaxLength: 200
  };

  async importProducts(rawProducts: any[]) {
    // Clean and validate data
    const cleanProducts = rawProducts
      .filter(p => !isEmpty(p.name))
      .map(product => this.sanitizeProduct(product));

    // Remove duplicates by name
    const uniqueProducts = unique(cleanProducts);

    // Process in batches to avoid overwhelming the system
    const batches = chunk(uniqueProducts, this.config.batchSize);
    
    for (const batch of batches) {
      batch.forEach(product => {
        this.processingQueue.enqueue(product);
      });
    }

    return this.processBatches();
  }

  private sanitizeProduct(raw: any) {
    return {
      id: raw.id,
      name: capitalize(truncate(raw.name, this.config.nameMaxLength)),
      description: truncate(raw.description || "", this.config.descriptionMaxLength),
      price: clamp(parseFloat(raw.price) || 0, 0, 999999),
      category: camelCase(raw.category || "uncategorized"),
      createdAt: formatDate(new Date(), "YYYY-MM-DD"),
      metadata: deepClone(raw.metadata || {})
    };
  }

  private async processBatches() {
    const results = [];
    
    while (this.processingQueue.length > 0) {
      // Process items that have been in queue for at least 100ms
      const product = this.processingQueue.dequeue(100);
      if (product) {
        results.push(await this.processProduct(product));
      }
    }

    return results;
  }

  private async processProduct(product: any) {
    // Simulate API call or database operation
    return new Promise(resolve => {
      setTimeout(() => resolve(product), 50);
    });
  }
}
```

## 🎯 Best Practices

### Performance Tips

```ts
// Use deepClone sparingly for large objects
const largeObject = { /* ... */ };
const shallowCopy = { ...largeObject }; // Prefer when deep copy not needed
const deepCopy = deepClone(largeObject); // Use only when necessary

// Batch array operations
const data = [/* large array */];
const processed = chunk(data, 100)
  .map(batch => batch.map(item => processItem(item)))
  .reduce((acc, batch) => acc.concat(batch), []);
```

### Type Safety

```ts
// Use generic types for better type inference
function processItems<T>(items: T[]): T[][] {
  return chunk(items, 5);
}

const numbers = processItems([1, 2, 3]); // Type: number[][]
const strings = processItems(['a', 'b', 'c']); // Type: string[][]
```
