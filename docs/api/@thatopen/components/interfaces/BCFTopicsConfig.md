# BCFTopicsConfig

Configuration settings for managing BCF topics. This interface defines the properties and their meanings used to control the behavior of exporting and importing BCF topics.

## Properties

### author

> **author**: `string`

The email of the user creating topics using this component.

***

### fallbackVersionOnImport

> **fallbackVersionOnImport**: `null` \| `BCFVersion`

Version to be used when importing if no bcf.version file is present in the incoming data.
When null, the importer will throw an error if the version is missing or is not supported.

***

### ignoreIncompleteTopicsOnImport

> **ignoreIncompleteTopicsOnImport**: `boolean`

If true, do not import a topic with missing information (guid, type, status, title, creationDate or creationAuthor).
If false, use default values for missing data.

***

### includeAllExtensionsOnExport

> **includeAllExtensionsOnExport**: `boolean`

If true, export the extensions (types, status, etc.) based on topics data. This doesn't update the extensions in the config.
If false, only export the extensions defined in each collection of possibilities set in the config.
In all cases, all the values from each collection of extensions defined in the config are going to be exported.

***

### includeSelectionTag

> **includeSelectionTag**: `boolean`

Whether or not to include the AuthoringSoftwareId in the viewpoint components during export.

***

### labels

> **labels**: `Set`\<`string`\>

The set of allowed topic labels. This is exported inside the
[bcf.extensions](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure).

***

### priorities

> **priorities**: `Set`\<`string`\>

The set of allowed topic priorities. This is exported inside the
[bcf.extensions](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure).

***

### stages

> **stages**: `Set`\<`string`\>

The set of allowed topic stages. This is exported inside the
[bcf.extensions](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure).

***

### statuses

> **statuses**: `Set`\<`string`\>

The set of allowed topic statuses. This is exported inside the
[bcf.extensions](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure).

***

### strict

> **strict**: `boolean`

Only allow to use the extensions (types, statuses, etc.) defined in the config when setting the corresponding data in a topic.

***

### types

> **types**: `Set`\<`string`\>

The set of allowed topic types. This is exported inside the
[bcf.extensions](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure).

***

### updateExtensionsOnImport

> **updateExtensionsOnImport**: `boolean`

Updates the types, statuses, users, etc., after importing an external BCF.

***

### users

> **users**: `Set`\<`string`\>

The set of allowed topic users. This is exported inside the
[bcf.extensions](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure).

***

### version

> **version**: `BCFVersion`

The BCF version used during export.
