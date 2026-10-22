# IfcDecoderStream

## Example

```ts
let blob: Blob;

// node
blob = await fs.openAsBlob(path, { type: "text/plain" });

const ifcStream = blob
  .stream()
  .pipeThrough(new IfcDecoderStream());

for await (const line of ifcStream) {
  // parse line
}
```

## Extends

- `TransformStream`\<`Uint8Array`, `string`\>
