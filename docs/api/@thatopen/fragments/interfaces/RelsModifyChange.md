# RelsModifyChange

Interface representing a change event when relations are modified in a model item.

## Properties

### added

> **added**: `Record`\<`string`, `Set`\<`number`\>\>

Record containing the newly added relation data

***

### deleted

> **deleted**: `Set`\<`string`\>

Set of strings representing the deleted relation keys

***

### modified

> **modified**: `Record`\<`string`, `Set`\<`number`\>\>

Record containing the modified relation data

***

### removed

> **removed**: `Record`\<`string`, `Set`\<`number`\>\>

Record containing the removed relation data

***

### type

> **type**: `"modified"`

Indicates this is a "modified" type change
