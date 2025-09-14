[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / merge

# Function: merge()

> **merge**\<`T`\>(`target`, `source`): `T`

Defined in: [index.ts:221](https://github.com/araujota/inkeep-demo-lib/blob/8045ed22acf532ebed8d31418c5f9a18d1adef5d/src/index.ts#L221)

Merge two objects deeply.

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

## Parameters

### target

`T`

The target object.

### source

`Partial`\<`T`\>

The source object.

## Returns

`T`

Merged object.

## Example

```ts
merge({ a: 1, b: { c: 2 } }, { b: { d: 3 } }); // { a: 1, b: { c: 2, d: 3 } }
```
