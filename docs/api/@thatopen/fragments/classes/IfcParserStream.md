# IfcParserStream

Parses the ISO 10303-21 statements of an IFC file into web-ifc entities,
matching the shape `IfcAPI.GetLine` returns (attributes hold typed value
wrappers, refs are `{ type: 5, value }` handles, omitted attributes are
`null`). Statements may span physical lines, share a line, or be
interleaved with `/* ... */` comments and blank lines. Entity types
outside the file's declared schema are skipped, like web-ifc does.
The stream errors on corrupted statements and on input that ends before
`END-ISO-10303-21;`, so truncated files are not mistaken for complete ones.

## Example

```ts
let blob: Blob;

// node
blob = await fs.openAsBlob(path, { type: "text/plain" });

const ifcStream = blob
  .stream()
  .pipeThrough(new IfcDecoderStream())
  .pipeThrough(new IfcParserStream());

for await (const entity of ifcStream) {
  const localId = entity.expressID;
  const type = entity.type;
}
```

## Extends

- `TransformStream`\<`string`, `webIfc.IfcLineObject`\>
