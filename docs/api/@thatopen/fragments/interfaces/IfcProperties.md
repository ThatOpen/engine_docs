# IfcProperties

Represents a map of IFC properties.

## Remarks

Each property is associated with an expressID, which is a unique identifier for the IFC entity.
The properties are stored as an object with attribute names as keys and their corresponding values.

## Example

```typescript
const ifcProperties: IfcProperties = {
  123: { name: "Wall", color: "red" },
  456: { name: "Door", height: 2.1 },
};
```

## Indexable

 \[`expressID`: `number`\]: `object`
