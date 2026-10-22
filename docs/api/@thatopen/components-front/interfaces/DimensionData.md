# DimensionData

Interface representing the data required to create a dimension line.

## Properties

### endpointElement

> **endpointElement**: `HTMLElement`

The HTML element to be used as the endpoint marker for the dimension line.

***

### line

> **line**: `Line`

The 3D line representing the dimension.

***

### lineMaterial

> **lineMaterial**: `LineMaterial` \| `LineBasicMaterial`

The material to be used for the line of the dimension. A
`THREE.LineBasicMaterial` renders a basic 1px line; a `LineMaterial`
renders a fat line whose width honors `linewidth`.
