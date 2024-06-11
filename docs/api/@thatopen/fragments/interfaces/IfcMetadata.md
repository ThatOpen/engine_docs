# IfcMetadata

Represents metadata related to the IFC model.

## Remarks

This interface contains information about the name, description, schema version, and the maximum expressID of the IFC model.

## Example

```typescript
const ifcMetadata: IfcMetadata = {
  name: "My IFC Model",
  description: "A sample IFC model",
  schema: "IFC4X3",
  maxExpressID: 12345,
};
```

## Properties

### description

> **description**: `string`

A brief description of the IFC model.

***

### maxExpressID

> **maxExpressID**: `number`

The maximum expressID of the IFC model.

#### Remarks

The expressID is a unique identifier for each IFC entity.

***

### name

> **name**: `string`

The name of the IFC model.

***

### schema

> **schema**: [`IfcSchema`](../type-aliases/IfcSchema.md)

The version of the IFC schema used in the model.

#### Remarks

The supported IFC schemas are:
- IFC2X3
- IFC4
- IFC4X3
