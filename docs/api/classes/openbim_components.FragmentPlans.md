---
id: "openbim_components.FragmentPlans"
title: "Class: FragmentPlans"
sidebar_label: "FragmentPlans"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).FragmentPlans

Helper to control the camera and easily define and navigate 2D floor plans.

## Hierarchy

- [`Component`](openbim_components.Component.md)<`PlanView`[]\>

  ↳ **`FragmentPlans`**

## Implements

- [`Disposable`](../interfaces/openbim_components.Disposable.md)
- [`UI`](../interfaces/openbim_components.UI.md)

## Properties

### currentPlan

• **currentPlan**: ``null`` \| `PlanView` = `null`

The floorplan that is currently selected.

#### Defined in

[temp/components/src/fragments/FragmentPlans/index.ts:44](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/fragments/FragmentPlans/index.ts#L44)

___

### defaultCameraOffset

• **defaultCameraOffset**: `number` = `30`

The offset of the 2D camera to the floor plan elevation.

#### Defined in

[temp/components/src/fragments/FragmentPlans/index.ts:50](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/fragments/FragmentPlans/index.ts#L50)

___

### defaultSectionOffset

• **defaultSectionOffset**: `number` = `1.5`

The offset from the clipping planes to their respective floor plan elevation.

#### Defined in

[temp/components/src/fragments/FragmentPlans/index.ts:47](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/fragments/FragmentPlans/index.ts#L47)

___

### enabled

• **enabled**: `boolean` = `false`

[Component.enabled](openbim_components.Component.md#enabled)

#### Overrides

[Component](openbim_components.Component.md).[enabled](openbim_components.Component.md#enabled)

#### Defined in

[temp/components/src/fragments/FragmentPlans/index.ts:41](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/fragments/FragmentPlans/index.ts#L41)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`string`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[temp/components/src/fragments/FragmentPlans/index.ts:34](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/fragments/FragmentPlans/index.ts#L34)

___

### storeys

• **storeys**: `Object` = `[]`

The created floor plans.

#### Index signature

▪ [modelID: `number`]: `any`[]

#### Defined in

[temp/components/src/fragments/FragmentPlans/index.ts:53](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/fragments/FragmentPlans/index.ts#L53)

___

### uiElement

• **uiElement**: [`UIElement`](openbim_components.UIElement.md)<{ `commandsMenu`: `CommandsMenu`<`PlanView`\> ; `defaultText`: `SimpleUIComponent`<`HTMLParagraphElement`\> ; `exitButton`: `Button` ; `floatingWindow`: `FloatingWindow` ; `main`: `Button` ; `planList`: `SimpleUIComponent`<`HTMLElement`\>  }\>

[UI.uiElement](../interfaces/openbim_components.UI.md#uielement)

#### Implementation of

[UI](../interfaces/openbim_components.UI.md).[uiElement](../interfaces/openbim_components.UI.md#uielement)

#### Defined in

[temp/components/src/fragments/FragmentPlans/index.ts:58](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/fragments/FragmentPlans/index.ts#L58)

## Methods

### create

▸ **create**(`config`): `Promise`<`void`\>

Creates a new floor plan in the navigator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `PlanView` | Necessary data to initialize the floor plan. |

#### Returns

`Promise`<`void`\>

#### Defined in

[temp/components/src/fragments/FragmentPlans/index.ts:155](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/fragments/FragmentPlans/index.ts#L155)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[temp/components/src/fragments/FragmentPlans/index.ts:99](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/fragments/FragmentPlans/index.ts#L99)

___

### exitPlanView

▸ **exitPlanView**(`animate?`): `Promise`<`void`\>

Deactivate navigator and go back to the previous view.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animate` | `boolean` | `false` | Whether to animate the camera transition. |

#### Returns

`Promise`<`void`\>

#### Defined in

[temp/components/src/fragments/FragmentPlans/index.ts:199](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/fragments/FragmentPlans/index.ts#L199)

___

### get

▸ **get**(): `PlanView`[]

[Component.get](openbim_components.Component.md#get)

#### Returns

`PlanView`[]

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[temp/components/src/fragments/FragmentPlans/index.ts:94](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/fragments/FragmentPlans/index.ts#L94)

___

### goTo

▸ **goTo**(`id`, `animate?`): `Promise`<`void`\>

Make the navigator go to the specified floor plan.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | Floor plan to go to. |
| `animate` | `boolean` | `false` | Whether to animate the camera transition. |

#### Returns

`Promise`<`void`\>

#### Defined in

[temp/components/src/fragments/FragmentPlans/index.ts:174](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/fragments/FragmentPlans/index.ts#L174)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[temp/components/src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[temp/components/src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[temp/components/src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[temp/components/src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[temp/components/src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[temp/components/src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L45)
