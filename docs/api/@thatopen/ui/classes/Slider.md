# Slider

A custom slider web component for BIM applications. HTML tag: bim-slider

## Extends

- `LitElement`

## Implements

- [`HasValue`](../interfaces/HasValue.md)
- [`HasName`](../interfaces/HasName.md)

## Properties

### disableSwap

> **disableSwap**: `boolean` = `false`

When true, swapping thumbs is disabled in range mode.

#### Default

```ts
false
```

#### Example

```ts
<bim-slider disable-swap></bim-slider>
```

***

### disabled

> **disabled**: `boolean` = `false`

Disables the slider, preventing all interaction.

#### Default

```ts
false
```

#### Example

```ts
<bim-slider disabled></bim-slider>
```

***

### icon?

> `optional` **icon**: `string`

Optional Iconify icon shown in the label row.

#### Default

```ts
undefined
```

#### Example

```ts
<bim-slider icon="solar:volume-loud-bold" label="Volume"></bim-slider>
```

***

### label?

> `optional` **label**: `string`

Optional label rendered above the track via bim-input.

#### Default

```ts
undefined
```

#### Example

```ts
<bim-slider label="Volume"></bim-slider>
```

#### Implementation of

`HasName.label`

***

### markLabelOrientation

> **markLabelOrientation**: `"vertical"` \| `"horizontal"` \| `"diagonal"` = `"horizontal"`

Controls the orientation of mark labels below the track.
Useful when many marks have long labels that would overlap.
- `"horizontal"` — default, labels rendered flat
- `"vertical"` — labels rotated -90° (bottom-up)
- `"diagonal"` — labels rotated -45°

#### Default

```ts
"horizontal"
```

#### Example

```ts
<bim-slider mark-label-orientation="diagonal"></bim-slider>
```

***

### marks

> **marks**: `SliderMark`[] = `[]`

An array of mark objects (`{ value, label? }`) that define snap points.
When step is null, the thumb snaps only to these marks.

#### Default

```ts
[]
```

#### Example

```ts
slider.marks = [{ value: 0, label: 'Jan' }, { value: 6, label: 'Jul' }];
```

***

### max

> **max**: `number` = `100`

The maximum value of the slider.

#### Default

```ts
100
```

#### Example

```ts
<bim-slider max="100"></bim-slider>
```

***

### min

> **min**: `number` = `0`

The minimum value of the slider.

#### Default

```ts
0
```

#### Example

```ts
<bim-slider min="0"></bim-slider>
```

***

### name?

> `optional` **name**: `string`

The name of the slider. Useful for form integration.

#### Default

```ts
undefined
```

#### Example

```ts
<bim-slider name="volume"></bim-slider>
```

#### Implementation of

`HasName.name`

***

### onChangeCommitted

> `readonly` **onChangeCommitted**: `Event`

Fired once when the thumb is released (mouseup / touchend).

***

### onValueChange

> `readonly` **onValueChange**: `Event`

Fired continuously while dragging.

#### Implementation of

`HasValue.onValueChange`

***

### scale()?

> `optional` **scale**: (`value`) => `number`

A scale function to transform the internal numeric value for display
purposes only (does not affect snapping or stored value).

#### Default

```ts
undefined
```

#### Example

```ts
slider.scale = (x) => Math.pow(2, x);
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

***

### shiftStep

> **shiftStep**: `number` = `10`

The larger step size used when the user holds Shift + Arrow key.

#### Default

```ts
10
```

#### Example

```ts
<bim-slider shift-step="10"></bim-slider>
```

***

### showMarks

> **showMarks**: `boolean` = `false`

Whether to show mark dots on the track even when step is not null.

#### Default

```ts
false
```

#### Example

```ts
<bim-slider show-marks></bim-slider>
```

***

### step

> **step**: `null` \| `number` = `1`

The granularity of each step. Set to null to snap only to marks.

#### Default

```ts
1
```

#### Example

```ts
<bim-slider step="10"></bim-slider>
```

***

### valueLabelDisplay

> **valueLabelDisplay**: `"auto"` \| `"on"` \| `"off"` = `"auto"`

Controls when the value label (tooltip) is displayed.
- `"auto"` — shown on hover/drag
- `"on"`   — always visible
- `"off"`  — never shown

#### Default

```ts
"auto"
```

#### Example

```ts
<bim-slider value-label-display="on"></bim-slider>
```

***

### valueLabelFormat?

> `optional` **valueLabelFormat**: `string` \| (`value`) => `string`

A format function or fixed string to transform the displayed value in the
value label. Receives the raw numeric value and returns a string.

#### Default

```ts
undefined
```

#### Example

```ts
slider.valueLabelFormat = (v) => `${v}°C`;
```

***

### vertical

> **vertical**: `boolean` = `false`

Renders the slider vertically instead of horizontally.

#### Default

```ts
false
```

#### Example

```ts
<bim-slider vertical></bim-slider>
```

## Accessors

### value

> `set` **value**(`v`): `void`

The current value. Pass a tuple [number, number] to enable range mode
(two thumbs). Changing this property updates the rendered thumb position(s).

#### Default

```ts
0
```

#### Examples

```ts
<bim-slider value="50"></bim-slider>
```

```ts
slider.value = [20, 80];   // range mode
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `number` \| [`number`, `number`] |
