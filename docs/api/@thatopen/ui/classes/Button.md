# Button

A custom button web component for BIM applications. HTML tag: bim-button

## Fires

click - Fired when the button is clicked (not fired when disabled or loading).

## Fires

hidden - Fired when a nested context menu closes.

## Extends

- `LitElement`

## Properties

### contextMenuTemplate()?

> `optional` **contextMenuTemplate**: () => `TemplateResult` \| `Promise`\<`TemplateResult`\>

Optional function that returns a TemplateResult for a dynamically rendered
context menu. More efficient than a declarative `<bim-context-menu>` child
for high-frequency scenarios (e.g. table rows) because the template is only
rendered when the menu is actually opened.

The function is called once per open and may return the template directly or
a promise of it (e.g. to build the menu from state fetched when it opens). A
synchronous template behaves exactly as before. With a promise the menu opens
immediately showing a small loading indicator, and its content replaces the
indicator when the promise resolves (the menu is repositioned). If it resolves
to an empty menu, or rejects (the error is logged with the `[bim-button]`
prefix), the menu closes. If the menu is closed before the promise settles, or
the button is disconnected, the late result is discarded; if the menu is opened
again meanwhile only the most recent call fills it.

#### Example

```typescript
button.contextMenuTemplate = async () => {
  const actions = await fetchActions();
  return html`<bim-context-menu>${actions.map(a => html`<bim-button label=${a}></bim-button>`)}</bim-context-menu>`;
};
```

#### Returns

`TemplateResult` \| `Promise`\<`TemplateResult`\>

## Methods

### closeMenu()

> **closeMenu**(): `void`

Closes this button's context menu if it is open (a no-op otherwise). It goes
through the same path as every other close: a pending async `contextMenuTemplate`
result is discarded, tooltips are restored and `menuclose` / `hidden` fire.

Closing a menu also closes the sub-menus opened from its items (each one fires
its own `menuclose` / `hidden`), so calling it on the root button closes the
whole chain, even when the clicked item sits in a nested sub-menu.

Items do not close the menu by themselves; call this from the item's click
handler. The handler can get the button either by closure (when the button and
its `contextMenuTemplate` are created together), or from the item itself: menu
items are moved into the button's own `<dialog>`, which lives in its shadow root, so
`(item.getRootNode() as ShadowRoot).host` is the button owning that menu (for an
item of a nested sub-menu, the sub-menu's button; use the root button's reference
to close the whole chain).

#### Returns

`void`

#### Example

```typescript
button.contextMenuTemplate = () => html`
  <bim-context-menu>
    <bim-button label="Rename" @click=${() => { rename(); button.closeMenu(); }}></bim-button>
  </bim-context-menu>
`;
```

***

### closeNestedContexts()

> **closeNestedContexts**(): `void`

Closes sibling context menus in the same data-context-group before
opening this button's menu — enables correct nested-menu behaviour.

#### Returns

`void`
