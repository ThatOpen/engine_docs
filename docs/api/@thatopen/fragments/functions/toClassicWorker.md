# toClassicWorker()

> **toClassicWorker**(`workerURL`): `Promise`\<`string`\>

Fetches a worker script and returns a blob URL with the ES module `export` stripped, so it can be used as a classic (non-module) worker.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `workerURL` | `string` | URL of the ES module worker script. |

## Returns

`Promise`\<`string`\>

A blob URL usable with `new FragmentsModels(url, { classicWorker: true })`.
