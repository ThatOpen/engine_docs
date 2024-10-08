# IfcPropertyRule

A rule for the [IfcFinder](../classes/IfcFinder.md) to search items based on the properties defined in their property sets.

## Properties

### name

> **name**: `RegExp`

The name of the property. It's a regular expression, so you can make complex queries and use ".*" to match all names.

***

### type

> **type**: `"property"`

The type of this rule. All rules have a fixed type.

***

### value

> **value**: `RegExp`

The value of the property. It's a regular expression, so you can make complex queries and use ".*" to match all values.
