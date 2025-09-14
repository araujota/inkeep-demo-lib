[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / shuffle

# Function: shuffle()

> **shuffle**\<`T`\>(`array`): `T`[]

Defined in: [index.ts:119](https://github.com/araujota/inkeep-demo-lib/blob/8045ed22acf532ebed8d31418c5f9a18d1adef5d/src/index.ts#L119)

Shuffle an array randomly using Fisher-Yates algorithm.

## Type Parameters

### T

`T`

## Parameters

### array

`T`[]

The array to shuffle.

## Returns

`T`[]

A new shuffled array.

## Example

```ts
shuffle([1, 2, 3, 4, 5]); // [3, 1, 5, 2, 4] (random order)
```
