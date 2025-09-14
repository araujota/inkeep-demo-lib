# Inkeep Demo Lib

A comprehensive TypeScript utilities library designed to **demonstrate perfect documentation ingestion** for AI agents and search systems like Inkeep.

## 🚀 What is this?

A feature-rich utility library with **25 functions** and **1 data structure** across 6 categories:

- **📊 Array Utilities**: `chunk`, `flatten`, `unique`, `shuffle`
- **🔤 String Utilities**: `capitalize`, `camelCase`, `kebabCase`, `truncate`  
- **🏗️ Object Utilities**: `deepClone`, `merge`, `pick`, `omit`
- **🔢 Math Utilities**: `clamp`, `random`, `average`, `sum`
- **✅ Validation Utilities**: `isEmail`, `isURL`, `isEmpty`
- **📅 Date Utilities**: `formatDate`, `isToday`, `daysBetween`
- **🗃️ Data Structures**: `TinyQueue<T>` with time-based dequeue

## 💡 Quick Example

```typescript
import { chunk, capitalize, isEmail, TinyQueue } from 'inkeep-demo-lib';

// Array processing
const pages = chunk([1, 2, 3, 4, 5, 6], 2);  // [[1,2], [3,4], [5,6]]

// String formatting  
const title = capitalize("hello world");       // "Hello world"

// Validation
const valid = isEmail("user@example.com");     // true

// Data structures
const queue = new TinyQueue<string>();
queue.enqueue("task1");
const task = queue.dequeue(1000); // Wait 1 second minimum
```

## 📚 Documentation Structure

### 🎯 Getting Started
- **[Quickstart Guide](guides/quickstart/)** - Installation, basic usage, and TypeScript support
- **[Function Reference](guides/function-reference/)** - Complete function documentation with parameters, examples, and use cases
- **[Usage Patterns](guides/usage-patterns/)** - Real-world examples, best practices, and advanced patterns

### 🔍 API Reference  
- **[API Overview](api/)** - Complete library structure and quick reference tables
- **[Individual Functions](api/)** - Detailed TypeDoc-generated documentation for each function
- **[Classes](api/classes/TinyQueue/)** - Data structure documentation

## 🎯 Perfect for Documentation AI

This documentation structure is optimized for AI ingestion and search systems:

### ✅ Content Quality
- **Rich Examples**: Every function has multiple real-world examples
- **Clear Structure**: Consistent headings, sections, and navigation
- **Complete Coverage**: No function left undocumented
- **TypeScript First**: Full type information and generic support

### ✅ Technical Excellence  
- **Static Generation**: MkDocs Material generates clean, fast HTML
- **SEO Optimized**: Proper meta tags, canonical URLs, and sitemaps
- **Anchor Rich**: Deep-linkable sections for precise referencing
- **Mobile Friendly**: Responsive design that works everywhere

### ✅ Crawling Friendly
- **Sitemap**: Auto-generated `sitemap.xml` for discovery
- **Robots.txt**: Proper indexing permissions
- **Clean URLs**: Predictable, semantic URL structure
- **Fast Loading**: No client-side rendering required

## 🔗 Navigation

| Section | Description | Link |
|---------|-------------|------|
| **Installation** | Get started in minutes | [Quickstart →](guides/quickstart/) |
| **Learn by Example** | Real-world usage patterns | [Usage Patterns →](guides/usage-patterns/) |
| **Complete Reference** | Every function documented | [Function Reference →](guides/function-reference/) |
| **API Docs** | TypeDoc-generated reference | [API Reference →](api/) |

## 🛠️ Built With

- **TypeScript** - Full type safety and IntelliSense support
- **TypeDoc** - Automated API documentation generation  
- **MkDocs Material** - Beautiful, fast static site generation
- **GitHub Actions** - Automated building and deployment
- **GitHub Pages** - Reliable hosting with custom domains

---

**Ready to explore?** Start with the [Quickstart Guide](guides/quickstart/) or dive into [Usage Patterns](guides/usage-patterns/) to see the library in action!
