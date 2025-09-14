[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / omit

# Function: omit()

> **omit**\<`T`, `K`\>(`obj`, `keys`): `Omit`\<`T`, `K`\>

Defined in: [index.ts:262](https://github.com/araujota/inkeep-demo-lib/blob/8045ed22acf532ebed8d31418c5f9a18d1adef5d/src/index.ts#L262)

Omit specific properties from an object.

## Type Parameters

### T

`T`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### obj

`T`

The source object.

### keys

`K`[]

Keys to omit.

## Returns

`Omit`\<`T`, `K`\>

Object without omitted properties.

## Example

```ts
omit({ a: 1, b: 2, c: 3 }, ['b']); // { a: 1, c: 3 }
```
