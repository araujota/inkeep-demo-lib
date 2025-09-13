[**inkeep-demo-lib**](../README.md)

***

[inkeep-demo-lib](../globals.md) / TinyQueue

# Class: TinyQueue\<T\>

Defined in: [index.ts:11](https://github.com/araujota/inkeep-demo-lib/blob/dc2aed72648e5dd506b55b566a6d7e500912e04f/src/index.ts#L11)

A resilient FIFO queue with time-based dequeue, used for demo purposes.

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new TinyQueue**\<`T`\>(): `TinyQueue`\<`T`\>

#### Returns

`TinyQueue`\<`T`\>

## Accessors

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: [index.ts:43](https://github.com/araujota/inkeep-demo-lib/blob/dc2aed72648e5dd506b55b566a6d7e500912e04f/src/index.ts#L43)

Number of items currently in the queue.

##### Returns

`number`

## Methods

### clear()

> **clear**(): `void`

Defined in: [index.ts:48](https://github.com/araujota/inkeep-demo-lib/blob/dc2aed72648e5dd506b55b566a6d7e500912e04f/src/index.ts#L48)

Remove all items from the queue.

#### Returns

`void`

***

### dequeue()

> **dequeue**(`minMs`): `undefined` \| `T`

Defined in: [index.ts:34](https://github.com/araujota/inkeep-demo-lib/blob/dc2aed72648e5dd506b55b566a6d7e500912e04f/src/index.ts#L34)

Dequeue the next value if it has been in the queue at least `minMs` milliseconds.

#### Parameters

##### minMs

`number` = `0`

Minimum age in milliseconds before dequeue is allowed.

#### Returns

`undefined` \| `T`

The dequeued value, or `undefined` if none is ready.

***

### enqueue()

> **enqueue**(`value`): `number`

Defined in: [index.ts:23](https://github.com/araujota/inkeep-demo-lib/blob/dc2aed72648e5dd506b55b566a6d7e500912e04f/src/index.ts#L23)

Enqueue a value.

#### Parameters

##### value

`T`

Item to enqueue.

#### Returns

`number`

New length of the queue.

#### Example

```ts
const q = new TinyQueue<number>();
q.enqueue(42);
```
