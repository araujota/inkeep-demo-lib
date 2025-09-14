# Quickstart

Get up and running with Inkeep Demo Lib in minutes!

## 📦 Installation

### Using npm
```bash
npm install inkeep-demo-lib
```

### Using yarn
```bash
yarn add inkeep-demo-lib
```

### Using pnpm
```bash
pnpm add inkeep-demo-lib
```

## 🚀 Basic Usage

### Import What You Need

```typescript
// Import specific functions
import { chunk, capitalize, deepClone } from 'inkeep-demo-lib';

// Or import everything
import * as utils from 'inkeep-demo-lib';

// Or import the TinyQueue class
import { TinyQueue } from 'inkeep-demo-lib';
```

### Quick Examples

```typescript
import { 
  chunk, capitalize, isEmail, formatDate, 
  clamp, TinyQueue 
} from 'inkeep-demo-lib';

// Array utilities
const data = [1, 2, 3, 4, 5, 6];
const pages = chunk(data, 2); // [[1, 2], [3, 4], [5, 6]]

// String utilities
const name = capitalize("john doe"); // "John doe"

// Validation
const valid = isEmail("user@example.com"); // true

// Date formatting
const today = formatDate(new Date(), "YYYY-MM-DD"); // "2023-12-25"

// Math utilities
const volume = clamp(150, 0, 100); // 100

// Data structures
const queue = new TinyQueue<string>();
queue.enqueue("task1");
const task = queue.dequeue(1000); // Wait 1 second before dequeue
```

## 🏗️ TypeScript Support

The library is built with TypeScript and includes full type definitions:

```typescript
import { chunk, pick, TinyQueue } from 'inkeep-demo-lib';

// Generic functions work with your types
interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [/* ... */];
const batches = chunk(users, 10); // Type: User[][]

const user: User = { id: 1, name: "John", email: "john@example.com" };
const publicInfo = pick(user, ['id', 'name']); // Type: Pick<User, 'id' | 'name'>

// Type-safe queue
const userQueue = new TinyQueue<User>();
userQueue.enqueue(user);
```

## 📚 Function Categories

### 📊 Array Utilities
- `chunk(array, size)` - Split arrays into chunks
- `flatten(array)` - Flatten nested arrays
- `unique(array)` - Remove duplicates
- `shuffle(array)` - Randomize order

### 🔤 String Utilities  
- `capitalize(str)` - Capitalize first letter
- `camelCase(str)` - Convert to camelCase
- `kebabCase(str)` - Convert to kebab-case
- `truncate(str, length)` - Truncate with ellipsis

### 🏗️ Object Utilities
- `deepClone(obj)` - Deep clone objects
- `merge(target, source)` - Deep merge objects
- `pick(obj, keys)` - Pick specific properties
- `omit(obj, keys)` - Omit specific properties

### 🔢 Math Utilities
- `clamp(value, min, max)` - Constrain to range
- `random(min, max)` - Generate random integers
- `average(numbers)` - Calculate mean
- `sum(numbers)` - Sum array of numbers

### ✅ Validation Utilities
- `isEmail(email)` - Validate email format
- `isURL(url)` - Validate URL format
- `isEmpty(value)` - Check if empty

### 📅 Date Utilities
- `formatDate(date, format)` - Format with patterns
- `isToday(date)` - Check if date is today
- `daysBetween(date1, date2)` - Calculate days between

### 🗃️ Data Structures
- `TinyQueue<T>` - FIFO queue with time-based dequeue

## 🎯 Next Steps

- 📖 Check out [Usage Patterns](usage-patterns.md) for detailed examples
- 🔍 Browse the [API Reference](../api/README.md) for complete documentation
- 🌐 View the [live documentation site](https://araujota.github.io/inkeep-demo-lib/)

## 🛠️ Development Setup

If you want to contribute or run the documentation locally:

### Install Dependencies
```bash
npm ci
npm run build:typedoc
```

### Serve Documentation Locally
```bash
pip install mkdocs-material
mkdocs serve
```

### Deploy Documentation
```bash
mkdocs gh-deploy --force
```

The documentation will be available at `http://localhost:8000` when running locally.
