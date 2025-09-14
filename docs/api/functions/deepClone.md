[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / deepClone

# Function: deepClone()

> **deepClone**\<`T`\>(`obj`): `T`

Defined in: [index.ts:197](https://github.com/araujota/inkeep-demo-lib/blob/8045ed22acf532ebed8d31418c5f9a18d1adef5d/src/index.ts#L197)

Create a deep clone of an object.

## Type Parameters

### T

`T`

## Parameters

### obj

`T`

The object to clone.

## Returns

`T`

Deep cloned object.

## Example

```ts
const original = { a: { b: 1 } };
const cloned = deepClone(original);
```
