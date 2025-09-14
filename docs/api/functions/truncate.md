[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / truncate

# Function: truncate()

> **truncate**(`str`, `length`, `suffix`): `string`

Defined in: [index.ts:180](https://github.com/araujota/inkeep-demo-lib/blob/8045ed22acf532ebed8d31418c5f9a18d1adef5d/src/index.ts#L180)

Truncate a string to a specified length with optional ellipsis.

## Parameters

### str

`string`

The string to truncate.

### length

`number`

Maximum length.

### suffix

`string` = `'...'`

Suffix to append when truncated.

## Returns

`string`

Truncated string.

## Example

```ts
truncate("Hello World", 5); // "Hello..."
```
