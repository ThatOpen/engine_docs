# TopicFormUI

Represents the UI elements and configuration for a topic form in the OBC system.

 TopicFormUI

## Properties

### components

> **components**: `Components`

The main components entry point of your app.

***

### onCancel()?

> `optional` **onCancel**: () => `void` \| `Promise`\<`void`\>

Callback function triggered when the form is canceled.

#### Returns

`void` \| `Promise`\<`void`\>

***

### onSubmit()?

> `optional` **onSubmit**: (`topic`) => `void` \| `Promise`\<`void`\>

Callback function triggered when the form is submitted.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `topic` | `Topic` | The topic created/updated from the form. |

#### Returns

`void` \| `Promise`\<`void`\>

***

### styles?

> `optional` **styles**: `Partial`\<`DataStyles`\>

Custom styles for the form components.

***

### topic?

> `optional` **topic**: `Topic`

The topic data to be used in the form. This can be undefined if no topic is being edited.

***

### value?

> `optional` **value**: `Partial`\<`FormValue`\>

The initial values for the form fields. Can be a partial raw topic object.
