# PickDepthContributorContext

Context handed to each [FastModelPicker.pickDepthContributors](../classes/FastModelPicker.md#pickdepthcontributors) entry.
`target` is bound and scissored to the pixel under the cursor when the
contributor runs; `camera` is the world camera (not narrowed).

## Properties

### scissor

> **scissor**: `Vector4`

Scissor box in CSS pixels (as `renderer.setScissor` takes it).
