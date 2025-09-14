**inkeep-demo-lib**

***

# Inkeep Demo Lib

A comprehensive TypeScript utilities library + MkDocs site that Inkeep can crawl easily.
- **24 utility functions** across 6 categories: Arrays, Strings, Objects, Math, Validation, and Dates
- **1 resilient data structure**: TinyQueue with time-based dequeue
- API docs generated via **TypeDoc** (markdown) to `docs/api`
- Site built by **MkDocs Material**
- Deployed to **GitHub Pages** via GitHub Actions

## ✨ Features

### 📊 Array Utilities
- `chunk()` - Split arrays into chunks
- `flatten()` - Flatten nested arrays
- `unique()` - Remove duplicates
- `shuffle()` - Randomize array order

### 🔤 String Utilities
- `capitalize()` - Capitalize first letter
- `camelCase()` - Convert to camelCase
- `kebabCase()` - Convert to kebab-case
- `truncate()` - Truncate with ellipsis

### 🏗️ Object Utilities
- `deepClone()` - Deep clone objects
- `merge()` - Deep merge objects
- `pick()` - Pick specific properties
- `omit()` - Omit specific properties

### 🔢 Math Utilities
- `clamp()` - Constrain numbers to range
- `random()` - Generate random integers
- `average()` - Calculate mean
- `sum()` - Sum array of numbers

### ✅ Validation Utilities
- `isEmail()` - Validate email addresses
- `isURL()` - Validate URLs
- `isEmpty()` - Check if value is empty

### 📅 Date Utilities
- `formatDate()` - Format dates with patterns
- `isToday()` - Check if date is today
- `daysBetween()` - Calculate days between dates

### 🗃️ Data Structures
- `TinyQueue<T>` - FIFO queue with time-based dequeue

## 🚀 Quick Start

### Installation
```bash
npm install inkeep-demo-lib
```

### Usage Examples
```typescript
import { 
  chunk, capitalize, deepClone, clamp, 
  isEmail, formatDate, TinyQueue 
} from 'inkeep-demo-lib';

// Array utilities
chunk([1, 2, 3, 4, 5], 2);  // [[1, 2], [3, 4], [5]]

// String utilities
capitalize("hello world");   // "Hello world"

// Object utilities
const cloned = deepClone({ a: { b: 1 } });

// Math utilities
clamp(10, 0, 5);            // 5

// Validation utilities
isEmail("test@example.com"); // true

// Date utilities
formatDate(new Date(), "YYYY-MM-DD"); // "2023-12-25"

// Data structures
const queue = new TinyQueue<string>();
queue.enqueue("task");
queue.dequeue(1000); // Dequeue after 1 second minimum
```

## 📖 Documentation Development

1) Create a new GitHub repo named `inkeep-demo-lib` and push these files.
2) On your machine:
   ```bash
   npm ci
   npm run build:typedoc
   pip install mkdocs-material
   mkdocs serve
   ```
3) Push to `main`; the included workflow will publish to:
   `https://<your-username>.github.io/inkeep-demo-lib/`

## Inkeep config

- Use **General Web** source with the above base URL.
- Allowlist `/`, `/guides/`, `/api/`.
- Deny `/search/`.
- Keep depth to 3–4.
- Re-crawl weekly (or on CI deploys).

## Notes
- `robots.txt` is included and allows indexing.
- `sitemap.xml` is emitted by MkDocs' sitemap plugin.
