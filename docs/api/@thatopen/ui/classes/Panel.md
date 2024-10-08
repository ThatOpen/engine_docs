# Panel

A custom panel web component for BIM applications. HTML tag: bim-panel

## Extends

- `LitElement`

## Implements

- [`HasName`](../interfaces/HasName.md)
- [`HasValue`](../interfaces/HasValue.md)

## Properties

### headerHidden

> **headerHidden**: `boolean` = `false`

Represents a boolean property that controls the visibility of the panel's header.
When `true`, the header (containing the label and icon) is hidden.
When `false`, the header is visible.

#### Default

```ts
false
```

#### Attribute

header-hidden - The attribute that reflects the `headerHidden` property to the HTML element.

#### Reflect

true - Indicates that the property should be reflected to the HTML attribute.

#### Example

```ts
// Setting the `headerHidden` property to `true`
panel.headerHidden = true;

// Setting the `header-hidden` attribute to `true`
panel.setAttribute('header-hidden', 'true');

// Getting the `headerHidden` property value
console.log(panel.headerHidden); // Output: true

// Getting the `header-hidden` attribute value
console.log(panel.getAttribute('header-hidden')); // Output: 'true'
```

***

### icon?

> `optional` **icon**: `string`

Represents the icon to be displayed on the and panel and panel's activation button. This icon is a visual representation
that can be used to give users a hint about the panel's purpose or content. When the `icon` property changes,
the icon on the activation button is updated accordingly. This property is reflected to an attribute, meaning
any changes to the property will also update the corresponding attribute on the HTML element, and vice versa.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-panel icon="settings"></bim-panel>
```

```ts
const panel = document.createElement('bim-panel');
panel.icon = 'settings';
document.body.appendChild(panel);
```

***

### label?

> `optional` **label**: `string`

The label of the panel, which is displayed on the panel's activation button. This property is intended
for a more descriptive text than what `name` might provide. If the `label` property is set, it takes
precedence over the `name` property for the button's display. When the `label` changes, the activation
button's label is updated to reflect this change. This property is also reflected to an attribute, ensuring
consistency between the property value and the HTML attribute.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-panel label="User Settings"></bim-panel>
```

```ts
const panel = document.createElement('bim-panel');
panel.label = 'User Settings';
document.body.appendChild(panel);
```

#### Implementation of

`HasName.label`

***

### name?

> `optional` **name**: `string`

The name of the panel. This property serves as an identifier and can also be displayed on the panel's
activation button if the `label` property is not set. Changing the `name` property will update the label
of the activation button to reflect the new name if no label is explicitly provided. This property is
reflected to an attribute, allowing for synchronization between the property and the HTML attribute.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-panel name="user-settings"></bim-panel>
```

```ts
const panel = document.createElement('bim-panel');
panel.name = 'user-settings';
document.body.appendChild(panel);
```

#### Implementation of

`HasName.name`

***

### valueTransform

> **valueTransform**: `Record`\<`string`, (`value`) => `any`\> = `{}`

A record that maps element names or labels to transformation functions.
This record is used to transform the values from elements before they are returned as part of the `value` property.

#### Example

```ts
// Example usage of ValueTransform
const valueTransform = {
  date: (value: string) => new Date(value), // Transform date value from string to Date object
};

const panel = document.getElementById('your-bim-panel'); // should have some inputs inside
panel.valueTransform = valueTransform;

// Now, when accessing the `value` property of the panel, the values of the specified elements will be transformed accordingly
console.log(panel.value); // Output: { date: Date object }
```

***

### styles

> `static` **styles**: `CSSResult`[]

CSS styles for the component.

#### Overrides

`LitElement.styles`

## Accessors

### hidden

> `set` **hidden**(`value`): `void`

Sets the hidden state of the panel.

#### Fires

hiddenchange - Fired when the hidden state changes.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The new hidden state. If `true`, the panel will be hidden. If `false`, the panel will be shown. |

***

### value

> `get` **value**(): `Record`\<`string`, `any`\>

The `value` getter computes and returns the current state of the panel's form elements as an object. This property is dynamic and reflects the current input values within the panel. When accessed, it traverses the panel's child elements, collecting values from those that have a `name` or `label` attribute, and constructs an object where each key corresponds to the `name` or `label` of the element, and the value is the element's value. This property is particularly useful for forms or interactive panels where the user's input needs to be retrieved programmatically. The value returned is a snapshot of the panel's state at the time of access, and it does not maintain a live link to the input elements.

#### Default

```ts
{}
```

#### Examples

```ts
<bim-panel></bim-panel> <!-- Access via JavaScript to get value -->
```

```ts
const panel = document.createElement('bim-panel');
document.body.appendChild(panel);
console.log(panel.value); // Logs the current value object of the panel
```

> `set` **value**(`data`): `void`

The `value` setter allows programmatically updating the values of the panel's form elements. When a data object is passed to this property, it attempts to match the object's keys with the `name` or `label` attributes of the panel's child elements. If a match is found, the corresponding element's value is updated to the value associated with the key in the data object. This property is useful for initializing the panel with specific data or updating its state based on external inputs. Note that this operation does not affect elements without a matching `name` or `label`, and it only updates the values of elements that are direct children of the panel.

#### Examples

```ts
<bim-panel></bim-panel> <!-- Set value via JavaScript -->
```

```ts
const panel = document.createElement('bim-panel');
document.body.appendChild(panel);
panel.value = { 'input-name': 'John Doe', 'checkbox-name': true };
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Record`\<`string`, `any`\> |

#### Returns

`Record`\<`string`, `any`\>

## Methods

### collapseSections()

> **collapseSections**(): `void`

Collapses all `bim-panel-section` elements within the panel.
This method iterates over each `bim-panel-section` found within the panel's DOM and sets their `collapsed` property to `true`,
effectively hiding their content from view. This can be used to programmatically minimize the space taken up by sections
within the panel, making the panel more compact or to hide details that are not immediately necessary.

#### Returns

`void`

***

### expandSections()

> **expandSections**(): `void`

Expands all `bim-panel-section` elements within the panel.
This method iterates over each `bim-panel-section` found within the panel's DOM and sets their `collapsed` property to `false`,
effectively showing their content. This can be used to programmatically reveal the content of sections within the panel,
making the panel more informative or to display details that are necessary for the user.

#### Returns

`void`
