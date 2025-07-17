---
sidebar_position: -3
---

# 🔄️ Migrating previous versions

We deliver new features and bugfixes with each release. While **we try to keep the API as stable as possible**, there might be situations in which it's impossible to do it without holding back the project progress. That's why we: 👇🏻

- **Keep all the past docs** [in this page](https://thatopen.github.io/engine_past-docs/). 📚
- Make a migration guide for each version (starting in 3.1.x) **covering all components**. 🚀

:::tip What does this guide cover?

Here you'll learn how to migrate to version 3.1.x **[from version 3.0.x](https://thatopen.github.io/engine_past-docs/3.0.x/intro/)**.

This means migrating from:

- [@thatopen/fragments@3.0.11](https://www.npmjs.com/package/@thatopen/fragments/v/3.0.11) ➡️ [@thatopen/fragments@3.1.1](https://www.npmjs.com/package/@thatopen/fragments/v/3.1.1)
- [@thatopen/components@2.4.11](https://www.npmjs.com/package/@thatopen/components/v/2.4.11) ➡️ [@thatopen/components@3.1.0](https://www.npmjs.com/package/@thatopen/components/v/3.1.0)
- [@thatopen/components-front@2.4.12](https://www.npmjs.com/package/@thatopen/components-front/v/2.4.12) ➡️ [@thatopen/components-front@3.1.0](https://www.npmjs.com/package/@thatopen/components-front/v/3.1.0)
- [@thatopen/ui@2.4.5](https://www.npmjs.com/package/@thatopen/ui/v/2.4.5) ➡️ [@thatopen/ui@3.1.0](https://www.npmjs.com/package/@thatopen/ui/v/3.1.0)
- [@thatopen/ui-obc@2.4.4](https://www.npmjs.com/package/@thatopen/ui-obc/v/2.4.4) ➡️ [@thatopen/ui-obc@3.1.1](https://www.npmjs.com/package/@thatopen/ui-obc/v/3.1.1)
:::

## ☝🏻 Before you start

You will need to **upgrade all the versions** of our libraries, as well as it's peer dependencies (watch out three.js). You can't combine old and new libraries. 📚➡️📚

This is the legend we'll use to have an **easy overview of changes in the API**:

- 🟰 means **no breaking change** in the API.
- 〰️ means **something small changed** (e.g. a method/component name changed).
- ➰ means **something changed considerably** or completely.
- 🔜 means the component has been **removed temporarily**. 
- ✖️ means the component has been **removed permanently**.

You'll find more info about removed components below. 👇🏻

:::info What about new features?

The main purpose of this article is to **migrate existing apps**, and you can't migrate features that didn't exist before. New features won't be covered here unless they are the substitution of a previous feature. To see how new features work, check out the latest tutorials. The only exception are new **features that substitute existing ones**, which will be covered here too.

:::

And one last thing: **if you get stuck, please ask in our community** (ideally, providing a minimal example we can test). 🫡

## 🛑 About removed features

If you have an existing app, it's possible that some of the features you used from previous versions are not there anymore, temporarily or permanently. Depending on the specific scenario, **there are different solutions**: 👇🏻

- ✖️ If the feature was permanently removed because **it's not needed anymore** (e.g. the culler), you shouldn't have a need to replace it.
 it's not needed anymore (e.g. the culler), so you shouldn't have a need to replace it at all.

- ✖️ If the feature was permanently removed because **what it did is done by something else** (e.g. the civil tools, which have been merged into one), replacing the component with the new one should give you the features back.

- ✖️ If the feature was permanently removed because **we consider it out of scope** (like the Json exporter), we append the link to the original code here, so that you can copy and maintain it yourself in your project if you need it.

- 🔜 If the feature was temporarily removed because **we will add it in a future path or release**, you just have to wait until we add it. If you can't wait to have it in your solution, our suggestion is that you stick to the previous version of the library until we add it back.

If you have any questions about your specific case, **let us know in the community**! 🫱🏻‍🫲🏻

## 📗 web-ifc

The first thing you will need to do is update [web-ifc](https://www.npmjs.com/web-ifc) (our core IFC library) to the correct version. **All versions of the library should use the same web-ifc version** (let us know otherwise). You can find [the correct version here](https://github.com/ThatOpen/engine_components/blob/main/packages/core/package.json). Please install it as a dependency in your project and use the correct WASM file (tutorials like the IfcLoader cover this). 🙏🏻

## 📘 fragments

### 🟰 FragmentsModels

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Fragments/Fragments/FragmentsModels) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Fragments/Fragments/FragmentsModels/)

This API didn't have a breaking change, **it's the same** in both tutorials. 👍🏻

### 🟰 IfcImporter

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Fragments/Fragments/IfcImporter) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Fragments/Fragments/IfcImporter/)

This API didn't have a breaking change, **it's the same** in both tutorials. 👍🏻

### 🟰 ModelInformation

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Fragments/Fragments/ModelInformation) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Fragments/Fragments/FragmentsModels/ModelInformation)

This API didn't have a breaking change, **it's the same** in both tutorials. 👍🏻

### 🟰 Raycasting

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Fragments/Fragments/Raycasting) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Fragments/Fragments/FragmentsModels/Raycasting)

This API didn't have a breaking change, **it's the same** in both tutorials. 👍🏻

### 🟰 VisibilityOperations

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Fragments/Fragments/VisibilityOperations) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Fragments/Fragments/FragmentsModels/VisibilityOperations)

This API didn't have a breaking change, **it's the same** in both tutorials. 👍🏻


## 📙 components


### 🟰 BCFTopics

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/BCFTopics) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/BCFTopics)

This API didn't have a breaking change, **it's the same** in both tutorials. 👍🏻

### 〰️ BoundingBoxer

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/BoundingBoxer) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/BoundingBoxer)

This API can do pretty much **the same as before**, but **more performantly** and with an extra method to give you **more control**:

- Before, [we generated a three.js mesh](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/BoundingBoxer#-creation-of-bounding-boxes) that we used to compute the bounding boxes, so you would use [add](https://thatopen.github.io/engine_past-docs/3.0.x/api/@thatopen/components/classes/BoundingBoxer#add) to add the Fragments model, which was a simple three.js mesh (not very performant).

- Now we are taking advantage of the new Fragments performance and [giving you more control](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/BoundingBoxer#-creation-of-bounding-boxes). You can use [addFromModels](https://docs.thatopen.com/api/@thatopen/components/classes/BoundingBoxer#addfrommodels) if you want to **get the bbox of full models** (you can select which one by passing an argument with their ids), or [addFromModelIdMap](https://docs.thatopen.com/api/@thatopen/components/classes/BoundingBoxer#addfrommodelidmap) if you want the **bbox of specific items** by defining a model id map as shown in the tutorial. 😎


### 〰️ Classifier

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/Classifier) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Classifier)

The classifier can do **the same as before and much more**, thanks to the performance power of Fragments.

- Before, it was only possible to [classify by entity, relation or model](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/Classifier#%EF%B8%8F-classifiying-the-bim-model).

- Now, you can do exactly the same by using the [built-in methods to classify](https://docs.thatopen.com/Tutorials/Components/Core/Classifier#%EF%B8%8F-built-in-ways-to-classify). Plus, you can do more things **in combination with the finder** to create [more advanced classifications](https://docs.thatopen.com/Tutorials/Components/Core/Classifier#-adding-dynamic-items). Check out the new tutorial for more info about this. 💪🏻

### 🟰 Clipper

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/Clipper) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Clipper)

This API didn't have a breaking change, **it's the same** in both tutorials. 👍🏻

### ✖️ Cullers

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/Cullers) ➡️ ✖️

The culler's mission was to **hide items that were unseen in the scene** to increase performance. This problem is already **automatically managed by Fragments internally**, so there's no need of an external component to do this anymore. ☝🏻

With the new fragments, you should be able to **handle bigger models a lot faster than before**. If you have any problems or detect any regression, let us know in the community. 🫱🏻‍🫲🏻

:::info Alternative

There's no alternative, as this feature wasn't removed per se. **It's now automatically managed by Fragments**. If you have any issues with this, let us know in the community.

:::

### 🔜 Exploder

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/Exploder) ➡️ 🔜

The exploder was a great component to **take a look at the model inner spaces** like a toy. This had to be removed because the new Fragments don't allow editing (yet). **Once we publish the Fragments edit API**, we'll put this component back, and this API should be back without changes. 🔥

:::info Alternative

As an alternative in your application, you can [isolate floor plans using the hider](https://docs.thatopen.com/Tutorials/Components/Core/Hider). We know, it's not as cool as exploding, but don't worry: **this will be back soon**.

:::


### 〰️ FragmentsManager

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/FragmentsManager) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/FragmentsManager)

Internally, Fragments is now completely different. This has forced us to make **3 changes** to this API: 🧩🧩🧩

- You need to [initialize the worker](https://docs.thatopen.com/Tutorials/Components/Core/FragmentsManager#-utilizing-the-fragmentsmanager-component) **before using Fragments**.

- You need to call `fragments.update()` when you want the Fragments models to **update their LODs and culling** depending on the user's camera position. This is shown in the new tutorial.

- All the fragments related methods are now in `FragmentsManager.core`. The reason is that this object is an instance of the [FragmentsModels](https://docs.thatopen.com/api/@thatopen/fragments/classes/FragmentsModels) and we don't want to replicate that API. The advantage of using the FragmentsManager is that **it's a component**, so it's globally available and automatically disposed when calling `components.dispose()`.

### 🟰 Grids

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/Grids) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Grids)

This API didn't have a breaking change, **it's the same** in both tutorials. 👍🏻

### 🟰 Hider

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/Hider) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Hider)

This API didn't have a breaking change, **it's the same** in both tutorials. 👍🏻

### ➰ IfcFinder

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/IfcFinder) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/ItemsFinder)

This component has changed a lot because when we first created it, **we did it for IFC STEP**. But the very reason why we created Fragments is that we realized that IFC STEP is a format that was never designed to be performant. After years, we could never get a decent 3D viewer with IFC STEP. We didn't want to **end up in the same situation** with the Finder. 🤔

:::tip Fragments are taking over

All components we create from now on will be using Fragments, our **open native format**, to take advantage of its performance and speed (except for the IFC STEP **importers and exporters** of course).

:::

That said, the mission of the finder is the same: find data in our BIM models using complex queries: 👇🏻

- Before, the finder allowed to [define queries](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/IfcFinder#-setting-up-the-finder) to make text searches **directly in the IFC STEP file**, with all the performance problems this entails.

- Now, the finder allow to [define the same queries and save them for later](https://docs.thatopen.com/Tutorials/Components/Core/ItemsFinder#-using-the-items-finder-component) with a **simpler API that does the same and much better performance**.

In summary, you can do the same as before, but the API is different, it works directly in Fragments and it's faster. If you have any problems with this, let us know in the community. 🫱🏻‍🫲🏻

:::info Alternative

If in spite of the performance issues you still want to make queries to IFC STEP as we did before, you can [take the code of the previous component](https://github.com/ThatOpen/engine_components/blob/v2.4.0/packages/core/src/ifc/IfcFinder/index.ts) to your project.

:::

### ✖️ IfcGeometryTiler

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/IfcGeometryTiler) ➡️ ✖️

The main goal of the IfcGeometryTiler was to set up mesh streaming **to be able to represent bigger IFC files**. This had various problems: 📺

- The set up was very **complex and verbose**
- It relied too much on the network (**slow internet = poor experience**)
- The load of bigger objects / many simultaneous was **very slow**
- It made the logic of many components **exponentially more complex and buggy**

With the new version of Fragments, this is no longer necessary. Fragments can load hundreds of files or multi gigabytes in seconds without streaming, **skipping all the downsides above** while keeping the speed benefits. 🔥 


:::info Alternative

There's not alternative because **we don't see the need at the moment**. As we haven't hit a project we can't open with the new Fragments yet, we have decided to drop streaming for now. We might revisit it in the future if we need to represent thousands of BIM models or hundreds of gigabytes simultaneously.

If you have any performance issues with the new Fragments, **let us know in the community**.

:::

### 🔜 IfcIsolator

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/IfcIsolator) ➡️ 🔜

The IfcIsolator was created mainly to allow people to send us objects that failed in their IFC files **without sending us the whole file**, as often they are private. The problem is that its implementation is not very performant, and **now we have a new use** for this feature. 👇🏻

Our core IFC library has a limit of ~2gb for IFCs. We want to use the isolator to **split down bigger IFC STEP files** so that we can process them. And this requires a performant implementation. We are now rebuilding the isolator from scratch. As soon as we have it ready, **it will be back with the same API**, a much better performance and a key role: allowing us to open gigantic IFC files. 💣

:::info Alternative

If you were using the isolator, you can easily copy [it's original source code](https://github.com/ThatOpen/engine_components/blob/v2.4.0/packages/core/src/ifc/IfcIsolator/index.ts) and use it in your project. It's **decoupled from anything else**. If you have any questions, let us know in the community.

:::

### ✖️ IfcJsonExporter

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/IfcJsonExporter) ➡️ ✖️

The main goal of the JSON exporter was to **export the properties of the BIM models to JSON**, as we had no other way of storing them. This is not very efficient. Now that we have Fragments, our own native format, **we don't need this**. It's important to note that while exporting an IFC to JSON might sound tempting, IFC STEP is actually less verbose than a JSON, so you will end up with very big files. 🐋


:::info Alternative

If you still want to **get a JSON from your IFC STEP files**, you can check out [the original code](https://github.com/ThatOpen/engine_components/blob/v2.4.0/packages/core/src/ifc/IfcJsonExporter/index.ts), which is very simple and uses our core IFC library.

:::

### 〰️ IfcLoader

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/IfcLoader) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcLoader)


The API for this just have **some slight changes** in the signature of the `IfcLoader.load` method. You can [check them out here](https://docs.thatopen.com/Tutorials/Components/Core/IfcLoader#-using-the-ifcloader-component) and [here](https://docs.thatopen.com/api/@thatopen/components/classes/IfcLoader#load). 🏠

### 🔜 IfcPropertiesManager

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/IfcPropertiesManager) ➡️ ✖️

Editing, creating and deleting properties is key for us, and the only reason we didn't include it here is because **we have to rebuild it from scratch for the new Fragments**. In the next release (Q3) we are releasing the Fragments Edit API and **this component will be back** (as well as other components to edit geometries, materials, etc). 🎯

:::info Alternative

In the meantime, if you want to know **how to work with Fragments and properties**, you can check out the following tutorials:

- [Getting properties](https://docs.thatopen.com/Tutorials/Fragments/Fragments/FragmentsModels/ModelInformation)
- [Finding items](https://docs.thatopen.com/Tutorials/Components/Core/ItemsFinder)
- [Showing the properties in a menu](https://docs.thatopen.com/Tutorials/UserInterface/OBC/ItemsData)
:::

### ✖️ IfcPropertiesTiler

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/IfcPropertiesTiler) ➡️ ✖️

The main goal of the IfcPropertiesTiler was to set up mesh streaming to be able to represent bigger IFC files, which **is not necessary with the new Fragments**. See [IfcGeometryTiler](#%EF%B8%8F-ifcgeometrytiler) for more details. 🔎

### ✖️ IfcRelationsIndexer

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/IfcRelationsIndexer) ➡️ ✖️

The main goal of this component was to **compute the indirect relations within the IFC STEP file**. In IFC, many relations are indirect, so that if you don't preindex them, you are forced to traverse the whole data every time you make a query. That means that in order to know the properties of a wall, you need to traverse the whole IFC (yes, this would be **very slow**). 🥲

Now **Fragments does this automatically**. All Fragments files relations are indexed. So there's no need for this component anymore. So just like the [Cullers](#%EF%B8%8F-cullers), this component was not removed: it's handled by Fragments now. ⚡⚡⚡

:::info Alternative

There's no alternative, as this feature wasn't removed per se. **It's now automatically managed by Fragments**. If you have any issues with this, let us know in the community.

:::

### ✖️ MeasurementUtils

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/MeasurementUtils) ➡️ ✖️

The goal of measurement utils was to provide some general logic to **create measurements in simple Three.js objects**. Now that we have Fragments, we have adapted all the measuring logic to it, and **this class is now useless**. If you miss any of the specific methods, you can [check them out in the old file](https://github.com/ThatOpen/engine_components/blob/e1f0e4d95d96e4d9309e684da4f8824ba416e19e/packages/core/src/measurement/MeasurementUtils/index.ts), as they were not a lot of code. If you want measuring tools check out the alternatives. 👇🏻

:::info Alternative

If you want to make measurements in your app, check out the following tutorials: 📏📐

- [To measure lengths](https://docs.thatopen.com/Tutorials/Components/Front/AreaMeasurement)
- [To measure areas](https://docs.thatopen.com/Tutorials/Components/Front/LengthMeasurement)

:::

### 🔜 MiniMap

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/MiniMap) ➡️ 🔜

The only reason this is not available yet is because **we didn't have time before the release**, but we'll add this back as a patch very soon. In the meantime, let us know in the community if you have any questions. 🙏🏻

### 🟰 OrthoPerspectiveCamera

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/OrthoPerspectiveCamera) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/OrthoPerspectiveCamera)


This API didn't have a breaking change, **it's the same** in both tutorials. 👍🏻

### 〰️ Raycasters

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/Raycasters) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Raycasters)

The only change in this component is that now `caster.castRay` is async because we are also raycasting Fragments, which are managed by web workers and **require asynchronous code**. ⏱️


### 🟰 ShadowedScene

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/ShadowedScene) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/ShadowedScene)


This API didn't have a breaking change, **it's the same** in both tutorials. 👍🏻 Just make sure you **follow the new tutorial** to cast shadows on top of the Fragments meshes.

### 🟰 Viewpoints

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/Viewpoints) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Viewpoints)

This API didn't have a breaking change, **it's the same** in both tutorials. 👍🏻

### 🟰 Worlds

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Core/Worlds) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Worlds)

This API didn't have a breaking change, **it's the same** in both tutorials. 👍🏻 Make sure to **check out the new tutorial**, as there are some extra features, and you'll see the combination with the newer components.

## 📕 components-front

### ✖️ AngleMeasurement

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/AngleMeasurement) ➡️ ✖️

We have removed this component because **we haven't seen anyone using it**. If you have a need for this, let us know of your use case and we'll add it back! 📐

:::info Alternative

Tell us about your use case in the community and we'll add it back.

:::


### 🟰 AreaMeasurement

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/AreaMeasurement) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Front/AreaMeasurement)

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻


### ➰ Civil3DNavigator

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/Civil3DNavigator) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilNavigators)

The previous civil components had **several problems**: 🧨
- They were **very disaggregated**, making it hard to make them work together in a flexible way.
- They were **very opinionated** (e.g. it wasn't possible to handle multiple alignments).

So when we rebuild alignments for fragments, given that these components' adoption was still relatively small, we thought it was a great opportunity to **improve them**. 📈

Now there's a single component: the [civil navigators](https://docs.thatopen.com/api/@thatopen/components-front/classes/CivilNavigators), which allow to do the same you could do with 3d, horizontal and vertical navigator components, but **with benefits**: 

- works with the new Fragments, and therefore it's a lot **more performant**.
- **less opinionated** and **more flexible** (supporting multiple alignments simultaneously).
- supports **dynamic station labels**.

In the [new tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilNavigators), you can see how to **create multiple navigators** (both 3d and 2d) and combine them with the cross section navigator to have a full civil navigation experience. 🛣️


### 🟰 CivilCrossSectionNavigator

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/CivilCrossSectionNavigator) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilNavigators)

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻


### ✖️ CivilElevationNavigator

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/CivilElevationNavigator) ➡️ ✖️

The vertical, horizontal and 3d civil navigators have been **merged into one** to be able to do the same as before but more flexibly. [Check out the civil 3d navigator](#-civil3dnavigator) for more details. 🛣️

:::info Alternative

Check out the [Civil Navigators tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilNavigators).

:::

### ✖️ CivilPlanNavigator

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/CivilPlanNavigator) ➡️ ✖️

The vertical, horizontal and 3d civil navigators have been **merged into one** to be able to do the same as before but more flexibly. [Check out the civil 3d navigator](#-civil3dnavigator) for more details. 🛣️

:::info Alternative

Check out the [Civil Navigators tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilNavigators).

:::

### ➰ ClipEdges

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/ClipEdges) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Front/ClipStyler)

Due to the integral changes in the structures of the new Fragments, we were force to **change the API of the clipping edges**, which are tightly coupled with the BIM models geometry. You can do the same as before, but you'll need to make some changes to your code: 👇🏻

- ✂️ Before, you [defined styles](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/ClipEdges#%EF%B8%8F-creating-the-styles) to control the appearance of the clipping edges.

- ✂️ Now, you still [define styles like before](https://docs.thatopen.com/Tutorials/Components/Front/ClipStyler#-using-the-clip-styler-component), but you also need [to define object](https://docs.thatopen.com/Tutorials/Components/Front/ClipStyler#%EF%B8%8F-defining-styled-items) and then [apply styles to them](https://docs.thatopen.com/Tutorials/Components/Front/ClipStyler#-applying-styles-to-items).

If you have any questions about this, **let us know in the community**!

### 〰️ EdgeMeasurement

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/EdgeMeasurement) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Front/LengthMeasurement)

This component is now just **merged with the length measurement component**, but it's API is identical. Just check out the tutorial to see how to activate it. 📏

### 🔜 FaceMeasurement

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/EdgeMeasurement) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Front/AreaMeasurement)

We didn't add this one because we run out of time before the release, but **we'll add this as a patch soon**. It's going to be part of face measurement, just like edge measurement is a part of length measurement. Likewise, besides the fact that it's now a part of another component, **the API won't change**. 🙏🏻

### 🟰 Highlighter

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/Highlighter) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Highlighter)

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻

### ✖️ IfcStreamer

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/IfcStreamer) ➡️ ✖️

The main goal of the IfcPropertiesTiler was to set up mesh streaming to be able to represent bigger IFC files, which **is not necessary with the new Fragments**. See [IfcGeometryTiler](#%EF%B8%8F-ifcgeometrytiler) for more details. 🔎

### 🟰 LengthMeasurement

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/LengthMeasurement) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Front/LengthMeasurement)

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻

### 🟰 Marker

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/Marker) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Marker)

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻

### 〰️ Plans

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/Plans) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Views)

The plans and sections component has been substituted by the **more generic and flexible Views component**, which is also implemented to **work with BCF features**. The API is very similar, and [here](https://docs.thatopen.com/Tutorials/Components/Core/Views#-creating-views-from-ifc-storeys) you can see how to create plans as before. To get edges, [check out the new clip styler tutorial](https://docs.thatopen.com/Tutorials/Components/Front/ClipStyler). 🏠

### ➰ PostproductionRenderer

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/PostproductionRenderer) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Front/PostproductionRenderer)

The old postproduction renderer had **some problems**:
- 📷 Added **extra dependencies** to the project, increasing its size.
- 📷 It was **hard to set up / configure**.
- 📷 The AO effect **wasn't very efficient**.
- 📷 The lines and outlines effects visual quality was **far from perfect**.

With the new postproduction renderer, we have solved this all:
- 📸 You can now **select styles**, which will automatically configure the renderer optimally to have the look you want.
- 📸 It **doesn't use external libraries**, just pure three.js, reducing the dependencies.
- 📸 It has an improved lines and outlines effect with **better visual quality**.

In summary, using the renderer itself won't change much. What changes is **how you configure it and fine tune the appearance of your app**. If you have any questions, let us know in the community. 🫱🏻‍🫲🏻

### 〰️ Sections

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/Plans) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Views)

The plans and sections component has been substituted by the **more generic and flexible Views component**, which is also implemented to **work with BCF features**. The API is very similar, and [here](https://docs.thatopen.com/Tutorials/Components/Core/Views#-creating-elevation-views) you can see how to create sections or elevations views as before. To get edges, [check out the new clip styler tutorial](https://docs.thatopen.com/Tutorials/Components/Front/ClipStyler). 🏠

### ✖️ ShadowDropper

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/ShadowDropper) ➡️ ✖️

The original shadow dropper was made a long time ago to get a **performant and beautiful shadow**. Now that we have the shadowed scene component (more precise and equally efficient) this doesn't make sense anymore. 🕶️

:::info Alternative

Use the [ShadowedScene](#-shadowedscene) instead. If you have any questions or suggestions, let us know in the community!

:::

### 🟰 VolumeMeasurement

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/Components/Front/VolumeMeasurement) ➡️ ✖️

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻 We removed the tutorial because it's just like the rest of measurement tools. 📏📐

## 📔 ui

### 🟰 Component

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/UserInterface/Core/Component) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/UserInterface/Core/Component)

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻

### 🟰 Table

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/UserInterface/Core/Table/) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/UserInterface/Core/Table/)

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻

### 🟰 DataTransform

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/UserInterface/Core/Table/DataTransform) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/UserInterface/Core/Table/DataTransform)

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻

### 🟰 ExportingData

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/UserInterface/Core/Table/ExportingData) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/UserInterface/Core/Table/ExportingData)

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻

### 🟰 LoadFunction

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/UserInterface/Core/Table/LoadFunction) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/UserInterface/Core/Table/LoadFunction)

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻

### 🟰 Searching

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/UserInterface/Core/Table/Searching) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/UserInterface/Core/Table/Searching)

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻

## 📓 ui-obc

### ✖️ ClassificationsTree

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/UserInterface/OBC/ClassificationsTree) ➡️ ✖️

We have removed this one because it can easily be done **just using our UI libraries in 3 minutes**, so it didn't add much value. You have an example in the [classifier tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Classifier). ☝🏻

:::info Alternative

Check out the [classifier tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Classifier) and build a more powerful menu in 3 minutes.

:::

### 〰️ ElementProperties

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/UserInterface/OBC/ElementProperties) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/UserInterface/OBC/ItemsData)

We have **merged ElementProperties and EntityAttributes** in the same component. It covers both use cases and the API changes are minimal. Check out the new tutorial for the new features, and let us know if you have any questions. 📃

### 〰️ EntityAttributes

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/UserInterface/OBC/EntityAttributes) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/UserInterface/OBC/ItemsData)


We have **merged ElementProperties and EntityAttributes** in the same component. It covers both use cases and the API changes are minimal. Check out the new tutorial for the new features, and let us know if you have any questions. 📃

### 🟰 ModelsList

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/UserInterface/OBC/ModelsList) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/UserInterface/OBC/ModelsList)

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻

### 〰️ RelationsTree

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/UserInterface/OBC/RelationsTree) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/UserInterface/OBC/SpatialTree)

The name of this comonent changed, but **it's API is the same**. 👍🏻

### 🟰 TopicsUI

[Original tutorial](https://thatopen.github.io/engine_past-docs/3.0.x/Tutorials/UserInterface/OBC/TopicsUI) ➡️ [New tutorial](https://docs.thatopen.com/Tutorials/UserInterface/OBC/TopicsUI)

This API didn't have a breaking change, **it's the same** in both tutorials. Don't forget to **check out the latest tutorial** to see the new cool features in store.👍🏻


