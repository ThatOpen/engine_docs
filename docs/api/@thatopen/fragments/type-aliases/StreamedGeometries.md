# StreamedGeometries

> **StreamedGeometries**: `Map`\<`number`, `object`\>

Represents a map of streamed geometries.

## Remarks

This map is used to store the position, normal, and index arrays of each geometry.
Each geometry is associated with a unique identifier (number) which usually corresponds to the ExpressID of the geometry in the IFC file that was used to generate the fragments.

## Example

```typescript
const streamedGeometries: StreamedGeometries = new Map([
  [1, { position: new Float32Array([0, 0, 0]), normal: new Float32Array([0, 1, 0]), index: new Uint32Array([0, 1, 2]) }],
  [2, { position: new Float32Array([1, 0, 0]), normal: new Float32Array([0, 1, 0]), index: new Uint32Array([3, 4, 5]) }],
]);
```

## Template

The type of the geometry identifier. In this case, it is a number.

## Template

The type of the geometry data. It contains position, normal, and index arrays.

## Template

The type of the position array.

## Template

The type of the normal array.

## Template

The type of the index array.
