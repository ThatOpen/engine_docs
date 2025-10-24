---
sidebar_position: -3
---

# 🔄️ Migrating previous versions

We deliver new features and bugfixes with each release. While **we try to keep the API as stable as possible**, there might be situations in which it's impossible to do it without holding back the project progress. That's why we: 👇🏻

- **Keep all the past docs** [in this page](https://thatopen.github.io/engine_past-docs/). 📚
- Make a migration guide for each version (starting in 3.1.x) **covering all components**. 🚀

:::tip What does this guide cover?

Here you'll learn how to migrate to version 3.2.x from version 3.1.x.

This means migrating from:

- [@thatopen/fragments@3.1.7](https://www.npmjs.com/package/@thatopen/fragments/v/3.1.7) ➡️ [@thatopen/fragments@3.2.0](https://www.npmjs.com/package/@thatopen/fragments/v/3.2.0)
- [@thatopen/components@3.1.6](https://www.npmjs.com/package/@thatopen/components/v/3.1.6) ➡️ [@thatopen/components@3.2.0](https://www.npmjs.com/package/@thatopen/components/v/3.2.0)
- [@thatopen/components-front@3.1.7](https://www.npmjs.com/package/@thatopen/components-front/v/3.1.7) ➡️ [@thatopen/components-front@3.2.0](https://www.npmjs.com/package/@thatopen/components-front/v/3.2.0)
- [@thatopen/ui@3.1.4](https://www.npmjs.com/package/@thatopen/ui/v/3.1.4) ➡️ [@thatopen/ui@3.2.0](https://www.npmjs.com/package/@thatopen/ui/v/3.2.0)
- [@thatopen/ui-obc@3.1.6](https://www.npmjs.com/package/@thatopen/ui-obc/v/3.1.6) ➡️ [@thatopen/ui-obc@3.2.1](https://www.npmjs.com/package/@thatopen/ui-obc/v/3.2.1)
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

### 🟰 All existing features (except Alignments, see below)

The API hasn't changed for any of the Fragments existing features, so all existing apps should be working with the newest version of the library. If you have any issues, let us know! 👍🏻

That said, if you want to use the newest features, like Fragments Edit API, you will need to regenerate your .frag models.


### 🟰 Alignments

The API hasn't changed at all, but the internal structure of Fragments has changed a bit to support parametric geometry / modelling. You just need to regenerate your .frag files (e.g. using the IfcImporter) and everything should be working without touching anything else. If you have any issues, let us know! 👍🏻


## 📙 components

### 🟰 All existing features

The API hasn't changed for any of the components existing features, so all existing apps should be working with the newest version of the library. If you have any issues, let us know! 👍🏻


## 📕 components-front

### 🟰 All existing features

The API hasn't changed for any of the Fragments existing features, so all existing apps should be working with the newest version of the library. If you have any issues, let us know! 👍🏻


### 🟰 CivilNavigators

The API hasn't changed at all, but the internal structure of Fragments has changed a bit to support parametric geometry / modelling. You just need to regenerate your .frag files (e.g. using the IfcImporter) and everything should be working without touching anything else. If you have any issues, let us know! 👍🏻

### 🟰 PostproductionRenderer

The API hasn't changed at all, but if you want to use the latest outline style (Revit Shader), you need to regenerate your .frag files (e.g. using the IfcImporter). Everything else should be working as before. If you have any issues, let us know! 👍🏻

## 📔 ui

### 🟰 All existing features

The API hasn't changed for any of the Fragments existing features, so all existing apps should be working with the newest version of the library. If you have any issues, let us know! 👍🏻

## 📓 ui-obc

### 🟰 All existing features

The API hasn't changed for any of the Fragments existing features, so all existing apps should be working with the newest version of the library. If you have any issues, let us know! 👍🏻


