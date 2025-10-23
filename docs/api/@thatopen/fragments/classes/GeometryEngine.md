# GeometryEngine

The geometry engine is responsible for generating geometry using web-ifc. It provides a high-level API to generate common BIM shapes like extrusions, sweeps, walls, and profiles.

## Constructors

### new GeometryEngine()

> **new GeometryEngine**(`api`): [`GeometryEngine`](GeometryEngine.md)

Creates a new geometry engine instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `api` | `IfcAPI` | The WebIFC API instance that contains the geometry engine. |

#### Returns

[`GeometryEngine`](GeometryEngine.md)

## Properties

### api

> **api**: `IfcAPI`

The WebIFC API instance that contains the geometry engine.

## Methods

### getArc()

> **getArc**(`geometry`, `data`): `void`

Generates an arc geometry from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry to store the result. |
| `data` | `ArcData` | The data to generate the arc. |

#### Returns

`void`

***

### getBbox()

> **getBbox**(`geometry`, `data`): `void`

Generates a bounding box geometry from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry to store the result. |
| `data` | `BboxData` | The data to generate the bounding box. |

#### Returns

`void`

***

### getBooleanOperation()

> **getBooleanOperation**(`geometry`, `data`): `void`

Generates a boolean operation geometry from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry to store the result. |
| `data` | `BooleanOperationData` | The data to generate the boolean operation. |

#### Returns

`void`

***

### getCircularSweep()

> **getCircularSweep**(`geometry`, `data`): `void`

Generates a circular sweep geometry from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry to store the result. |
| `data` | `CircularSweepData` | The data to generate the circular sweep. |

#### Returns

`void`

***

### getClothoid()

> **getClothoid**(`geometry`, `data`): `void`

Generates a clothoid geometry from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry to store the result. |
| `data` | `ClothoidData` | The data to generate the clothoid. |

#### Returns

`void`

***

### getCylindricalRevolve()

> **getCylindricalRevolve**(`geometry`, `data`): `void`

Generates a cylindrical revolve geometry from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry to store the result. |
| `data` | `CylindricalRevolveData` | The data to generate the cylindrical revolve. |

#### Returns

`void`

***

### getExtrusion()

> **getExtrusion**(`geometry`, `data`): `void`

Generates an extrusion geometry from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry to store the result. |
| `data` | `ExtrusionData` | The data to generate the extrusion. |

#### Returns

`void`

***

### getParabola()

> **getParabola**(`geometry`, `data`): `void`

Generates a parabola geometry from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry to store the result. |
| `data` | `ParabolaData` | The data to generate the parabola. |

#### Returns

`void`

***

### getProfile()

> **getProfile**(`geometry`, `data`): `void`

Generates a profile geometry from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry to store the result. |
| `data` | `ProfileData` | The data to generate the profile. |

#### Returns

`void`

***

### getProfilePoints()

> **getProfilePoints**(`data`): `number`[]

Generates profile points from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `ProfileData` | The data to generate the profile points. |

#### Returns

`number`[]

The profile points.

***

### getRevolve()

> **getRevolve**(`geometry`, `data`): `void`

Generates a revolve geometry from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry to store the result. |
| `data` | `RevolveData` | The data to generate the revolve. |

#### Returns

`void`

***

### getSweep()

> **getSweep**(`geometry`, `data`): `void`

Generates a sweep geometry from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry to store the result. |
| `data` | `SweepData` | The data to generate the sweep. |

#### Returns

`void`

***

### getWall()

> **getWall**(`geometry`, `data`): `void`

Generates a wall geometry from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry to store the result. |
| `data` | `WallData` | The data to generate the wall. |

#### Returns

`void`

***

### transformPoints()

> **transformPoints**(`points`, `transform`): `number`[]

Transforms points from the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `points` | `number`[] | The points to transform. |
| `transform` | `Matrix4` | The transform to apply to the points. |

#### Returns

`number`[]

The transformed points.
