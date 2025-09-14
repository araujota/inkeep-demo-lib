[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / pick

# Function: pick()

> **pick**\<`T`, `K`\>(`obj`, `keys`): `Pick`\<`T`, `K`\>

Defined in: [index.ts:244](https://github.com/araujota/inkeep-demo-lib/blob/8045ed22acf532ebed8d31418c5f9a18d1adef5d/src/index.ts#L244)

Pick specific properties from an object.

## Type Parameters

### T

`T` *extends* `object`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### obj

`T`

The source object.

### keys

`K`[]

Keys to pick.

## Returns

`Pick`\<`T`, `K`\>

Object with only picked properties.

## Example

```ts
pick({ a: 1, b: 2, c: 3 }, ['a', 'c']); // { a: 1, c: 3 }
```
