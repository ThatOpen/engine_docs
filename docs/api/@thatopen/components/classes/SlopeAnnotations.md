# SlopeAnnotations

Global drawing system that manages slope annotations across all [TechnicalDrawing](TechnicalDrawing.md) instances.

## Extends

- [`AnnotationSystem`](AnnotationSystem.md)\<`SlopeAnnotationSystem`\>

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Constructors

### new SlopeAnnotations()

> **new SlopeAnnotations**(`components`): [`SlopeAnnotations`](SlopeAnnotations.md)

Because slope data comes from the 3D model, there is no state machine.
Call add directly with the computed slope values:
```ts
slopes.add(drawing, { position, direction, slope, style: "default" });
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `components` | [`Components`](Components.md) |

#### Returns

[`SlopeAnnotations`](SlopeAnnotations.md)

#### Overrides

`AnnotationSystem<SlopeAnnotationSystem>.constructor`
