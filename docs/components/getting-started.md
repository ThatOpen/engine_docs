---
sidebar_position: 1
---

# Getting started

**Components** are the building blocks of all our libraries. In short, a component is a bunch of tested code that has a 
specific set of features and can be used through a documented API. Components can do anything: viewing a 3D scene,
loading an IFC, exporting floor plans, and even 3D modelling.

:::tip Why components?

Our goal is to allow everyone to create BIM software. But that's not enough; creating a BIM software is no easy task, especially when doing it alone (as a company or individual). 

Wouldn't it be nice if all the software that we develop spoke the same language? That way, we could all share, buy and sell it to solve each other's problem, creating a decentralised ecosystem. That's exactly what **Components** are: a very basic set of rules that allows everyone to build their own tools on top of the same foundations, so that everything is compatible.

:::

The cool thing about components is that they are extensible. We provide a wide set of components that cover the basic features of any BIM app, but buildings are complex and there are many use cases. Using our technology as a basis, you'll be able to create your own components in no time. We also cover this in this documentation. 😉

But first, let's get our feet wet with the basics: start using components in one of your projects!

## Try them!

We have many libraries of components. The reason is that some of those components are big, and having everything in a single repository would be a mess! However, the main one is [this one](https://github.com/IFCjs/components). You can import it in your project using `npm`, `yarn` or any other package manager of your choice:

```bash
npm i openbim-components
```

Most of our libraries are based on [Three.js](https://threejs.org/), so you'll also need to import it:

```bash
npm i three
```

That's it! Now you are ready to start using components. But where to start? Here you have a nice tutorial to make your first steps and build a 3D app that looks like this in less than 5 minutes:

<iframe src="https://ifcjs.github.io/components/src/core/SimpleScene/index.html"></iframe>

Cool, right? But of course, as you can imagine, there's a long way between this simple app and a full-fledged BIM application. If you need some guidance in your journey to discover all the components that we offer, check out the [tutorial paths](tutorial-paths.md). If you want to know more about components, keep reading! 👇

## Compatibility

You might be wondering where you can use these components. In short, anywhere that runs JavaScript! You can use them on vanilla web apps, on any library/framework (Vue, React, Angular, Svelte, etc). Most of them are also compatible with Node.js (for backend apps), React Native (for mobile apps) and Electron (for desktop apps).

:::danger What about types?

We write all our code in TypeScript and document it with TSDoc. That means that our code is natively type-safe and that you'll get the same documentation that you'll find in the [API section of these docs](../api/index.md).

:::

## Testability

#### Unit tests

All our components are guaranteed to work while using their APIs directly or extending them, and our testing system guarantees that. All the code of all our libraries is unit-tested using AI, Jest, Typescript and human beings 🙂. You can check it for each repository in real time looking at the badge:

[![Tests](https://github.com/IFCjs/components/actions/workflows/tests.yaml/badge.svg)](https://github.com/IFCjs/components/actions/workflows/tests)

Regarding the coverage, each component in our repositories is contained in a folder that follows the following structure:

- `index.ts`: the entry point for the logic.
- `index.d.ts`: the typed tests.
- `index.html`: a tutorial app showing how to use it.

Following this structure, it's easy to check that all the components in the library are fully tested.

#### Community tests

All the 3D apps that you see in these docs are not hardcoded: they are automatically deployed from the latest version of the code of our repositories and imported here. Any change in the repositories will automatically show up here.

Each component has a minimal, self-contained tutorial app exposing all its features. That means that each person looking at a tutorial of a specific component and trying it in the 3D app is actually testing that component. Having thousands of users navigating through these docs, if anything breaks, we'll know it right away!