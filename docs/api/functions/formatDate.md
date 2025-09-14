[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / formatDate

# Function: formatDate()

> **formatDate**(`date`, `format`): `string`

Defined in: [index.ts:386](https://github.com/araujota/inkeep-demo-lib/blob/8045ed22acf532ebed8d31418c5f9a18d1adef5d/src/index.ts#L386)

Format a date to a readable string.

## Parameters

### date

`Date`

The date to format.

### format

`string` = `"YYYY-MM-DD"`

Format string (YYYY-MM-DD, MM/DD/YYYY, etc.).

## Returns

`string`

Formatted date string.

## Example

```ts
formatDate(new Date(), "YYYY-MM-DD"); // "2023-12-25"
```
