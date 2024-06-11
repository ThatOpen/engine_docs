# FragmentIdMap

A map that associates each fragmentID with a set of item IDs.

## Remarks

This map is used to efficiently retrieve the item IDs associated with a given fragmentID.
Each fragmentID is a unique identifier for a 3D model fragment, and the corresponding set of item IDs
represents the items that are part of that fragment. Generally, the item ID correspond to the express ID of the IFC used to generate the fragments.

## Example

```typescript
const fragmentIdMap: FragmentIdMap = {
  "fragment1": new Set([1, 2, 3]),
  "fragment2": new Set([4, 5]),
};
```

## Template

The type of the fragmentID. In this case, it is a string.

## Template

The type of the itemID. In this case, it is a number.
