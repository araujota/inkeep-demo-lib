# Usage Patterns

## TinyQueue

```ts
import { TinyQueue } from "inkeep-demo-lib";

const q = new TinyQueue<number>();
q.enqueue(1);
setTimeout(() => {
  console.log(q.dequeue(500)); // waits at least 500ms before yielding 1
}, 600);
```

## hash

```ts
import { hash } from "inkeep-demo-lib";
console.log(hash("hello")); // 99162322
```
