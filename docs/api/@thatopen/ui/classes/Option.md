# Option

A custom option web component for BIM applications. HTML tag: bim-option

## Extends

- `LitElement`

## Properties

### checkbox

> **checkbox**: `boolean` = `false`

Determines whether a checkbox is displayed alongside the label. When true, a checkbox is shown.
This property affects the internal layout and display of the component, specifically adding a `bim-checkbox` element when enabled.

#### Default

```ts
false
```

#### Examples

```ts
<bim-option checkbox></bim-option>
```

```ts
const option = document.createElement('bim-option');
option.checkbox = true;
document.body.appendChild(option);
```

***

### checked

> **checked**: `boolean` = `false`

Indicates whether the option is checked. This boolean property can be used to mark the option as selected or not.
When toggled, it visually updates the component to reflect the checked state.

#### Default

```ts
false
```

#### Examples

```ts
<bim-option checked></bim-option>
```

```ts
const option = document.createElement('bim-option');
option.checked = true;
document.body.appendChild(option);
```

***

### icon?

> `optional` **icon**: `string`

Defines the icon to be displayed inside the component. The icon is specified by its name or path.
Changing this property will dynamically update the component to display the specified icon.
This property is utilized by the `bim-label` component nested within the shadow DOM to render the icon.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-option icon="icon-name"></bim-option>
```

```ts
const option = document.createElement('bim-option');
option.icon = 'icon-name';
document.body.appendChild(option);
```

***

### img?

> `optional` **img**: `string`

Represents the image URL for the component. When set, it displays an image inside the component.
Changing this property dynamically updates the component to show the specified image.
This property is managed by the `bim-label` component nested within the shadow DOM of this component.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-option img="path/to/image.png"></bim-option>
```

```ts
const option = document.createElement('bim-option');
option.img = 'path/to/image.png';
document.body.appendChild(option);
```

***

### label?

> `optional` **label**: `string`

Specifies the label text for the component. This text is displayed inside the component.
When the label property changes, the component updates to display the new label text.
This property is also passed down to the `bim-label` component nested within the shadow DOM, affecting its display.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-option label="Option Label"></bim-option>
```

```ts
const option = document.createElement('bim-option');
option.label = 'Option Label';
document.body.appendChild(option);
```

***

### noMark

> **noMark**: `boolean` = `false`

Controls the visibility of the mark or checkbox when the option is checked. If true, the mark or checkbox is not displayed even if the option is checked.
This property allows for a cleaner look in certain UI designs where the checked state is indicated without a visual mark.

#### Default

```ts
false
```

#### Examples

```ts
<bim-option no-mark></bim-option>
```

```ts
const option = document.createElement('bim-option');
option.noMark = true;
document.body.appendChild(option);
```

***

### vertical

> **vertical**: `boolean` = `false`

Sets the orientation of the label and icon/image within the component. When true, they are arranged vertically.
This property influences the internal layout of the component, specifically affecting how the `bim-label` is displayed.

#### Default

```ts
false
```

#### Examples

```ts
<bim-option vertical></bim-option>
```

```ts
const option = document.createElement('bim-option');
option.vertical = true;
document.body.appendChild(option);
```

***

### styles

> `static` **styles**: `CSSResult`

CSS styles for the component.

#### Overrides

`LitElement.styles`

## Accessors

### value

> `get` **value**(): `any`

Represents the dynamic value of the component which can be of different types based on the attribute's value.
This property is designed to accept various types of inputs: boolean values (true/false as strings), numbers, or any other value as a string.
The conversion logic in the `converter` method ensures that the attribute value is correctly interpreted and stored in the appropriate data type.
If you need to use complex data types for the value as arrays or objects, you must do it using the corresponding property in JavaScript
as handling those types of data types using HTML attributes is not recommended.
The `value` property does not reflect, meaning if you change the value using JavaScript, you won't find the same data in the attributes.
However, if you have set the value in the property and then you change the attribute, the `value` will be set at the data from the attribute.
By default, if no value is set, `value` will return the `label` value in case there is one defined.

#### Examples

```ts
<bim-option value="10"></bim-option>
```

```ts
const option = document.createElement('bim-option');
// option.setAttribute('value', 'true');
// option.setAttribute('value', '10');
// option.setAttribute('value', 'some string');
document.body.appendChild(option);
```

```ts
const option = document.createElement('bim-option');
option.label = "At origin"
option.value = {x: 0, y: 0, z: 0} // As this is an object, it must be set in the property and not in the attribute.
document.body.appendChild(option);
```

#### Returns

`any`
