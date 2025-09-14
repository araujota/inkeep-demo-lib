[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / daysBetween

# Function: daysBetween()

> **daysBetween**(`date1`, `date2`): `number`

Defined in: [index.ts:421](https://github.com/araujota/inkeep-demo-lib/blob/8045ed22acf532ebed8d31418c5f9a18d1adef5d/src/index.ts#L421)

Calculate the number of days between two dates.

## Parameters

### date1

`Date`

First date.

### date2

`Date`

Second date.

## Returns

`number`

Number of days between the dates.

## Example

```ts
const date1 = new Date('2023-01-01');
const date2 = new Date('2023-01-10');
daysBetween(date1, date2); // 9
```
