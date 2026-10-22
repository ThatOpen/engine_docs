# streamAsyncIterator()

> **streamAsyncIterator**\<`T`\>(`stream`): `AsyncGenerator`\<`Awaited`\<`T`\>, `void`, `unknown`\>

Backward compatible stream async iterator
```typescript
for await (const line of streamAsyncIterator(readableStream)) {
  await callback(line);
}
```

Modern environments support stream async iterator out of the box:
```typescript
for await (const line of readableStream) {
  await callback(line);
}
```

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `stream` | `ReadableStream`\<`T`\> |

## Returns

`AsyncGenerator`\<`Awaited`\<`T`\>, `void`, `unknown`\>
