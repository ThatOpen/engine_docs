# Chart

A flexible and customizable chart component that acts as a wrapper around Chart.js.

## Extends

- `LitElement`

## Properties

### borderColor

> **borderColor**: `string` = `"#000000"`

The border color of the chart elements.

***

### colorfulBars?

> `optional` **colorfulBars**: `boolean` = `false`

Specifies whether each bar in a bar chart should have a different color.

***

### colors?

> `optional` **colors**: `string`[]

The colors used for the chart datasets. If not enough colors are provided, new colors will be generated automatically.

***

### dataLabelsColor

> **dataLabelsColor**: `string` = `"#ffffffff"`

The color of the data labels shown on the chart.

***

### displayLabels

> **displayLabels**: `boolean` = `true`

Specifies whether to display labels on the chart data points.

***

### hoverBorderColor?

> `optional` **hoverBorderColor**: `string` = `"#ffffffff"`

The border color of chart elements when hovered.

***

### indexAxis?

> `optional` **indexAxis**: `"x"` \| `"y"` = `"x"`

The axis to use for indexing the data ('x' or 'y').

***

### inputData

> **inputData**: [`ChartInputData`](../type-aliases/ChartInputData.md)

Current input data in library-friendly shape. Implementations should keep this in sync.

***

### label?

> `optional` **label**: `string`

Human readable title shown in the chart

***

### lineFill

> **lineFill**: [`LineFillType`](../type-aliases/LineFillType.md) = `false`

Defines how to fill the area under the line in a line chart.

***

### linePointStyle

> **linePointStyle**: [`LinePointStyleType`](../type-aliases/LinePointStyleType.md) = `"circle"`

The style of the points in a line chart (e.g., 'circle', 'rect').

***

### loadFunction?

> `optional` **loadFunction**: [`ChartLoadFunction`](../type-aliases/ChartLoadFunction.md)

The function to be executed when loading async data using Chart.loadData

***

### loading

> **loading**: `boolean` = `false`

When true, a loading skeleton is shown.

***

### pointRadius

> **pointRadius**: `number` = `10`

The radius of the points in a line chart.

***

### smoothLine

> **smoothLine**: `boolean` = `false`

Specifies whether to draw smooth lines (tension > 0) in a line chart.

***

### transparentBackground

> **transparentBackground**: `boolean` = `true`

Specifies whether the background of the chart elements should be transparent.

***

### type

> **type**: `null` \| [`Types`](../type-aliases/Types.md) = `null`

The type of chart to be displayed (e.g., 'bar', 'line', 'pie').

***

### xBeginAtZero?

> `optional` **xBeginAtZero**: `boolean` = `true`

Specifies whether the x-axis should start at zero.

***

### xStacked?

> `optional` **xStacked**: `boolean`

Specifies whether the bars on the x-axis should be stacked.

***

### yBeginAtZero?

> `optional` **yBeginAtZero**: `boolean` = `true`

Specifies whether the y-axis should start at zero.

***

### yStacked?

> `optional` **yStacked**: `boolean`

Specifies whether the bars on the y-axis should be stacked.

***

### styles

> `static` **styles**: `CSSResult`

CSS styles for the component.

#### Overrides

`LitElement.styles`

## Accessors

### data

> `get` **data**(): `ChartData` \<[`Types`](../type-aliases/Types.md), (`null` \| `number` \| [`number`, `number`] \| `Point` \| `BubbleDataPoint`)[], `unknown`\>

The Chart.js data object.

#### Returns

`ChartData` \<[`Types`](../type-aliases/Types.md), (`null` \| `number` \| [`number`, `number`] \| `Point` \| `BubbleDataPoint`)[], `unknown`\>

## Methods

### filterByLabel()

> **filterByLabel**(`label`): `void`

Filter chart by label.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`void`

***

### filterByValue()

> **filterByValue**(`filterFunction`): `void`

Remove or hide values that don't match the predicate.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filterFunction` | (`entry`) => `boolean` |

#### Returns

`void`

***

### highlight()

> **highlight**(`filterFunction`): `void`

Highlight chart elements that match the predicate.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filterFunction` | (`entry`) => `boolean` |

#### Returns

`void`

***

### loadData()

> **loadData**(`force`): `Promise`\<`boolean`\>

Asynchronously loads chart data using the provided loadFunction.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<`boolean`\>

***

### reset()

> **reset**(): `void`

Reset chart to original input data.

#### Returns

`void`

***

### transparentize()

> **transparentize**(`color`, `opacity`?): `string`

A utility function to make a color transparent.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `color` | `string` |
| `opacity`? | `number` |

#### Returns

`string`

***

### updateFromTable()

> **updateFromTable**(`table`): `void`

Convert the provided table into the internal inputData and update the chart.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `table` | [`Table`](Table.md) \<[`TableRowData`](../type-aliases/TableRowData.md)\> |

#### Returns

`void`
