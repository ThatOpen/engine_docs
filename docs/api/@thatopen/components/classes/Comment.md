# Comment

Represents a comment in a BCF Topic.

## Constructors

### new Comment()

> **new Comment**(`components`, `text`): [`Comment`](Comment.md)

Constructs a new BCF Topic Comment instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `components` | [`Components`](Components.md) | The Components instance. |
| `text` | `string` | The initial comment text. |

#### Returns

[`Comment`](Comment.md)

## Accessors

### comment

> `get` **comment**(): `string`

Gets the comment text.

> `set` **comment**(`value`): `void`

Sets the comment text and updates the modified date and author.
The author will be the one defined in BCFTopics.config.author

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The new comment text. |

#### Returns

`string`

The comment text.
