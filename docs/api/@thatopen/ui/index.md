# @thatopen/ui

## Classes

| Class | Description |
| :------ | :------ |
| [Button](classes/Button.md) | A custom button web component for BIM applications. HTML tag: bim-button |
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
| [Tab](classes/Tab.md) | A custom tab web component for BIM applications. HTML tag: bim-tab |
| [Table](classes/Table.md) | A custom table web component for BIM applications. HTML tag: bim-table |
| [Tabs](classes/Tabs.md) | A custom tabs web component for BIM applications. HTML tag: bim-tabs |
| [TextInput](classes/TextInput.md) | A custom text input web component for BIM applications. HTML tag: bim-text-input |
| [Toolbar](classes/Toolbar.md) | A custom toolbar web component for BIM applications. HTML tag: bim-toolbar |
| [ToolbarGroup](classes/ToolbarGroup.md) | A custom toolbar group web component for BIM applications. HTML tag: bim-toolbar-group |
| [ToolbarSection](classes/ToolbarSection.md) | A custom toolbar section web component for BIM applications. HTML tag: bim-toolbar-section |
| [Viewport](classes/Viewport.md) | A custom viewport web component for BIM applications. HTML tag: bim-viewport |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [CellCreatedEventDetail](interfaces/CellCreatedEventDetail.md) | Represents the detail of a cell created event. |
| [ColumnData](interfaces/ColumnData.md) | Represents a column in the table. |
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
| [ConditionFunctions](type-aliases/ConditionFunctions.md) | Represents a map of condition functions, where the key is a QueryCondition and the value is a function that evaluates the condition. |
| [GridLayoutsDefinition](type-aliases/GridLayoutsDefinition.md) | Represents a collection of predefined grid layouts for the Grid component. Each layout is defined by a unique name, a grid template string, and a map of area names to HTMLElement instances. The grid template string defines the structure of the grid, and the area names correspond to the grid-area property of the HTMLElement instances. The HTMLElement instances are used to populate the grid with content. |
| [Query](type-aliases/Query.md) | Represents a query, which can be a single query or a group of queries. |
| [QueryCondition](type-aliases/QueryCondition.md) | Represents a condition used in query building. |
| [QueryOperators](type-aliases/QueryOperators.md) | Represents an operator used in query building. |
| [StatefullComponent](type-aliases/StatefullComponent.md) | Represents a function that returns a TemplateResult for a stateful component. |
| [StatelessComponent](type-aliases/StatelessComponent.md) | Represents a function that returns a TemplateResult for a stateless component. |
| [TableDataTransform](type-aliases/TableDataTransform.md) | Represents a transformation function for table data. |
| [TableRowData](type-aliases/TableRowData.md) | Represents a row of data for a table. |
| [TableRowTemplate](type-aliases/TableRowTemplate.md) | Represents a template for rendering a row of data in a table. |

## Functions

| Function | Description |
| :------ | :------ |
| [getElementValue](functions/getElementValue.md) | Extracts and returns the value of an HTML element's attributes. |
