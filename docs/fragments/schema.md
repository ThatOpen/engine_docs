---
sidebar_position: 1
---

# 🧩 The schema

## 🚸 Before you start

Before reading this page, keep in mind that **we've built a whole JavaScript / TypeScript tech stack on top of Fragments** to make the heavy lifting for you. If you just want to build BIM software with our libraries, **you can happily treat Fragments as a black box** without worrying about its internal structure. 📦

If you want to **build your custom importers / exporters**, want to build Fragments **custom tools in another programming languages** or are just curious about it, go ahead! 🫡


## 👾 Introduction

Fragments is a format built on top of [Flatbuffers](https://flatbuffers.dev/), an open source libraries to easily create **binary formats that are compatible with any programming language**. 😎

The way flatbuffers work is simple:

1. ✍🏻 We **create a schema**. It's just a text file containing description of the data structures inside your file. The syntax is very simple and similar to C. The extension is .fbs (stands for flatbuffers schema). You can out the fragments schema below.

2. 🔥 You **use that schema** file and the flatbuffers library to automatically create an importer / exporter of that file in any programming language. This is covered in the [flatbuffers docs](https://flatbuffers.dev/). We already did it for TypeScript/JavaScript and included it in our libraries, so you don't have to worry about that one! 😉

:::danger What about changes?

**Flatbuffers is extensible**, so even if we make changes (evolutions) to the schema in the future, it will be backwards compatible! 🐛▶️🦋

:::

**This is the schema file** we created for fragments. Don't worry, we will cover it piece by piece in this page!


<iframe src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FThatOpen%2Fengine_fragment%2Fblob%2Fmain%2Fpackages%2Ffragments%2Fflatbuffers%2Findex.fbs&style=github-dark-dimmed&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"></iframe>


## 🏠 Check it out

Before going in detail into each piece of the Fragments schema, **let's check out a minimal Fragments file** containing just a simple wall. In this example, you'll be able to see its data following the schema above, which might be useful for understanding how the schema works. **You can even load your own IFC STEP files** too to see their Fragments schema! 🚀

:::tip Beware of performance in this demo

Keep in this example we are **serializing ALL the data of the file to a JSON** just to display it in the screen, which is **very, very inneficient**, beating Fragments performance benefits. Don't expect this demo to have the same performance as a production Fragmetns app. Avoid loading huge IFCs here if you don't want to see your browser freeze. 🙏🏻

:::

You might want to **revisit this example as a reference** when trying to generate your own fragment files from IFC STEP or other data sources to have a reference of how it should look like: 👇🏻

<div style={{position: "relative"}}>
<iframe src="https://thatopen.github.io/engine_fragment/examples/IfcImporter/HelloWorldSchema/"></iframe>

<button class="full-screen-btn" onClick={() => window.open("https://thatopen.github.io/engine_fragment/examples/IfcImporter/HelloWorldSchema/")}> Go Full Screen</button>
</div>

## ✍🏻 General notes

There are **some decisions** we've taken when definining the Fragments data schema whose motivation might not be obvious at first sight. We will cover them here.

### 🍱 Data structures

In some parts of the schema you might find data structured in a specific way. They are not arbitrary: it's the way to be able to **open gigabytes of BIM data in seconds**. Keep in mind that we designed Fragments for performance, so every indirection decision that you see **follows that purpose**. 🚀


### 📃📃📃 String arrays

You will see that in various places we are using **string arrays** (`categories`, `attributes`, `relations`, etc). This might seem inefficient memory-wise at first sight, as when we have an array with multiple strings, each string occupies size, regardless of whether it's duplicated or not. 🤔

However, **flatbuffers allow to define unique strings, automatically deduplicating its size**. So this array is as efficient as an array with unique strings and an index to relate them. 🍱

## 🧩 Model

The `Model` is **the main object and the entry point** of all Fragment files. Each Fragments file has just one model, and it contains all the information of the file.  It has the following structure (we'll cover it step by step): 👇🏻

```c
table Model {
    metadata: string; // JSON string for generic data about the file

    guids: [string] (required); // An array of Global Unique Identifiers of items. Not all items may have a guid.
    guids_items: [uint] (required); // An array that works as an indexation matching localIds indices with guids.

    max_local_id: uint; // The smallest localID available when serializing. Used to know the next localID when adding a new item.
    local_ids: [uint] (required); // File specific identification for each item.

    categories: [string] (required); // An array of all item categories found in the file, stored as strings.

    meshes: Meshes (required); // The object containing all explicit geometries of the model.

    unique_attributes: [string]; // An array of unique item attributes in this model.
    attributes: [Attribute]; // An array of items data stored as an array of arrays.

    relation_names: [string]; // An array of unique relation names in this model.
    relations: [Relation]; // An array of relations between different items stored as arrays of arrays.
    relations_items: [int]; // An array that works as an indexation matching localIds indices with relations.

    guid: string (required); // An global ID that identifies this model uniquely.

    spatial_structure: SpatialStructure; // A tree representing the spatial relation between elements.

    alignments: [Alignment]; // A set of civil alignments for this model

    geometries: Geometries; // The object containing all implicit geometries of the model.
}
```


### 📋 Metadata

**JSON string** for generic data about the file itself. For example: `{"schema":"IFC4"}"`. 🔖🔖🔖

### 🦋 Guids

An array of **Global Unique Identifiers** of items. Not all items may have a guid. They should be consistent across exports from authoring applications. 🪨

### 🦋➡️♟️ Guids Items

An array that works as an indexation matching **localIds** indices with **guids**. For instance, a Fragments file with the following data: 👇🏻

```json
{
  "localIds": [34, 35, 36],
  "guids": ["guid-abc", "guid-xyz"],
  "guidsItems": [2, 1],
  ...
}
```

🧐 Means that there are 3 items:
- The **first one** has localId `34` and no guid.
- The **second one** has localId `35` and guid `guid-xyz`.
- The **third one** has localId `36` and guid `guid-abc`.

### 🥇🐛 Max Local Id

The **biggest localID found when serializing plus one**. Used to know the **next local id available** when adding a new item. For example, if when loading an IFC STEP file the item with the highest express id (local id) was `34928`, then the max local id will be `34929`. 🖌️

### 🐛 Local Ids

File specific identification for each item. They might vary with each export from authoring applications. **All items must have a local id**. If you are exporting Fragments from a data source that doesn't have local ids, you can just use an incremental `uint` starting at 0. 🔢

:::info global ids vs local ids

You may have noticed that **fragments support both global ids (guids) and local ids**. The main reason is that **global ids are heavy**, so if each item had its own global id, the file size would be huge. This also happens in IFC: each item has a local id (express id), and only some items have a global id. 🔎

:::


### 🧬 Categories

An array of all item categories (**arbitrary strings used to classify items**) found in the file. Categories are arbitrary, but **all items must have a category**. For instance, a Fragments file with the following data: 👇🏻

```json
{
  "localIds": [34, 35, 36],
  "categories": ["WALL", "SLAB", "WALL"],
  ...
}
```

🧐 Means that there are 3 items:
- The **first one** has localId `34` and category `WALL`.
- The **second one** has localId `35` and category `SLAB`.
- The **third one** has localId `36` and category `WALL`.

### 🪑 Meshes

The object containing all **explicit geometries** of the model. That is, geometry used for fast visualization, not for modelling. It has the following structure (we'll check all its properties step by step): 👇🏻

```c
table Meshes {
    coordinates: Transform (required); // The global coordinates of the model. Usually used in BIM models to locate the model geographically.
    meshes_items: [uint] (required); // An array that works as an indexation matching localIds indices with meshes.
    samples: [Sample] (required); // An array of all instances of meshes in this model.
    representations: [Representation] (required); // Representations are a common interface for all geometry types. Each representation is an abstraction of a geometry and has its basic information. 
    materials: [Material] (required); // The list of unique geometry materials in this model.
    circle_extrusions: [CircleExtrusion] (required); // The list of geometries defined as a wire with thickness. Used mainly for reinforcement bars.
    shells: [Shell] (required); // The list of geometries defined as faces and holes (breps).
    local_transforms: [Transform] (required); // Local transforms of the samples
    global_transforms: [Transform] (required); // A set of local transformations for geometry samples. Each global transformation is assigned to a local id by meshes_items.
}
```

#### 🗺️ Coordinates

The global coordinates of the model. Usually used in BIM models to **locate the model geographically**. 🌍

#### 🦋➡️♟️ Meshes Items

An array that works as an indexation **matching localIds indices with meshes**. For instance, a Fragments file with the following data: 👇🏻

```json
{
  "localIds": [34, 35, 36],
  "meshes": {
  	"meshesItems": [0, 2],
  	... 
  },
  ...
}
```

🧐 Means that there are 3 items:
- The **first one** has local id `34` and has assigned the mesh with index `0`.
- The **second one** has local id `35` and has no mesh assigned.
- The **third one** has local id `36` and has assigned the mesh with index `1`.

#### 👪 Samples

An array of all **instances of explicit geometries** in this model. Each sample has the following structure: 🗼

```c
struct Sample {
    item: uint; // The index of the global transform and item in meshesItems
    material: uint; // The index of the material in materials
    representation: uint; // The index of the representation in representations
    local_transform: uint; // The index of the local transform in localTransforms
}
```

For instance, a Fragments file with the following data: 👇🏻

```json
{
  "localIds": [34, 35, 36],
  "meshes": {
"meshesItems": [0, 2],
    "samples": [
      {
        "item": 0,
        "material": 0,
        "representation": 0,
        "localTransform": 0
      },
      {
        "item": 1,
        "material": 0,
        "representation": 1,
        "localTransform": 0
      }
    ],
    ... 
  },
  ...
}
```

🧐 Means that there are 3 items:
- The **second one** has localId `35` and has no mesh assigned.
- The **first one** has localId `34` and has assigned the mesh with index `0`. This mesh has a geometry `sample` attached to it, with: 
  - **global transform** index `0`.
  - **local transform** index `0`.
  - **material** index `0`, representation index `0`.
  - **representation** index `0`.
- The **third one** has localId `36` and has assigned the mesh with index `1`. This mesh has a geometry `sample` attached to it, with: 
  - **global transform** index `1`.
  - **local transform** index `1`.
  - **material** index `0`, representation index `0`.
  - **representation** index `0`.

✍🏻 So, the conclusions are:
- There are **2 geometric samples** (instances).
- They are attached to **different items** (and therefore to **different global transforms**).
- They have **different geometries** (representations).
- They share the **same material** and the **same local transformation**.

#### 🃏 Representations

Representations are a **common interface for all geometry types**. They are an abstraction of a geometry and have its basic information. Each representation has the following structure: 🗼 

```c
enum RepresentationClass:byte {
    NONE = 0, // No representation class
    SHELL = 1, // Shell (brep) representation class
    CIRCLE_EXTRUSION = 2, // Circle extrusion representation class (used for reinforcement bars)
}

struct Representation {
    id: uint; // The index of the geometry in its corresponding array
    bbox: BoundingBox; // The bounding box of the geometry
    representation_class: RepresentationClass; // The class of the geometry (in which array it belongs: shells, circleExtrusions, etc.)
}
```

For instance, a Fragments file with the following data: 👇🏻

```json
{
  "meshes": {
    "representations": [
      {
        "id": 0,
        "representationClass": 1,
        "bbox": {
          "min": {"x": 0, "y": 0, "z": 0},
          "max": {"x": 1, "y": 1, "z": 1},
        }
      },
    ],
    ... 
  },
  ...
}
```

🧐 Means that:
- There is 1 `representation` (**geometry**) in this model with a `bounding box` of 1x1x1.
- It's of type `SHELL`, so its geometry data is **the element with index** `0` in `model.meshes.shells`.

#### 🎨 Materials

The list of **unique materials** in this model. Materials are defined by color, opacity, sidedness and line type (if any). Each material has the following structure: 🗼

```c
enum RenderedFaces:byte {
    ONE = 0, // One rendered face
    TWO = 1 // Two rendered faces
}

struct Material {
    r: ubyte; // Red color value
    g: ubyte; // Green color value
    b: ubyte; // Blue color value
    a: ubyte; // Alpha color value
    rendered_faces: RenderedFaces; // Number of rendered faces
    stroke: Stroke; // Line stroke type
}
```

#### 🧵 Circle extrusions

The list of geometries defined as **a wire with a thickness**. 🪡

:::info Why specifically circle extrusions?

We use this type of representation mainly for **reinforcement bars**, which are very computationally demanding and **don't work well when represented as any other generic mesh**. Using this specific geometry we can easily render dozens of thousands of rebars with ease.

:::

Each circle extrusion has the following structure: 🗼

```c
enum AxisPartClass:byte {
    NONE = 0, // No axis part class
    WIRE = 1, // Straight line axis part class
    WIRE_SET = 2, // Straight line set axis part class
    CIRCLE_CURVE = 3 // Circular arc axis part class
}

struct Wire {
    p1: FloatVector; // First point of the wire
    p2: FloatVector; // Last point of the wire
}

table WireSet {
    ps: [FloatVector]; // Ordered points of the wire set
}

struct CircleCurve {
    aperture: float; // Angle of the arc
    position: FloatVector; // Center of the arc
    radius: float; // Radius of the arc
    x_direction: FloatVector; // X axis of the arc
    y_direction: FloatVector; // Y axis of the arc
}

table Axis {
    wires: [Wire] (required); // Straight lines of the axis
    order: [uint] (required); // Indices of the axis parts
    parts: [AxisPartClass] (required); // Class of the axis parts
    wire_sets: [WireSet] (required); // Straight line sets of the axis
    circle_curves: [CircleCurve] (required); // Circular arcs of the axis
}

table CircleExtrusion {
    radius: [double] (required); // Half of the thickness of the circle extrusion
    axes: [Axis] (required); // Axes of the circle extrusion
}

```

For instance, a Fragments file with the following data: 👇🏻

```json
{
  "meshes": {
    "representations": [
      {
        "id": 0,
        "representationClass": 2,
        "bbox": {
          "min": {"x": 2.49, "y": 0.01, "z": 0.20},
          "max": {"x": -2.49, "y": -0.01, "z": -0.20},
        }
      },
    ],
    "circleExtrusions": [
      {
        "radius": [0.01],
        "axes": [
          {
            "wires": [
              {
                "p1": { "x": 2.48, "y": 0, "z": 0.09 },
                "p2": { "x": 2.48, "y": 0, "z": -0.20 },
              },
              {
                "p1": { "x": -2.39, "y": 4.22, "z": 0.19 },
                "p2": { "x": 2.38, "y": 4.21, "z": 0.19 },
              }
            ],
            "order": [0, 0, 1],
            "parts": [1, 3, 1],
            "wire_sets": [],
            "circle_curves": [
              {
                "aperture": 1.57,
                "position": { "x":  2.38, "y": 1.11, "z": 0.097 },
                "radius": 0.09,
                "x_direction": { "x": 0, "y": 1, "z": 0 },
                "y_direction": { "x": 0, "y": 0, "z": 1 },
              }
            ],
          }
        ]
      },
    ],
    ... 
  },
  ...
}
```

🧐 Means that: 
- This model has a single `representation` that is an `extrusion curve` (probably a **rebar**).
- The rebar has a single axis made of 3 parts: **2 straight lines and 1 circular arc**.
- The order of the parts is: `line 0` - `arc 0` - `line 1` (looking at `parts` and `order`). 

✍🏻 So, the conclusion is that it's a **bar with a circular bend**.

#### 🐚 Shells

The list of **geometries defined as face profiles and holes**, similar to breps. Used for the vast majority of meshes. Each shell has the following structure: 🗼

```c
enum ShellType:byte {
    NONE = 0, // Default shell type (less than 65535 points)
    BIG = 1, // Big shell type (less than 4294967295 points)
}

table ShellHole {
    indices: [ushort] (required); // Indices of the points of the hole
    profile_id: ushort; // Index of the profile to which the hole belongs
}

table ShellProfile {
    indices: [ushort] (required); // Indices of the points of the profile
}

table BigShellHole {
    indices: [uint] (required); // Indices of the points of the hole
    profile_id: ushort; // Index of the profile to which the hole belongs
}

table BigShellProfile {
    indices: [uint] (required); // Indices of the points of the profile
}

table Shell {
    profiles: [ShellProfile] (required); // Exterior profiles of the shell
    holes: [ShellHole] (required); // Holes of the shell
    points: [FloatVector] (required); // Points of the shell
    big_profiles: [BigShellProfile] (required); // Exterior profiles of the shell (if the shell has more than 65535 points)
    big_holes: [BigShellHole] (required); // Holes of the shell (if the shell has more than 65535 points)
    type: ShellType; // Type of the shell (less than 65535 points or more than 65535 points)
}

```

:::danger Why shell types?

Shells can be of 2 types: default or big. Big shells consume more memory and are **only used for shells with more than 65,535 points** (which is the max ushort value). This way we have the way of both worlds: meshes that don't consume a lot of memory, while supporting certain big objects. Big shells are rare in BIM, being less than 1% of objects. ✨

:::

For instance, a fragments file with the following data: 👇🏻


```json
{
  "meshes": {
    "representations": [
      {
        "id": 0,
        "representationClass": 1,
        "bbox": {
          "min": {"x": 0, "y": 0, "z":0},
          "max": {"x": 1, "y": 1, "z": 1},
        }
      },
    ],
    "shells": [
      {
        "type": 0,
        "points": [
          {"x": 0, "y": 0, "z":0},
          {"x": 1, "y": 0, "z":0},
          {"x": 0, "y": 1, "z":1},
          {"x": 0, "y": 0, "z":1},
          {"x": 0.25, "y": 0.25, "z":0.25},
          {"x": 0.75, "y": 0.25, "z":0.25},
          {"x": 0.25, "y": 0.75, "z":0.75},
          {"x": 0.25, "y": 0.25, "z":0.75},
        ],
        "profiles": [
          { "indices": [0, 1, 2, 3] },
        ],
        "holes": [
          { "indices": [4, 5, 6, 7], "profileId": 0 },
        ],
        "bigProfiles": [],
        "bigHoles": [],
      },
    ],
    ... 
  },
  ...
}
```

🧐 Means that: 
- This model has a **single representation** that is a `shell`.
- The shell has **8 points**, **1 exterior profile** and **1 hole**.
- It's probably **a square face with a square hole inside**.


#### 🗺️📌 Local transforms

A set of **local transformations for geometry samples**.


:::info Always use local transformations

 All samples require a local transformation. For samples that have no local transformation, we use a **no-transform transformation**: ➿

```json
{
  "position": {"x": 0, "y": 0, "z": 0},
  "xDirection": {"x": 1, "y": 0, "z": 0},
  "yDirection": {"x": 0, "y": 1, "z": 0},
}
```

:::


#### 🌍📌 Global transforms

A set of **global transformations for geometry samples**. 

:::tip What is a "bim object" in fragments?

Each global transformation is assigned to an item local id by `meshesItems`. This means that:
- There can't be a global trasformation that is not assigned to an item.
- If an item has a geometry representation, it needs at least a global transform assigned to it via `meshesItems`. Remember that all items have local ids.
- Items without geometry representation don't have a global transform assigned to them.

🚀 So if you have a BIM model containing just one chair made of 3 geometry instances, then you will have at least **1 item** (local id), **1 global transform** assigned to it, and **3 samples** assigned to that global transform. **In fragments, a "BIM object" is just a set of geometry samples assigned to the same global transform** (which means they are assigned to the same item / local id). This approach allows to **reuse geometries, transforms and materials** across items.

:::

For instance, a fragments file with the following data: 👇🏻

```json
{
  "localIds": [34, 35, 36],
  "meshes": {
    "meshesItems": [2, 0, 1],
    "globalTransforms": [
      {
        "position": {"x": 0, "y": 0, "z": 0},
        "xDirection": {"x": 1, "y": 0, "z": 0},
        "yDirection": {"x": 0, "y": 1, "z": 0},
      },
      {
        "position": {"x": 1, "y": 0, "z": 0},
        "xDirection": {"x": 1, "y": 0, "z": 0},
        "yDirection": {"x": 0, "y": 1, "z": 0},
      },
      {
        "position": {"x": 0, "y": 0, "z": 1},
        "xDirection": {"x": 1, "y": 0, "z": 0},
        "yDirection": {"x": 0, "y": 1, "z": 0},
      },
    ],
    ... 
  },
  ...
}
```

🧐 Means that: 
- This model has **3 items**.
- The 3 items have global transforms, so **they likely have some geometry samples representing them**.
- The **first global transform** is assigned to the item with local id `36`. 
- The **second global transform** is assigned to the item with local id `35`. 
- The **third global transform** is assigned to the item with local id `34`. 

### 🗞️🔥 Unique attributes

An array of **unique item attributes** in this model. 📃

:::info attributes vs unique attributes

Yes, you might have noticed that Fragments have both `attributes` and `uniqueAttributes`. The reason is that some use cases require to get the full deduplicated list of attributes very fast, and this is why `uniqueAttributes` exists. This doesn't have a memory impact [thanks to this](#-string-arrays). 🤯 

:::


### 🗞️ Attributes

An **array of item data** stored as an array of arrays. Each attribute has the following structure: 🗼

```c
table Attribute {
    data: [string] (required); // The attributes of an item, represented as an array of strings
}
```

For instance, a fragments file with the following data: 👇🏻

```json
{
  "localIds": [34, 35, 36],
  "attributes": [
    {
      data: [
        "["Name","Basic Wall 1","IFCLABEL"]",
      ]
    },
    {
      data: [
        "["Name","Basic Wall 2","IFCLABEL"]",
      ]
    },
    {
      data: [
        "["Name","Basic Wall 3","IFCLABEL"]",
      ]
    }
  ],
  ...
}
```

🧐 Means that: 
- This model has **3 items**.
- The item with **local id** `34` has an attribute `"Name"` with value `"Basic Wall 1"`.
- The item with **local id** `35` has an attribute `"Name"` with value `"Basic Wall 2"`.
- The item with **local id** `36` has an attribute `"Name"` with value `"Basic Wall 3"`.


:::info Always use attributes

 All samples require an attributes entry. For samples that have no attributes (which is rare in BIM), we use an **empty attributes entry**: ➿

```json
{
  "localIds": [34],
  "attributes": [
    {
      data: []
    },
  ],
  ...
}
```

:::


### 🫱🏻‍🫲🏻🏷️ Relations Names

An array of **relation identifiers** in this model.

### 🫱🏻‍🫲🏻 Relations

An array of **relations between different items** stored as arrays of arrays. We use this data structure for the same optimization reason as for attributes. Each relation has the following structure: 🗼

```c
table Relation {
    data: [string] (required); // The relation of an item, represented as an array of strings
}
```


### 🫱🏻‍🫲🏻➡️♟️ Relations Items

An array that works as an **indexation matching localIds indices with relations**, similar to `meshesItems`. For instance, a fragments file with the following data:

```json
{
  "localIds": [34, 35, 36],
  "relationsItems": [1],
  "relations": [
    {
      data: [
        "["IsDecomposedBy", 34]",
        "["IsDecomposedBy", 36]",
      ]
    },
  ],
  ...
}
```

🧐 Means that: 
- This model has **3 items**.
- The item with local id `35` has **2 relations**. 
- The relations are with items `34` and `36` respectively and named `"IsDecomposedBy"`.

### 🦋 Guid

An global ID that **identifies this model uniquely**.

### 🌳 Spatial structure

A **tree representing the spatial hierarchy** of elements. It has the following structure: 🗼

```c
table SpatialStructure {
    local_id: uint = null; // Local id of the current spatial node
    category: string; // Category of the current spatial node
    children: [SpatialStructure]; // Child spatial nodes of the current spatial node
}
```

:::info Recursive and grouped

As you can see, **the structure is recursive**, so you can build a whole tree with it. We use this structure to **group items of the same category together**, as shown in the example below. 🍱

:::

For instance, a typical spatial tree can look like this:

```json
{
  "localIds": [34, 35, 36],
  "spatialStructure": {
    "localId": null,
    "category": "IFCPROJECT",
    "children": [
      {
        "localId": 34,
        "category": null,
        "children": [
          {
            "localId": null,
            "category": "IFCSITE",
            "children": [
              {
                "localId": 35,
                "category": null,
                "children": [
                  {
                    "localId": null,
                    "category": "IFCBUILDINGSTOREY",
                    "children": [
                      {
                        "localId": 36,
                        "category": null,
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    ...
  }
}
```

🧐 Means that: 
- This model has **3 items**.
- Their categories are **IFCPROJECT**, **IFCSITE** and **IFCBUILDINGSTOREY** respectively.
- They form a **spatial tree** where `36` is a child of `35`, which is a child of `34`.


### 🛣️ Alignments

A set of **civil alignments** for this model. Each alignment has the following structure: 🗼

```c
table Alignment {
    absolute: [uint]; // Geometry representation ids for the absolute respresentation of this alignment
    horizontal: [uint]; // Geometry representation ids for the horizontal respresentation of this alignment
    vertical: [uint]; // Geometry representation ids for the vertical respresentation of this alignment
}
```

:::tip Just ids?

Alignments don't use `meshes` (explicit), but `geometries` (implicit) to save space and get an exact definition.

:::




### 🧊 Geometries

The object containing **all implicit geometries** of the model. Used for **modelling**, as well as certain entities that have an implicit representation, like **alignments** or **grids**. It has the following structure: 🗼

```c
table Geometries {
    samples: [GeometrySample] (required); // An array of implicit geometry samples
    sample_ids: [uint]; // An array of ids for the implicit geometry samples
    representations: [GeometryRepresentation] (required); // An array of implicit geometry representations
    representation_ids: [uint]; // An array of ids for the implicit geometry representations
    transforms: [Transform] (required); // An array of implicit geometry transforms
    transform_ids: [uint]; // An array of ids for the implicit geometry transforms
    representations_samples: [uint]; // An array of id pairs that work as an indexation matching mesh representations ids with implicit samples ids
    lines: [GeometryLines] (required); // An array of implicit geometry lines
    walls: [GeometryWall]; // An array of implicit geometry walls
}
```

The `samples` and `representations` work similarly to the ones in `Meshes`. 

:::danger What about other geometries?

This is still a work in progress, **so more entities might appear** here as the Fragments Schema evolves and we develop a modelling API. 🫡

:::
