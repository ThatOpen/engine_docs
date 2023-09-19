---
id: "components.FragmentPlans"
title: "Class: FragmentPlans"
sidebar_label: "FragmentPlans"
custom_edit_url: null
---

[components](../modules/components.md).FragmentPlans

Helper to control the camera and easily define and navigate 2D floor plans.

## Hierarchy

- [`Component`](components.Component.md)<`PlanView`[]\>

  ↳ **`FragmentPlans`**

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)
- [`UI`](../interfaces/components.UI.md)

## Properties

### currentPlan

• **currentPlan**: ``null`` \| `PlanView` = `null`

The floorplan that is currently selected.

#### Defined in

temp/components/fragments/FragmentPlans/index.ts:42

___

### defaultCameraOffset

• **defaultCameraOffset**: `number` = `30`

The offset of the 2D camera to the floor plan elevation.

#### Defined in

temp/components/fragments/FragmentPlans/index.ts:48

___

### defaultSectionOffset

• **defaultSectionOffset**: `number` = `1.5`

The offset from the clipping planes to their respective floor plan elevation.

#### Defined in

temp/components/fragments/FragmentPlans/index.ts:45

___

### enabled

• **enabled**: `boolean` = `false`

[enabled](components.Component.md#enabled)

#### Overrides

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

temp/components/fragments/FragmentPlans/index.ts:39

___

### storeys

• **storeys**: `Object` = `[]`

The created floor plans.

#### Index signature

▪ [modelID: `number`]: `any`[]

#### Defined in

temp/components/fragments/FragmentPlans/index.ts:51

___

### uiElement

• **uiElement**: [`UIElement`](components.UIElement.md)<{ `commandsMenu`: `CommandsMenu`<`PlanView`\> ; `defaultText`: `SimpleUIComponent`<`HTMLParagraphElement`\> ; `exitButton`: `Button` ; `floatingWindow`: `FloatingWindow` ; `main`: `Button` ; `planList`: `SimpleUIComponent`<`HTMLElement`\>  }\>

[uiElement](../interfaces/components.UI.md#uielement)

#### Implementation of

[UI](../interfaces/components.UI.md).[uiElement](../interfaces/components.UI.md#uielement)

#### Defined in

temp/components/fragments/FragmentPlans/index.ts:56

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

temp/components/fragments/FragmentPlans/index.ts:151

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/fragments/FragmentPlans/index.ts:97

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

temp/components/fragments/FragmentPlans/index.ts:194

___

### get

▸ **get**(): `PlanView`[]

[get](components.Component.md#get)

#### Returns

`PlanView`[]

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/fragments/FragmentPlans/index.ts:92

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

temp/components/fragments/FragmentPlans/index.ts:169

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](components.Component.md).[hasUI](components.Component.md#hasui)

#### Defined in

temp/components/base-types/component.ts:50

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](components.Component.md).[isDisposeable](components.Component.md#isdisposeable)

#### Defined in

temp/components/base-types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](components.Component.md).[isHideable](components.Component.md#ishideable)

#### Defined in

temp/components/base-types/component.ts:45

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](components.Component.md).[isResizeable](components.Component.md#isresizeable)

#### Defined in

temp/components/base-types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](components.Component.md).[isUpdateable](components.Component.md#isupdateable)

#### Defined in

temp/components/base-types/component.ts:38
