# LoadedPointCloud

A loaded point cloud handle returned by [PointCloudLoader.load](../classes/PointCloudLoader.md#load).

## Properties

### anchor

> `readonly` **anchor**: `Vector3`

The float64 world anchor the cloud was rebased to. Georeferenced clouds have
coordinates in the millions; the loader subtracts this anchor so the cloud
lives in a small local origin (no float32 cancellation). Share this anchor
with BIM so both sit in the same local space. If `load` wasn't given an
anchor, this is the cloud's own centre — align other data to it.

***

### box

> `readonly` **box**: `Box3`

World-space bounding box of the (rebased) cloud — use it to frame the camera.

***

### object

> `readonly` **object**: `any`

The underlying potree-core point-cloud object.

***

### visiblePointCount

> `readonly` **visiblePointCount**: `number`

Points currently selected/visible (changes each frame with LOD).
