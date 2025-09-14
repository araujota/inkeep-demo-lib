[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`array`, `size`): `T`[][]

Defined in: [index.ts:81](https://github.com/araujota/inkeep-demo-lib/blob/8045ed22acf532ebed8d31418c5f9a18d1adef5d/src/index.ts#L81)

Split an array into chunks of a specified size.

## Type Parameters

### T

`T`

## Parameters

### array

`T`[]

The array to chunk.

### size

`number`

The size of each chunk.

## Returns

`T`[][]

Array of chunks.

## Example

```ts
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```
