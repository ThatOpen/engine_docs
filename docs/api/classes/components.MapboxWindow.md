---
id: "components.MapboxWindow"
title: "Class: MapboxWindow"
sidebar_label: "MapboxWindow"
custom_edit_url: null
---

[components](../modules/components.md).MapboxWindow

The main element to create a mapbox-IFC.js application.

## Constructors

### constructor

• **new MapboxWindow**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `MapboxParameters` |

#### Defined in

temp/components/integrations/mapbox/index.ts:27

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

temp/components/integrations/mapbox/index.ts:44

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes all the data of the map. This needs to be called if the
component that contains the map is deleted: otherwise, a memory leak
will be created.

#### Returns

`Promise`<`void`\>

#### Defined in

temp/components/integrations/mapbox/index.ts:107

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

temp/components/integrations/mapbox/index.ts:81

___

### removeAll

▸ **removeAll**(): `void`

Removes all buildings from the map.

#### Returns

`void`

#### Defined in

temp/components/integrations/mapbox/index.ts:96
