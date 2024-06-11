# CivilCurve

Represents an alignment curve of a civil engineering model.

## Constructors

### new CivilCurve()

> **new CivilCurve**(`index`, `mesh`, `data`, `alignment`): [`CivilCurve`](CivilCurve.md)

Constructs a new instance of CivilCurve.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the curve. |
| `mesh` | [`CurveMesh`](CurveMesh.md)\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\> | The mesh associated with the curve. |
| `data` | `object` | Additional data associated with the curve. |
| `alignment` | [`Alignment`](Alignment.md) | The alignment of the curve. |

#### Returns

[`CivilCurve`](CivilCurve.md)

## Properties

### alignment

> **alignment**: [`Alignment`](Alignment.md)

The alignment to which this curve belongs.

***

### data

> **data**: `object`

Additional data associated with the curve.

#### Index signature

 \[`name`: `string`\]: `any`

***

### index

> **index**: `number`

The index of the curve. An alignment is a sequence of ordered curves, and this is the index of this curve in that sequence.

***

### mesh

> **mesh**: [`CurveMesh`](CurveMesh.md)\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>

The THREE.js mesh containing the vertices of the curve.

## Methods

### getLength()

> **getLength**(): `number`

Calculates the total length of the curve by summing up the lengths of all segments.

#### Returns

`number`

The total length of the curve.

***

### getPercentageAt()

> **getPercentageAt**(`point`, `tolerance`): `null` \| `number`

Calculates the percentage of the curve that corresponds to the given point.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `point` | `Vector3` | `undefined` | The point for which to calculate the percentage. |
| `tolerance` | `number` | `0.01` | The tolerance for determining if a point is on the curve. Default is 0.01. |

#### Returns

`null` \| `number`

The percentage of the curve that corresponds to the given point, or null if the point is not contained in this curve.

#### Remarks

The method works by iterating over each segment of the curve and checking if the given point is within the tolerance of the segment.
If a point is found, it calculates the percentage of the curve that corresponds to the point.
If no point is found, it returns null.

***

### getPointAt()

> **getPointAt**(`percentage`): `Vector3`

Calculates a point on the curve based on the given percentage.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `percentage` | `number` | The percentage along the curve (between zero and one). |

#### Returns

`Vector3`

A new THREE.Vector3 representing the point on the curve.

#### Remarks

The method works by first finding the segment that corresponds to the given percentage.
It then normalizes the direction of the segment, multiplies it by the distance to the start of the segment,
and adds it to the start point of the segment.

#### Throws

Will throw an error if the percentage is outside the range [0, 1].

***

### getSegment()

> **getSegment**(`index`): `object`

Retrieves a segment of the curve based on the given index.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the segment. |

#### Returns

`object`

An object containing the start and end points of the segment.

##### endPoint

> **endPoint**: `Vector3`

##### startPoint

> **startPoint**: `Vector3`

#### Remarks

The method calculates the start and end points of the segment based on the given index.
It uses the index array and position attribute of the curve's geometry to determine the start and end points.

#### Throws

Will throw an error if the index is out of range.

***

### getSegmentAt()

> **getSegmentAt**(`percentage`): `object`

Calculates a segment of the curve based on the given percentage.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `percentage` | `number` | The percentage along the curve (between zero and one). |

#### Returns

`object`

An object containing the distance to the start of the segment, the index of the segment, and the start and end points of the segment.

##### distanceToStart

> **distanceToStart**: `number`

##### endPoint

> **endPoint**: `Vector3`

##### index

> **index**: `number`

##### startPoint

> **startPoint**: `Vector3`

#### Remarks

The method works by first finding the segment that corresponds to the given percentage.
It then returns an object containing the distance to the start of the segment, the index of the segment, and the start and end points of the segment.

#### Throws

Will throw an error if the percentage is outside the range [0, 1].
