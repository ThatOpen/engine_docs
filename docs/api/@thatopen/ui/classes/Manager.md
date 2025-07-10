# Manager

Manager class is responsible for initializing the BIM UI library, defining custom elements, and providing configuration options.

## Methods

### init()

> `static` **init**(`querySelectorElements`, `animateOnLoad`): `void`

Initializes the BIM UI library by defining custom elements.
It ensures that all necessary styles and custom elements are registered for use in BIM UI components.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `querySelectorElements` | `string` | `""` |
| `animateOnLoad` | `boolean` | `true` |

#### Returns

`void`

#### Example

```typescript
import { Manager } from "@thatopen/ui";
Manager.init();
```

***

### ~~registerComponents()~~

> `static` **registerComponents**(): `void`

#### Returns

`void`

#### Deprecated

Use `Manager.init()` instead.
