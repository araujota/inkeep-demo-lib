[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / clamp

# Function: clamp()

> **clamp**(`value`, `min`, `max`): `number`

Defined in: [index.ts:284](https://github.com/araujota/inkeep-demo-lib/blob/8045ed22acf532ebed8d31418c5f9a18d1adef5d/src/index.ts#L284)

Clamp a number between min and max values.

## Parameters

### value

`number`

The number to clamp.

### min

`number`

Minimum value.

### max

`number`

Maximum value.

## Returns

`number`

Clamped number.

## Example

```ts
clamp(10, 0, 5); // 5
clamp(-5, 0, 10); // 0
```
