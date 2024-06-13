# PostproductionRenderer

A class that extends RendererWith2D and adds post-processing capabilities. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/PostproductionRenderer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/PostproductionRenderer).

## Extends

- [`RendererWith2D`](RendererWith2D.md)

## Properties

### three2D

> **three2D**: `CSS2DRenderer`

This renderer is used to render 2D objects (CSS2DObjects) in a 3D scene.

#### Inherited from

[`RendererWith2D`](RendererWith2D.md) . [`three2D`](RendererWith2D.md#three2d)

## Accessors

### postproduction

> `get` **postproduction**(): [`Postproduction`](Postproduction.md)

Getter for the postproduction instance.
Throws an error if the postproduction instance is not yet initialized.

#### Returns

[`Postproduction`](Postproduction.md)

The initialized Postproduction instance.

## Methods

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose.

#### Returns

`void`

#### Overrides

`RendererWith2D.dispose`

***

### update()

> **update**(): `void`

Updateable.update

#### Returns

`void`

#### Overrides

`RendererWith2D.update`
