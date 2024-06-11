# CurveMesh\<TGeometry, TMaterial\>

Represents an alignment 3D curve mesh with additional civil engineering properties.
Extends THREE.LineSegments to provide geometry and material for the curve.

## Extends

- `LineSegments`\<`TGeometry`, `TMaterial`\>

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `TGeometry` *extends* `THREE.BufferGeometry` | `THREE.BufferGeometry` | The type of geometry for the curve mesh. Default is THREE.BufferGeometry. |
| `TMaterial` *extends* `THREE.Material` \| `THREE.Material`[] | `THREE.Material` \| `THREE.Material`[] | The type of material(s) for the curve mesh. Default is THREE.Material or THREE.Material[]. |

## Constructors

### new CurveMesh()

> **new CurveMesh**\<`TGeometry`, `TMaterial`\>(`index`, `data`, `alignment`, `geometry`?, `material`?): [`CurveMesh`](CurveMesh.md)\<`TGeometry`, `TMaterial`\>

Constructs a new instance of CurveMesh.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the curve mesh. |
| `data` | `object` | The data associated with the curve mesh. |
| `alignment` | [`Alignment`](Alignment.md) | The alignment of the curve mesh. |
| `geometry`? | `TGeometry` | The geometry for the curve mesh. Optional. |
| `material`? | `TMaterial` | The material(s) for the curve mesh. Optional. |

#### Returns

[`CurveMesh`](CurveMesh.md)\<`TGeometry`, `TMaterial`\>

#### Overrides

`THREE.LineSegments<TGeometry, TMaterial>.constructor`

## Properties

### curve

> **curve**: [`CivilCurve`](CivilCurve.md)

The civil curve associated with this curve mesh.
