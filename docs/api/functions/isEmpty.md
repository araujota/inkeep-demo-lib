[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / isEmpty

# Function: isEmpty()

> **isEmpty**(`value`): `boolean`

Defined in: [index.ts:367](https://github.com/araujota/inkeep-demo-lib/blob/8045ed22acf532ebed8d31418c5f9a18d1adef5d/src/index.ts#L367)

Check if a value is empty (null, undefined, empty string, empty array, empty object).

## Parameters

### value

`any`

The value to check.

## Returns

`boolean`

True if empty.

## Example

```ts
isEmpty(""); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty("hello"); // false
```
