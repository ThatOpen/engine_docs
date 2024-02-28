---
id: "openbim_components"
title: "Module: openbim-components"
sidebar_label: "openbim-components"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [BaseRenderer](../classes/openbim_components.BaseRenderer.md)
- [CloudStorage](../classes/openbim_components.CloudStorage.md)
- [Component](../classes/openbim_components.Component.md)
- [Components](../classes/openbim_components.Components.md)
- [CubeMap](../classes/openbim_components.CubeMap.md)
- [Disposer](../classes/openbim_components.Disposer.md)
- [EdgesClipper](../classes/openbim_components.EdgesClipper.md)
- [EdgesPlane](../classes/openbim_components.EdgesPlane.md)
- [Event](../classes/openbim_components.Event.md)
- [FragmentBoundingBox](../classes/openbim_components.FragmentBoundingBox.md)
- [FragmentManager](../classes/openbim_components.FragmentManager.md)
- [FragmentPlans](../classes/openbim_components.FragmentPlans.md)
- [IfcJsonExporter](../classes/openbim_components.IfcJsonExporter.md)
- [IfcStreamingSettings](../classes/openbim_components.IfcStreamingSettings.md)
- [LengthMeasurement](../classes/openbim_components.LengthMeasurement.md)
- [MaterialManager](../classes/openbim_components.MaterialManager.md)
- [Mouse](../classes/openbim_components.Mouse.md)
- [OrthoPerspectiveCamera](../classes/openbim_components.OrthoPerspectiveCamera.md)
- [PostproductionRenderer](../classes/openbim_components.PostproductionRenderer.md)
- [PropertiesStreamingSettings](../classes/openbim_components.PropertiesStreamingSettings.md)
- [ScreenCuller](../classes/openbim_components.ScreenCuller.md)
- [Simple2DScene](../classes/openbim_components.Simple2DScene.md)
- [SimpleCamera](../classes/openbim_components.SimpleCamera.md)
- [SimpleClipper](../classes/openbim_components.SimpleClipper.md)
- [SimpleGrid](../classes/openbim_components.SimpleGrid.md)
- [SimplePlane](../classes/openbim_components.SimplePlane.md)
- [SimpleRaycaster](../classes/openbim_components.SimpleRaycaster.md)
- [SimpleRenderer](../classes/openbim_components.SimpleRenderer.md)
- [SimpleScene](../classes/openbim_components.SimpleScene.md)
- [ToolComponent](../classes/openbim_components.ToolComponent.md)
- [UIElement](../classes/openbim_components.UIElement.md)
- [UIManager](../classes/openbim_components.UIManager.md)

## Interfaces

- [Configurable](../interfaces/openbim_components.Configurable.md)
- [Createable](../interfaces/openbim_components.Createable.md)
- [Disposable](../interfaces/openbim_components.Disposable.md)
- [FragmentIdMap](../interfaces/openbim_components.FragmentIdMap.md)
- [Hideable](../interfaces/openbim_components.Hideable.md)
- [NavigationMode](../interfaces/openbim_components.NavigationMode.md)
- [Progress](../interfaces/openbim_components.Progress.md)
- [Resizeable](../interfaces/openbim_components.Resizeable.md)
- [UI](../interfaces/openbim_components.UI.md)
- [Updateable](../interfaces/openbim_components.Updateable.md)

## Type Aliases

### CameraProjection

Ƭ **CameraProjection**: ``"Perspective"`` \| ``"Orthographic"``

The projection system of the camera.

#### Defined in

[temp/engine_components/src/navigation/OrthoPerspectiveCamera/src/types.ts:7](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/navigation/OrthoPerspectiveCamera/src/types.ts#L7)

___

### NavModeID

Ƭ **NavModeID**: ``"Orbit"`` \| ``"FirstPerson"`` \| ``"Plan"``

The extensible list of supported navigation modes.

#### Defined in

[temp/engine_components/src/navigation/OrthoPerspectiveCamera/src/types.ts:12](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/navigation/OrthoPerspectiveCamera/src/types.ts#L12)

## Variables

### DimensionLabelClassName

• `Const` **DimensionLabelClassName**: ``"text-white text-sm bg-ifcjs-100 rounded-md px-3 py-1"``

The name of the CSS class that styles the dimension label.

#### Defined in

[temp/engine_components/src/measurement/SimpleDimensionLine/types.ts:4](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/measurement/SimpleDimensionLine/types.ts#L4)

___

### DimensionPreviewClassName

• `Const` **DimensionPreviewClassName**: ``"bg-ifcjs-100 rounded-full w-[8px] h-[8px]"``

The name of the CSS class that styles the dimension label.

#### Defined in

[temp/engine_components/src/measurement/SimpleDimensionLine/types.ts:8](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/measurement/SimpleDimensionLine/types.ts#L8)
