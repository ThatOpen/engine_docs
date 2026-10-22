# SortableList

A sortable list component that lets users reorder items and toggle their
active/available status. HTML tag: bim-sortable-list

Active items can be dragged to reorder. A checkbox on each active item moves
it to the Available section. A checkbox on each available item moves it back
to Active. When `sortOnly` is true the Available section is hidden and
checkboxes are removed — the list acts as a pure drag-to-reorder control.

## Fires

change - Fired when the active set or order changes.
  `e.detail` is the ordered array of active item IDs (`string[]`).

## Extends

- `LitElement`

## Properties

### sortOnly

> **sortOnly**: `boolean` = `false`

When true, hides the Available section and checkboxes. The list acts as a
pure drag-to-reorder control; all items remain active. Set via JavaScript
only — not reflected to an attribute.

#### Default

```ts
false
```

## Accessors

### items

> `set` **items**(`value`): `void`

The full list of items. All items start as active unless deactivated by
the user. When the list is updated, unknown IDs are dropped and new ones
are appended to the active set.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `SortableListItem`[] |
