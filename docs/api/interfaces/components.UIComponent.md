---
id: "components.UIComponent"
title: "Interface: UIComponent"
sidebar_label: "UIComponent"
custom_edit_url: null
---

[components](../modules/components.md).UIComponent

Base interface to be implemented by any kind of component
aimed to render user interface (DOM elements) in the viewer.

## Hierarchy

- [`Disposable`](components.Disposable.md)

- [`Hideable`](components.Hideable.md)

  ↳ **`UIComponent`**

## Properties

### dispose

• **dispose**: () => `void`

#### Type declaration

▸ (): `void`

Destroys the object from memory to prevent a
[memory leak](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).

##### Returns

`void`

#### Inherited from

[Disposable](components.Disposable.md).[dispose](components.Disposable.md#dispose)

#### Defined in

components/base-types/base-types.ts:62
