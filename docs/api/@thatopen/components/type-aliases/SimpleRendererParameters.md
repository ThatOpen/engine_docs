# SimpleRendererParameters

> **SimpleRendererParameters**: `Partial`\<`THREE.WebGLRendererParameters`\> & `object`

The renderer construction options: THREE's own WebGLRenderer parameters
plus the GPU API.

## Type declaration

### mode?

> `optional` **mode**: [`RendererApi`](RendererApi.md)

The GPU API. Omitted (or `"webgl"`), the renderer is a
`THREE.WebGLRenderer`, exactly as before this option existed.

`"webgpu"` builds a `THREE.WebGPURenderer` and the WebGPU pipeline
(TSL materials, and in `@thatopen/components-front` the WebGPU
postproduction). It is never chosen automatically. It needs:

- **three r185 or newer** (`three@>=0.185`): the WebGPU pipeline uses
  r185 features. An older three throws a clear error here.
- **The application resolving `three` to `three/webgpu`**, the superset
  build that ships `WebGPURenderer` and the node materials. One module
  graph: this library reads the WebGPU classes off the same `three`
  namespace it uses for everything else, which is what keeps WebGL
  applications from loading any of it. With Vite:

```ts
resolve: {
  alias: [
    { find: /^three$/, replacement: "three/webgpu" },
    // The WebGL-only line and postprocessing addons the libraries
    // import cannot link against three/webgpu: aliases shipped in
    // @thatopen/components-front (see its README, "WebGPU").
    {
      find: /^three/(examples/jsm|addons)/lines/(Line2|LineSegments2|LineMaterial|Wireframe)\.js$/,
      replacement: "@thatopen/components-front/webgpu/lines.mjs",
    },
    {
      find: /^three/(examples/jsm|addons)/postprocessing/.*$/,
      replacement: "@thatopen/components-front/webgpu/webgl-addons-stub.mjs",
    },
  ],
},
```

A `three` that resolves to the WebGPU build has no `WebGLRenderer`, so
under that alias `mode: "webgpu"` must be passed explicitly; omitting it
throws instead of silently switching API.
