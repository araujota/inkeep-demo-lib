[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / isURL

# Function: isURL()

> **isURL**(`url`): `boolean`

Defined in: [index.ts:348](https://github.com/araujota/inkeep-demo-lib/blob/8045ed22acf532ebed8d31418c5f9a18d1adef5d/src/index.ts#L348)

Check if a string is a valid URL.

## Parameters

### url

`string`

The string to validate.

## Returns

`boolean`

True if valid URL.

## Example

```ts
isURL("https://example.com"); // true
isURL("not-a-url"); // false
```
