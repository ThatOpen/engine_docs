# PostproductionAspect

The postproduction enums live in their own leaf module ON PURPOSE.

They used to be declared in `./index`, which imports the renderer back from
`..` — a cycle. Which module evaluates first then depends on the consumer's
bundler, and a class field initialized from one of these enums can read it
while its module is still half-initialized (`undefined.DEFERRED`, a
TypeError at load). A leaf module has no imports, so it can never lose that
race. Do not import anything here.

## Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `COLOR` | `0` |
| `COLOR_PEN` | `3` |
| `COLOR_PEN_SHADOWS` | `5` |
| `COLOR_SHADOWS` | `4` |
| `PEN` | `1` |
| `PEN_SHADOWS` | `2` |
