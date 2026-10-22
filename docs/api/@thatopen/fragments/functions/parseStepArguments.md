# parseStepArguments()

> **parseStepArguments**(`line`): `StepArgument`[]

Parse the argument list of a STEP data statement (`#ID=TYPENAME(args);`)
into web-ifc's raw tape shape, suitable for `webIfc.FromRawLineData`.
Throws on malformed arguments.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `line` | `string` |

## Returns

`StepArgument`[]
