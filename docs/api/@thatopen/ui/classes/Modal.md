# Modal

A modal dialog web component for BIM applications. HTML tag: bim-modal

## Fires

confirm - Fired when the user clicks the confirm button.

## Fires

cancel - Fired when the user clicks the cancel button or presses Escape.

## Extends

- `LitElement`

## Properties

### cancelLabel

> **cancelLabel**: `string` = `"Cancel"`

Label for the cancel button.

***

### confirmLabel

> **confirmLabel**: `string` = `"Confirm"`

Label for the confirm button.

***

### icon?

> `optional` **icon**: `string`

Icon displayed next to the title in the header.

***

### label?

> `optional` **label**: `string`

Title displayed in the modal header.

***

### loading

> **loading**: `boolean` = `false`

Disables both buttons and shows a spinner on confirm while an async operation runs.

***

### open

> **open**: `boolean` = `false`

Controls whether the modal is visible.
