# ViewpointBitmap

Represents a bitmap image associated with a viewpoint. This interface is compliant with the BCF API specifications.

## Properties

### bitmap\_data

> **bitmap\_data**: `string`

The base64-encoded string representing the bitmap image data.

***

### bitmap\_type

> **bitmap\_type**: `"png"` \| `"jpg"`

The type of the bitmap image, either "png" or "jpg".

***

### height

> **height**: `number`

The height of the bitmap in units.

***

### location

> **location**: [`ViewpointVector`](ViewpointVector.md)

The 3D vector specifying the location of the bitmap in space.

***

### normal

> **normal**: [`ViewpointVector`](ViewpointVector.md)

The 3D vector specifying the normal direction of the bitmap.

***

### up

> **up**: [`ViewpointVector`](ViewpointVector.md)

The 3D vector specifying the upward direction of the bitmap.
