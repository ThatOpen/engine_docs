# FRAGMENTS\_VERSION

> `const` **FRAGMENTS\_VERSION**: `string`

The version of this package. It's injected at build time from package.json
(see the `define` option in vite.config.ts), so it's always in sync with
the published version. When the code runs unbundled and the define is not
applied (e.g. tsx scripts), it falls back to "unknown".
