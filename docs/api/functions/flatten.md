[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / flatten

# Function: flatten()

> **flatten**\<`T`\>(`array`): `T`[]

Defined in: [index.ts:97](https://github.com/araujota/inkeep-demo-lib/blob/8045ed22acf532ebed8d31418c5f9a18d1adef5d/src/index.ts#L97)

Flatten a nested array by one level.

## Type Parameters

### T

`T`

## Parameters

### array

`T`[][]

The array to flatten.

## Returns

`T`[]

Flattened array.

## Example

```ts
flatten([[1, 2], [3, 4], [5]]); // [1, 2, 3, 4, 5]
```
