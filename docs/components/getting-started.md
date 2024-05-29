---
sidebar_position: 1
---

# 🚀 Getting started

## 👩🏻‍🏫 Component ABC

**Components** are the building blocks of all our libraries. In short, components have 2 things:

- 🌍 **Globally availability**: BIM applications have many parts, and in many occasions we will need to access logic from several places in our app easily and in a decoupled manner. 

- 🧹 **Lifecycle management**: 3D applications need to be able to update their parts at every frame. In addition, Three.js applications need to manage memory to ensure that we don't have memory leaks, especially when using technologies like React, Angular, etc. 

:::tip Why components?

Our goal is to allow everyone to create BIM software. But that's not enough; creating a BIM software is no easy task, especially when doing it alone (as a company or individual). 

Wouldn't it be nice if all the software that we develop spoke the same language? That way, we could all share, buy and sell it to solve each other's problem, creating a decentralised ecosystem. That's exactly what **Components** are: a very basic set of rules that allows everyone to build their own tools on top of the same foundations, so that everything is compatible. 👞👟🥿👠

:::

The cool thing about components is that **they are extensible**. We provide a wide set of components that cover the basic features of any BIM app, but buildings are complex and there are many use cases. Using our technology as a basis, you'll be able to **create your own components** in no time. We also cover that here. 😉

But first, let's get our feet wet with the basics: **start using components** in one of your projects!

## ⛷️ Try them!

**We have many libraries** of components. The reason is that some of those components are big, and having everything in a single repository would be a mess! However, the main one is [this one](https://github.com/ThatOpen/engine_components). You can import it in your project using `npm`, `yarn` or any other package manager of your choice:

```bash
npm i @thatopen/components
```

Most of our libraries are based on [Three.js](https://threejs.org/), so you'll also need to import it. Make sure it's the [same version](https://github.com/ThatOpen/engine_components/blob/main/package.json) as the one used by our libraries!

```bash
npm i three
```

Finally, you also need to **install some peer dependencies**. These are other libraries we made and didn't include as regular dependencies to enable more flexible bundling scenarios. Again, make sure it's the [same version](https://github.com/ThatOpen/engine_components/blob/main/package.json) as the one used by our libraries:

```bash
npm i @thatopen/fragments
npm i web-ifc
```

That's it! Now you are ready to start using components. But where to start? [Here you have a nice tutorial](../Tutorials/Components/Core/Worlds) to make your first steps and **build a 3D app that looks like this** in less than 5 minutes: 👇🏻

<iframe src="https://thatopen.github.io/engine_components/examples/Worlds/index.html"></iframe>

Cool, right? But of course, as you can imagine, there's a long way between this simple app and a **full-fledged BIM application**. If you need some guidance in your journey to discover all the components that we offer, check out the [tutorial paths](tutorial-paths.md). If you want to know more about components, keep reading! 👇


## 🔌 Compatibility

You might be wondering where you can use these components. In short, **anywhere that runs JavaScript**! You can use them on vanilla web apps, on any library/framework (Vue, React, Angular, Svelte, etc). Many of them are also compatible with **Node.js** (for backend apps), **React Native** (for mobile apps) and **Electron** (for desktop apps).

:::danger What about types?

We write all our code in **TypeScript** and document it with **TSDoc**. That means that our code is natively type-safe and that you'll get the same documentation that you'll find in the API section of these docs. 📖📖

:::

## 👩🏻‍🔬 Testability

#### 🧪 Community tests

All the running 3D apps that you see in these docs are not hardcoded: they are automatically deployed from the latest version of the code of our repositories and imported here. **Any change in the repositories will automatically show up here.**

Each component has a minimal, self-contained tutorial app exposing all its features. That means that each person looking at a tutorial of a specific component and trying it in the 3D app is actually testing that component. Having **thousands of users navigating through these docs**, if anything breaks, we'll know it right away!

#### 🧪 Unit tests

We are goint to implement the unit tests of all the code of all our libraries using AI, Jest, Typescript and human beings 🙂. It's a work in progress, but we hope to have it ready soon!