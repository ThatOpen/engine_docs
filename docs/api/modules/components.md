---
id: "components"
title: "Module: components"
sidebar_label: "components"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [BaseRenderer](../classes/components.BaseRenderer.md)
- [CloudProcessor](../classes/components.CloudProcessor.md)
- [Component](../classes/components.Component.md)
- [Components](../classes/components.Components.md)
- [CubeMap](../classes/components.CubeMap.md)
- [Disposer](../classes/components.Disposer.md)
- [EdgesClipper](../classes/components.EdgesClipper.md)
- [EdgesPlane](../classes/components.EdgesPlane.md)
- [Event](../classes/components.Event.md)
- [FragmentBoundingBox](../classes/components.FragmentBoundingBox.md)
- [FragmentIfcLoader](../classes/components.FragmentIfcLoader.md)
- [FragmentManager](../classes/components.FragmentManager.md)
- [FragmentPlans](../classes/components.FragmentPlans.md)
- [IfcJsonExporter](../classes/components.IfcJsonExporter.md)
- [LengthMeasurement](../classes/components.LengthMeasurement.md)
- [LocalCacher](../classes/components.LocalCacher.md)
- [MapboxWindow](../classes/components.MapboxWindow.md)
- [MaterialManager](../classes/components.MaterialManager.md)
- [Mouse](../classes/components.Mouse.md)
- [OrthoPerspectiveCamera](../classes/components.OrthoPerspectiveCamera.md)
- [PostproductionRenderer](../classes/components.PostproductionRenderer.md)
- [ScreenCuller](../classes/components.ScreenCuller.md)
- [Simple2DScene](../classes/components.Simple2DScene.md)
- [SimpleCamera](../classes/components.SimpleCamera.md)
- [SimpleClipper](../classes/components.SimpleClipper.md)
- [SimpleGrid](../classes/components.SimpleGrid.md)
- [SimplePlane](../classes/components.SimplePlane.md)
- [SimpleRaycaster](../classes/components.SimpleRaycaster.md)
- [SimpleRenderer](../classes/components.SimpleRenderer.md)
- [SimpleScene](../classes/components.SimpleScene.md)
- [ToolComponent](../classes/components.ToolComponent.md)
- [UIElement](../classes/components.UIElement.md)
- [UIManager](../classes/components.UIManager.md)

## Interfaces

- [Createable](../interfaces/components.Createable.md)
- [Disposable](../interfaces/components.Disposable.md)
- [FragmentIdMap](../interfaces/components.FragmentIdMap.md)
- [Hideable](../interfaces/components.Hideable.md)
- [NavigationMode](../interfaces/components.NavigationMode.md)
- [Progress](../interfaces/components.Progress.md)
- [Resizeable](../interfaces/components.Resizeable.md)
- [UI](../interfaces/components.UI.md)
- [Updateable](../interfaces/components.Updateable.md)

## Type Aliases

### CameraProjection

Ƭ **CameraProjection**: ``"Perspective"`` \| ``"Orthographic"``

The projection system of the camera.

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/src/types.ts:7

___

### NavModeID

Ƭ **NavModeID**: ``"Orbit"`` \| ``"FirstPerson"`` \| ``"Plan"``

The extensible list of supported navigation modes.

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/src/types.ts:12

## Variables

### DimensionLabelClassName

• `Const` **DimensionLabelClassName**: ``"text-white text-sm bg-ifcjs-100 rounded-md px-3 py-1"``

The name of the CSS class that styles the dimension label.

#### Defined in

temp/components/measurement/LengthMeasurement/src/types.ts:4

___

### DimensionPreviewClassName

• `Const` **DimensionPreviewClassName**: ``"bg-ifcjs-100 rounded-full w-[8px] h-[8px]"``

The name of the CSS class that styles the dimension label.

#### Defined in

temp/components/measurement/LengthMeasurement/src/types.ts:8
