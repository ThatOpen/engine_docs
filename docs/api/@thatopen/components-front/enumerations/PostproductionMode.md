# PostproductionMode

The rendering pipeline the postproduction runs. COMPOSER is the default
EffectComposer style stack; DEFERRED is the forward + auxiliary-geometry-prepass
pipeline. An enum (rather than a boolean) leaves room for further modes.

## Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `COMPOSER` | `0` |
| `DEFERRED` | `1` |
