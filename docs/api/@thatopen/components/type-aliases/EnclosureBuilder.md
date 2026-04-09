# EnclosureBuilder

> **EnclosureBuilder**: `object`

Defines a closed shape (cloud, rectangle, circle, etc.) that forms the body of a callout annotation.

## Type declaration

### buildGeometry()

> **buildGeometry**: (`center`, `halfW`, `halfH`) => `number`[]

Returns flat XYZ line-segment pairs forming the enclosure outline.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `center` | `THREE.Vector3` |
| `halfW` | `number` |
| `halfH` | `number` |

#### Returns

`number`[]

### getAttachmentPoint()

> **getAttachmentPoint**: (`center`, `halfW`, `halfH`, `dir`) => `THREE.Vector3`

Returns the point on the enclosure boundary in the direction `dir` from
`center`. `dir` is a unit vector in the XZ plane.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `center` | `THREE.Vector3` |
| `halfW` | `number` |
| `halfH` | `number` |
| `dir` | `THREE.Vector3` |

#### Returns

`THREE.Vector3`
