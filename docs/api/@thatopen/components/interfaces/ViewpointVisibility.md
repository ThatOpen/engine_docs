# ViewpointVisibility

Represents the visibility settings for a viewpoint. This interface is compliant with the BCF API specifications.

## Properties

### default\_visibility

> **default\_visibility**: `boolean`

Indicates whether the default visibility is enabled.

***

### exceptions

> **exceptions**: [`ViewpointComponent`](ViewpointComponent.md)[]

A list of viewpoint components that are exceptions to the default visibility.

***

### view\_setup\_hints

> **view\_setup\_hints**: `object`

Configuration hints for the viewpoint setup.

#### openings\_visible

> **openings\_visible**: `boolean`

Specifies whether openings are visible.

#### space\_boundaries\_visible

> **space\_boundaries\_visible**: `boolean`

Specifies whether space boundaries are visible.

#### spaces\_visible

> **spaces\_visible**: `boolean`

Specifies whether spaces are visible.
