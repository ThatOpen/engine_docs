# computeAlignmentMatrix()

> **computeAlignmentMatrix**(`drawingPoints`, `worldPoints`): `THREE.Matrix4`

Computes a local-to-world transformation matrix that maps a technical drawing's local coordinate system onto a target plane in 3D world space.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `drawingPoints` | `Vector3`[] | Three non-collinear points in drawing local space. |
| `worldPoints` | `Vector3`[] | Three corresponding non-collinear points in world space. |

## Returns

`THREE.Matrix4`

## Throws

If either set of points is collinear (cannot define a plane).

## Throws

If either set contains a degenerate first pair (zero distance).
