---
id: "openbim_components.MapboxWindow"
title: "Class: MapboxWindow"
sidebar_label: "MapboxWindow"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).MapboxWindow

The main element to create a mapbox-IFC.js application.

## Constructors

### constructor

• **new MapboxWindow**(`config`): [`MapboxWindow`](openbim_components.MapboxWindow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `MapboxParameters` |

#### Returns

[`MapboxWindow`](openbim_components.MapboxWindow.md)

#### Defined in

[src/integrations/mapbox/index.ts:27](https://github.com/ifcjs/components/blob/e46138a/src/integrations/mapbox/index.ts#L27)

## Methods

### add

▸ **add**(`buildings`, `fitToScreen?`): `void`

Add a new set of buildings to the GIS scene.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `buildings` | `MapboxBuilding`[] | `undefined` | The array of MapboxBuilding to add. |
| `fitToScreen` | `boolean` | `true` | Whether to center the camera to see all buildings. |

#### Returns

`void`

#### Defined in

[src/integrations/mapbox/index.ts:44](https://github.com/ifcjs/components/blob/e46138a/src/integrations/mapbox/index.ts#L44)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes all the data of the map. This needs to be called if the
component that contains the map is deleted: otherwise, a memory leak
will be created.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/integrations/mapbox/index.ts:107](https://github.com/ifcjs/components/blob/e46138a/src/integrations/mapbox/index.ts#L107)

___

### remove

▸ **remove**(`id`): `void`

Removes a building from the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The MapboxBuilding to remove. |

#### Returns

`void`

#### Defined in

[src/integrations/mapbox/index.ts:81](https://github.com/ifcjs/components/blob/e46138a/src/integrations/mapbox/index.ts#L81)

___

### removeAll

▸ **removeAll**(): `void`

Removes all buildings from the map.

#### Returns

`void`

#### Defined in

[src/integrations/mapbox/index.ts:96](https://github.com/ifcjs/components/blob/e46138a/src/integrations/mapbox/index.ts#L96)
