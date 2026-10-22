# PointCloudSource

A pluggable source for a point-cloud octree. The app supplies the URL and,
optionally, a request manager (e.g. a Range / signed-url adapter). Loaders stay
EXTERNAL to the loader: the component draws, the app decides how bytes are
fetched (local server, S3 Range, signed URLs…).

## Properties

### metadata?

> `optional` **metadata**: `string`

Metadata file name within `url`. Defaults to `"metadata.json"`.

***

### requestManager?

> `optional` **requestManager**: [`PointCloudRequestManager`](PointCloudRequestManager.md)

Optional fetch adapter: resolve URLs + perform the (Range) request. When
omitted, a plain `fetch` (cache: "no-store") relative to `url` is used.

***

### url

> **url**: `string`

Base URL of the folder containing the Potree 2.0 `metadata.json`.
