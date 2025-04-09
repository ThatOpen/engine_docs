---
sidebar_position: -3
---

# 👨🏻‍💻 Introduction

Welcome to **That Open Docs**! Have you ever wanted to create your own **BIM software**, but don't know where to start? Here you will find everything you need to go from zero to hero! 🏢👩‍💻

## 🚀 Getting Started

### 💪🏻 What you can do

You can use all the libraries covered in this documentation to **create your own 3D BIM software in minutes**. All the libraries are free and open source, so you are free to distribute and sell anything you create.

These libraries are written in **JavaScript** / **TypeScript**, so you can use them to build BIM applications for:

- 🌍 **Web**: using HTML, CSS and (optionally) React, Angular, Vue, etc. 
- 📁**Servers**: using [Node.js](https://nodejs.org/en).
- 💻 **Desktop**: using [Electron](https://www.electronjs.org/).
- 📱 **Mobile**: using [React Native](https://reactnative.dev/) or importing them as iframes (e.g. in [Flutter](https://flutter.dev/?gclid=Cj0KCQjwla-hBhD7ARIsAM9tQKtnYys_qfZzrZnef2XC9CgX4ior2PT7sankU4BxHD_MrcGgySEUOgUaAvsbEALw_wcB&gclsrc=aw.ds)).

In terms of features, these libraries offer you a wide set of handy tools to create BIM software, such as:

- 🏢 **IFC** import, display, navigate, edit and export.
- 🌳 Import, display and navigate **other 3D formats**.
- 🚀 3D+2D **modelling and editing** ([work in progress!](https://github.com/ThatOpen/engine_clay)).
- 📦 **Store**, **process** and **distribute** BIM models and files.
- 🔎 3D+2D **navigation** tools
- ✍ 3D+2D **annotations**.
- 📏 BIM models **measurement**.
- 📋 **Documentation** import and export.
- 🤝 Integration with **data systems** (e.g. Sharepoint, PowerBI, Google Drive, etc).
- 🌎 Integration with **GIS systems** (e.g. Cesium, Mapbox).

:::info Do you need another features?

Feel free to open an issue in [our repos](https://github.com/ThatOpen/) or ask around in our [community](https://people.thatopen.com/). 🚀

:::


### 📋 What you'll need

The concept **BIM software** has two words, and you'll need some familiarity with both before you can jump into the pool and have fun. 🏊‍♂️ 

#### 🏢 BIM...

You have probably seen architects and engineers in movies **drawing 2D blueprints** and handling them to construction companies to make things like buildings and bridges. That's the way we have built for a long time, but now there's a better way: **BIM**.

BIM stands for **Building Information Model**. In a nutshell, instead of drawing each blueprint one by one, we make a 3D model (**M**) with information (**I**) of the object to build (**B**). We can then generate all the 2D blueprints automatically from that 3D model. This has many advantages: errors in the design can be detected earlier, the design process is more traceable, we can make simulations, etc.

:::tip Never heard of BIM before?

Don't worry! **You don't be to be an architect/building engineer** to follow these docs and create BIM software, but keep in mind that this is the domain that we will constantly refer to. Feel free to **get to our open community** and ask around! We'll be happy to help. 🍻

:::

#### 🧑🏻‍💻 ...Software

Programming is a broad topic, so we can't just start from scratch. This documentation assumes some basic knowledge of web development technologies. You will need to be familiar with basic concepts like **frontend**, **backend**, **server**, **library** and **debugging**, as well as some experience with:

| Technology   | Description                                                                                                                                                                                                                                                                                                               |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `HTML`       | Markdown langage used to define the structure of any web application.                                                                                                                                                                                                                                                     | 
| `CSS`        | Styling sheets to define the appearance of all the HTML elements within a web app.                                                                                                                                                                                                                                        | 
| `JavaScript` | Programming language of all frontend web applications, used to define their logic. Naturally, knowing TypeScript is even better, but it's not a requirement!                                                                                                                                                              | 
| `NPM`        | [Node Package Manager](https://npmjs.com/) is the most popular repository to import and publish JavaScript libraries.                                                                                                                                                                                                     | 
| `Bundling`   | Tools used to pack the code in bundles. Examples are [Rollup](https://rollupjs.org/) and [Webpack](https://webpack.js.org/). Alternatively, if you are familiar with a frontend library/framework like [React](https://react.dev/), [Angular](https://angular.io/) or [Vue](https://vuejs.org/), that's more than enough! |
| `Three.js`   | The most popular web [3D library](https://threejs.org/) in the world.                                                                                                                                                                                                                                                     | 



If you have never programmed before, this might sound overwhelming, but it's actually quite easy to learn. Anyone can learn to code, and web programming is one of the best places to start. Look around for some tutorials, get your feet wet there first, and then come back here!

:::danger How to become a BIM software developer?

There are many free resources out there to learn to code for the web, although they are not specific to BIM or the construction industry. For that reason, **we have made some courses that cover all these topics**, starting from scratch and oriented to BIM software developers.

:::

## 🐞 Reporting bugs

We work very hard to make our libraries better every day, and **you can help us**! If you find any error while using it, don't hesitate to let us know and we will take care of it as soon as possible.

This is **how** you can report a bug:

1. Go to the **Github library** that has the code you are using. If you are not sure, don't worry: just go to the [components repository](https://github.com/ThatOpen/engine_components).

2. Go to the [issues](https://github.com/ThatOpen/engine_components/issues) tab.

3. Create a **new issue**. Try to ellaborate as much as possible, explaining what you are trying to do, the behavior you expect and what the library is doing. Providing a minimal code example we can test is also super useful!

That's it! If you have questions, you can also get into our community, meet everyone and ask anything! We'll be super happy to see you there. 😊


## 📚 Navigating the docs

These docs are organized in **3 different sections**. This is a lot of information and it can be hard to find just what you are looking for, so here's a short guide of where to go from here:

___
### 🧩 Components

Everything in these libraries are **Components**. Here, you will learn [the basics](components/getting-started.md) and how to import, use and even [create your own custom components](components/creating-components.md). You will also find some useful [tutorial paths](components/tutorial-paths.md) that will help you progress throughout these docs!

___
### 📋 API

Here you will find **all the descriptions** of the classes, properties, methods and interfaces of the libraries. It's automatically generated and corresponds to the docs that you will see in your IDE when using any of the libraries.

___
### 👩🏻‍🏫 Tutorials

**Step by step tutorials** covering how to use different components, including a live application where you can see it in action. This is the best way to get your feet wet with the libraries. Check out the recommended [tutorial paths](components/tutorial-paths.md)!


## 🤝 Want our help?

But first of all, we want you to know that if you are developing a project with our technology and you would like to have our help, you can apply to be part of That Open Accelerator Program.

Sounds good? [Check it out here!](https://thatopen.com/accelerator) 🚀🚀🚀
