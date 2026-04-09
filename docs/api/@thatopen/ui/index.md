# @thatopen/ui

## Classes

| Class | Description |
| :------ | :------ |
| [Button](classes/Button.md) | A custom button web component for BIM applications. HTML tag: bim-button |
| [Chart](classes/Chart.md) | A flexible and customizable chart component that acts as a wrapper around Chart.js. |
| [ChartLegend](classes/ChartLegend.md) | A component that displays a legend for charts, allowing filtering by clicking on them. |
| [Checkbox](classes/Checkbox.md) | A custom checkbox web component for BIM applications. HTML tag: bim-checkbox |
| [ColorInput](classes/ColorInput.md) | A custom color input web component for BIM applications. HTML tag: bim-color-input |
| [Component](classes/Component.md) | A base class for UI components that utilizes the LitElement library. Provides functionality for rendering stateless and stateful components, as well as lazy loading of elements using Intersection Observer. |
| [Dropdown](classes/Dropdown.md) | A custom dropdown web component for BIM applications. |
| [Grid](classes/Grid.md) | A custom grid component for web applications. |
| [Icon](classes/Icon.md) | A custom icon web component for BIM applications. HTML tag: bim-icon |
| [Input](classes/Input.md) | A custom input web component for BIM applications. HTML tag: bim-input |
| [Label](classes/Label.md) | A custom label web component for BIM applications. HTML tag: bim-label |
| [Manager](classes/Manager.md) | Manager class is responsible for initializing the BIM UI library, defining custom elements, and providing configuration options. |
| [NumberInput](classes/NumberInput.md) | A custom number input web component for BIM applications. HTML tag: bim-number-input |
| [Option](classes/Option.md) | A custom option web component for BIM applications. HTML tag: bim-option |
| [Panel](classes/Panel.md) | A custom panel web component for BIM applications. HTML tag: bim-panel |
| [PanelSection](classes/PanelSection.md) | A custom panel section web component for BIM applications. HTML tag: bim-panel-section |
| [Selector](classes/Selector.md) | A custom selector web component for BIM applications. HTML tag: bim-selector |
| [Slider](classes/Slider.md) | A custom slider web component for BIM applications. HTML tag: bim-slider |
| [Tab](classes/Tab.md) | A custom tab web component for BIM applications. HTML tag: bim-tab |
| [Table](classes/Table.md) | A custom table web component for BIM applications. HTML tag: bim-table |
| [Tabs](classes/Tabs.md) | A custom tabs web component for BIM applications. HTML tag: bim-tabs |
| [TextInput](classes/TextInput.md) | A custom text input web component for BIM applications. HTML tag: bim-text-input |
| [Toolbar](classes/Toolbar.md) | A custom toolbar web component for BIM applications. HTML tag: bim-toolbar |
| [ToolbarGroup](classes/ToolbarGroup.md) | A custom toolbar group web component for BIM applications. HTML tag: bim-toolbar-group |
| [ToolbarSection](classes/ToolbarSection.md) | A custom toolbar section web component for BIM applications. HTML tag: bim-toolbar-section |
| [Tooltip](classes/Tooltip.md) | A custom tooltip web component for BIM applications. HTML tag: bim-tooltip |
| [Viewport](classes/Viewport.md) | A custom viewport web component for BIM applications. HTML tag: bim-viewport |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [CellCreatedEventDetail](interfaces/CellCreatedEventDetail.md) | Represents the detail of a cell created event. |
| [ColumnData](interfaces/ColumnData.md) | Represents a column in the table. |
| [ComponentUtils](interfaces/ComponentUtils.md) | Utility interface providing methods for component state and element management. |
| [DataClickDetail](interfaces/DataClickDetail.md) | The detail object for the 'sectionclick' event, containing information about the clicked chart element. |
| [EntryQuery](interfaces/EntryQuery.md) | Represents a single query condition. |
| [HasName](interfaces/HasName.md) | Represents an object that has a name and an optional label. |
| [HasValue](interfaces/HasValue.md) | Represents an object that has a value and an event for value changes. |
| [ManagerConfig](interfaces/ManagerConfig.md) | Configuration interface for the Manager class. Defines the properties and their types that can be configured for the Manager. |
| [QueryGroup](interfaces/QueryGroup.md) | Represents a group of queries with an operator. |
| [RowCreatedEventDetail](interfaces/RowCreatedEventDetail.md) | Represents the detail of a row created event. |
| [RowDeselectedEventDetail](interfaces/RowDeselectedEventDetail.md) | Represents the detail of a row deselected event. |
| [RowSelectedEventDetail](interfaces/RowSelectedEventDetail.md) | Represents the detail of a row selected event. |
| [TableGroupData](interfaces/TableGroupData.md) | Represents a group of table rows with optional children. |
| [TableGroupTemplate](interfaces/TableGroupTemplate.md) | Represents a template for rendering a group of table rows in a table. |

## Type Aliases

| Type alias | Description |
| :------ | :------ |
| [ChartDataSet](type-aliases/ChartDataSet.md) | The structure for a single dataset to be used in Chart.js. |
| [ChartInputData](type-aliases/ChartInputData.md) | The required data structure for populating a chart. |
| [ChartInputValues](type-aliases/ChartInputValues.md) | Union type for all chart data points. The specific type depends on the chart type. |
| [ChartLoadFunction](type-aliases/ChartLoadFunction.md) | The function signature for asynchronously loading chart data. |
| [ConditionFunctions](type-aliases/ConditionFunctions.md) | Represents a map of condition functions, where the key is a QueryCondition and the value is a function that evaluates the condition. |
| [GeneralInputData](type-aliases/GeneralInputData.md) | The structure for individual data points within general charts (bar, line, pie, etc). Use a single numeric value. |
| [GridLayoutsDefinition](type-aliases/GridLayoutsDefinition.md) | Represents a collection of predefined grid layouts for the Grid component. Each layout is defined by a unique name, a grid template string, and a map of area names to HTMLElement instances. The grid template string defines the structure of the grid, and the area names correspond to the grid-area property of the HTMLElement instances. The HTMLElement instances are used to populate the grid with content. |
| [LabelData](type-aliases/LabelData.md) | The data associated with a chart label. |
| [LabelEventData](type-aliases/LabelEventData.md) | The event data dispatched when a label is clicked. |
| [LineFillType](type-aliases/LineFillType.md) | The fill options for the area under a line in a line chart. |
| [LinePointStyleType](type-aliases/LinePointStyleType.md) | The possible styles for points in a line chart. |
| [Query](type-aliases/Query.md) | Represents a query, which can be a single query or a group of queries. |
| [QueryCondition](type-aliases/QueryCondition.md) | Represents a condition used in query building. |
| [QueryOperators](type-aliases/QueryOperators.md) | Represents an operator used in query building. |
| [ScatterInputData](type-aliases/ScatterInputData.md) | The structure for individual data points within a scatter or bubble chart. Use x and y coordinates. |
| [StatefullComponent](type-aliases/StatefullComponent.md) | Represents a function that returns a TemplateResult for a stateful component. |
| [StatelessComponent](type-aliases/StatelessComponent.md) | Represents a function that returns a TemplateResult for a stateless component. |
| [TableDataTransform](type-aliases/TableDataTransform.md) | Represents a transformation function for table data. |
| [TableGroupingTransform](type-aliases/TableGroupingTransform.md) | Represents a transformation function for grouping table data. Used to transform values before they are used for grouping logic. ALWAYS returns an array of strings representing the hierarchical path. Examples: Simple grouping: ["Architecture"], Two-level: ["Shared Information", "S1 - Coordination"], Multi-level: ["Shared Information", "S1 - Coordination", "S1.1 - Initial Coordination"]. The array length determines the hierarchy depth, independent of groupBy columns. |
| [TableRowData](type-aliases/TableRowData.md) | Represents a row of data for a table. |
| [TableRowTemplate](type-aliases/TableRowTemplate.md) | Represents a template for rendering a row of data in a table. |
| [Types](type-aliases/Types.md) | The available chart types. |

## Functions

| Function | Description |
| :------ | :------ |
| [calculateDividerStyles](functions/calculateDividerStyles.md) | Calculates the CSS styles needed for a divider element. Handles positioning, transforms, and sizing based on divider type and grid gaps. |
| [calculateHorizontalResize](functions/calculateHorizontalResize.md) | Calculates new sizes for a horizontal resize operation. |
| [calculateVerticalResize](functions/calculateVerticalResize.md) | Calculates new sizes for a vertical resize operation. |
| [deduplicateDividerAreas](functions/deduplicateDividerAreas.md) | Removes duplicate area names from divider area arrays. Each adjacent area should only appear once in the divider's area list. |
| [detectDividers](functions/detectDividers.md) | Detects all dividers (vertical and horizontal) in a grid matrix. A divider exists where two adjacent areas have different names. |
| [extractUniqueAreas](functions/extractUniqueAreas.md) | Extracts unique area names from a grid template string. |
| [getElementValue](functions/getElementValue.md) | Extracts and returns the value of an HTML element's attributes. |
| [parseGridTemplate](functions/parseGridTemplate.md) | Parses a grid template string and returns a 2D matrix representation. |
| [validateHorizontalResize](functions/validateHorizontalResize.md) | Validates if a horizontal resize operation is allowed. Prevents resizing if it would make an area smaller than the minimum size. Only blocks movement in the direction that would shrink an area below the minimum. |
| [validateVerticalResize](functions/validateVerticalResize.md) | Validates if a vertical resize operation is allowed. Prevents resizing if it would make an area smaller than the minimum size. Only blocks movement in the direction that would shrink an area below the minimum. |
