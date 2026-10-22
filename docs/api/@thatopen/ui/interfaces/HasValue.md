# HasValue\<T\>

Represents an object that has a value and an event for value changes.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `unknown` |

## Properties

### ~~onValueChange~~

> **onValueChange**: `Event`

#### Deprecated

Storing a reused Event instance is an anti-pattern. Listen for
the "input" event on the element instead: `el.addEventListener("input", fn)`.
