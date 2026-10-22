# DeferredAoMode

Which ambient-occlusion estimator feeds the denoise + composite. SCREEN_SPACE
is the Hi-Z Alchemy disk; WORLD_SPACE is the hemisphere-probe estimator with a
metre-stable contact footprint. Matches the old DeferredPipeline enum value-for
-value so consumers keep working after the swap.

## Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `SCREEN_SPACE` | `0` |
| `WORLD_SPACE` | `1` |
