# ItemsDataConfig

Interface representing the configuration for item data in a Fragments model.

## Properties

### attributes?

> `optional` **attributes**: `string`[]

An array of attribute names to include in the item data.

***

### attributesDefault

> **attributesDefault**: `boolean`

A boolean indicating whether to include default attributes in the item data.

***

### relations?

> `optional` **relations**: `Record`\<`string`, `object`\>

A record of relation names to their configuration.

***

### relationsDefault

> **relationsDefault**: `object`

The default configuration for relations.

#### attributes

> **attributes**: `boolean`

#### relations

> **relations**: `boolean`
