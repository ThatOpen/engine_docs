# buildCalloutPreviewPositions()

> **buildCalloutPreviewPositions**(`kind`, `center`, `halfW`, `halfH`, `elbow`, `cursor`, `style`): `number`[]

Builds vertex positions for the live preview during interactive placement.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `kind` | `"awaitingRadius"` \| `"awaitingElbow"` \| `"awaitingExtension"` |
| `center` | `Vector3` |
| `halfW` | `number` |
| `halfH` | `number` |
| `elbow` | `null` \| `Vector3` |
| `cursor` | `null` \| `Vector3` |
| `style` | [`CalloutAnnotationStyle`](../interfaces/CalloutAnnotationStyle.md) |

## Returns

`number`[]
