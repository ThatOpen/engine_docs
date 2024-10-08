# IfcOperatorRule

A rule for the [IfcFinder](../classes/IfcFinder.md) to search items based on the value of a numeric property defined in their property sets.

## Properties

### name

> **name**: `RegExp`

The name of the property. It's a regular expression, so you can make complex queries and use ".*" to match all names.

***

### operator

> **operator**: `"<"` \| `">"` \| `"="` \| `"<="` \| `">="`

The operator to apply to the numeric value.

***

### type

> **type**: `"operator"`

The type of this rule. All rules have a fixed type.

***

### value

> **value**: `number`

The value of the property.
