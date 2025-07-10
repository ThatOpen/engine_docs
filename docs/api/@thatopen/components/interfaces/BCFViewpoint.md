# BCFViewpoint

Represents a Building Collaboration Format (BCF) viewpoint. This interface is compliant with the BCF API specifications.

## Properties

### bitmaps?

> `optional` **bitmaps**: [`ViewpointBitmap`](ViewpointBitmap.md)[]

Optional array of bitmaps associated with the viewpoint.

***

### clipping\_planes?

> `optional` **clipping\_planes**: [`ViewpointClippingPlane`](ViewpointClippingPlane.md)[]

Optional array of clipping planes associated with the viewpoint.

***

### components?

> `optional` **components**: [`ViewpointComponents`](ViewpointComponents.md)

Optional components associated with the viewpoint.

***

### guid

> **guid**: `string`

Unique identifier for the viewpoint.

***

### index?

> `optional` **index**: `number`

Optional index of the viewpoint.

***

### lines?

> `optional` **lines**: [`ViewpointLine`](ViewpointLine.md)[]

Optional array of lines associated with the viewpoint.

***

### orthogonal\_camera?

> `optional` **orthogonal\_camera**: [`ViewpointOrthogonalCamera`](../type-aliases/ViewpointOrthogonalCamera.md)

Optional orthogonal camera settings for the viewpoint.

***

### perspective\_camera?

> `optional` **perspective\_camera**: [`ViewpointPerspectiveCamera`](../type-aliases/ViewpointPerspectiveCamera.md)

Optional perspective camera settings for the viewpoint.

***

### snapshot?

> `optional` **snapshot**: [`ViewpointSnapshot`](ViewpointSnapshot.md)

Optional snapshot image of the viewpoint.

***

### title?

> `optional` **title**: `string`

Optional title of the viewpoint.
