---
id: "thatopen_components.Disposable"
title: "Interface: Disposable"
sidebar_label: "Disposable"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).Disposable

Whether this component has to be manually destroyed once you are done with
it to prevent
[memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).
This also ensures that the DOM events created by that component will be
cleaned up.

## Implemented by

- [`BoundingBoxer`](../classes/thatopen_components.BoundingBoxer.md)
- [`Clipper`](../classes/thatopen_components.Clipper.md)
- [`Components`](../classes/thatopen_components.Components.md)
- [`Cullers`](../classes/thatopen_components.Cullers.md)
- [`FragmentsManager`](../classes/thatopen_components.FragmentsManager.md)
- [`IfcRelationsIndexer`](../classes/thatopen_components.IfcRelationsIndexer.md)
- [`SimpleCamera`](../classes/thatopen_components.SimpleCamera.md)
- [`SimplePlane`](../classes/thatopen_components.SimplePlane.md)

## Properties

### dispose

• **dispose**: () => `void` \| `Promise`<`void`\>

#### Type declaration

▸ (): `void` \| `Promise`<`void`\>

Destroys the object from memory to prevent a
[memory leak](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[packages/core/src/core/Types/src/interfaces.ts:17](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/interfaces.ts#L17)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](../classes/thatopen_components.Event.md)<`any`\>

Fired after the tool has been [()](thatopen_components.Disposable.md#dispose)

#### Defined in

[packages/core/src/core/Types/src/interfaces.ts:20](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/interfaces.ts#L20)
