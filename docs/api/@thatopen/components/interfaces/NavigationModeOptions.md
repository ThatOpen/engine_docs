# NavigationModeOptions

Optional data passed to [NavigationMode.set](NavigationMode.md#set) when enabling or
disabling a navigation mode.

## Properties

### preventTargetAdjustment?

> `optional` **preventTargetAdjustment**: `boolean`

If `true`, the mode must not readjust the camera controls target when
it activates (i.e. it must skip any `moveTo` re-framing). Used by the
[OrthoPerspectiveCamera](../classes/OrthoPerspectiveCamera.md) on world assignment, where the initial
mode setup has already framed the camera and a second adjustment would
move the target again.
