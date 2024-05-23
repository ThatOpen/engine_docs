---
id: "thatopen_components_front.ClipEdges"
title: "Class: ClipEdges"
sidebar_label: "ClipEdges"
custom_edit_url: null
---

[@thatopen/components-front](../modules/thatopen_components_front.md).ClipEdges

A more advanced version of SimpleClipper that also supports
ClippingEdges with customizable lines.

## Hierarchy

- `Component`

  ↳ **`ClipEdges`**

## Implements

- `Disposable`

## Properties

### styles

• **styles**: `EdgesStyles`

The list of defined LineStyle instances.

#### Defined in

[packages/front/src/core/EdgesClipper/index.ts:19](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/front/src/core/EdgesClipper/index.ts#L19)

## Methods

### update

▸ **update**(`updateFills?`): `Promise`<`void`\>

Updates all the lines of the ClippingEdges.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `updateFills` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/front/src/core/EdgesClipper/index.ts:54](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/front/src/core/EdgesClipper/index.ts#L54)
