---
sidebar_position: 0
---

# 🚀 Getting started

## 👩🏻‍🏫 Fragments ABC

**Fragments** is our open native format (.frag). It has various benefits over other formats:

- 🏎️ **Fast**: With Fragments we can visualize gigabytes of BIM data in seconds, even in modest devices. It's not magic: it's because Fragments was specifically designed for this.

- 💎 **Performant**: Fragments doesn't just open gigabytes of data, hundreds of files, millions of objects in seconds. It can run all that data at 60 fps inside the browser while consuming very little RAM memory. This performance also affects the size of the files: a 2GB IFC STEP file becomes an 80 mb Fragments file.

- 🔌 **More than a format**: We have built all our BIM tools on top of Fragments. That means that using Fragments is not just using a format, but getting a whole free open source toolkit to build powerful full-stack BIM software in minutes. You can check them all out in the Tutorials section of these docs.

- 🌍 **Compatible**: Fragments is built with [flatbuffers](https://flatbuffers.dev/), a free and open source library from Google to create binary formats. This means that it's compatible with more than 15 programming languages.

- 🧹 **Editable**: Fragments is not just for viewing, but also for editing data (both properties and geometry).

- 🌍 **Free and Open source**: Fragments is completely free and open source (MIT License), so you can use them even for commercial purposes for free. 


:::danger Why don't you use X?

Yes, we know there are plenty of formats out there, including glTF, glb, IFC STEP, etc. So **why bother creating our own format** when we can simply use an existing one and not worry about its maintenance?

We really would like to use another format, but we've tried for years and **they were not enough**. Not fast enough, not performance enough, not editable enough... We aren't saying it's impossible to make something as good with them as we did with Fragments, just that we weren't able after years of trying. 😅

As of today, Fragments is not an official standard. It's a technology we created and use as native format because we needed it. It's actively maintained by us, and it **can open, run and edit gigabytes of BIM data in seconds**.

:::

If you are building BIM software with our libraries, **you don't need to know much about fragments and happily treat them as a black box**. We do everything for you and provide the necessary APIs to work with them. If you want to build something more custom (like a **Fragment importer / exporter**) or your own tools on top of them, you'll find everything you need in this section of the docs. 😉

But first, let's get our feet wet with the basics: **start using fragments** in one of your projects! 🏃🏻‍♂️

## ⛷️ Try them!

You can find the Fragments library [here](https://github.com/ThatOpen/engine_fragment) and the npm repo [here](https://www.npmjs.com/package/@thatopen/fragments). You can import it into your project like this:

```bash
npm i @thatopen/fragments
```

Most of our libraries are based on [Three.js](https://threejs.org/), so you'll also need to import it. Make sure it's the [same version](https://github.com/ThatOpen/engine_components/blob/main/package.json) as the one used by our libraries.

```bash
npm i three
```

Finally, you also need to **install some peer dependencies**. These are other libraries we made and didn't include as regular dependencies to enable more flexible bundling scenarios. Again, make sure it's the [same version](https://github.com/ThatOpen/engine_components/blob/main/package.json) as the one used by our libraries:

```bash
npm i web-ifc
```

That's it! Now you are ready to start using Fragments. But where to start? [Here you have a nice tutorial](../Tutorials/Fragments/Fragments/IfcImporter) to **make an app that converts IFC files to fragments** in less than 5 minutes: 🏇🏻

<iframe src="https://thatopen.github.io/engine_fragment/examples/IfcImporter/index.html"></iframe>

Once you convert your files to fragments, they will **load very, very fast**. [Here you have another tutorial](../Tutorials/Fragments/Fragments/FragmentsModels) to load fragments directly. While you can convert files to fragments on the fly like in the first example, **the recommended approach is to store the Fragments** and then always load them, like in this example: 😎

<iframe src="https://thatopen.github.io/engine_fragment/examples/FragmentsModels/index.html"></iframe>


Cool, right? Now you can convert your bloated BIM data to fragments to **load them in seconds in your app**. If you need some guidance in your journey to discover all the components that we offer, check out the [tutorial paths](tutorial-paths.md). If you want to know more about components, keep reading! 👇🏻


## 🔌 Compatibility

Fragments is compatible with +15 programming languages because it's based on flatbuffers. That said, there are 2 big scenarios when using Fragments:

- 🌝 **If you use JavaScript / TypeScript**: you can import / export fragments by using our libraries AND use all the tech stack we've built around them: the powerful 3D viewer, all the BIM tools, our UI system, etc.

- 🌚 **If you use another programming language**: you can import / export fragments by building your own custom importer / exporter. You won't be able to use our 3D viewer / BIM tools because they were built in JavaScript / TypeScript, but you can build / use your own in your own tech stack.

:::info Why using fragments outside JavaScript / Typescript?

One of the main reasons to use Fragments is being able to use all the free/open-source tech stack we've built around them, like the powerful 3D viewer, the BIM tools, etc. So if you are working on another stack (Python, C#, C++, etc), you might be wondering **what's in it for you**. This is:

- ⏩ **Fast and compact**: A 2GB IFC STEP equals an 80 MB fragment, with all geometries and properties, which can be read in a couple of seconds even in modest devices.

- 🚪 **Opens the door for an integration with our technology**: While you might already have a certain tecnology stack, using Fragments might open the door to add a new piece to your app built with our technology. JavaScript / TypeScript are very flexible, so embedding our tecnology in your solution is likely feasible. This means you can have a powerful 3D viewer, a whole new set of BIM tools and more. Yes, all free and open source.

- 🫱🏻‍🫲🏻 **Compatibility with other apps using our tools**: As this project grows, there are more and more startups using our free/open-source libraries. All of them use Fragments natively. So if you decide to go for Fragments, you'll be natively compatible with all of them for free.

:::

## ⚖️ Current state

Fragments is NOT a standard, it's a format we created because we needed something **lightweight, fast, efficient and easily editable**. We tried with other formats for years, but they weren't enough. We wish we could rely on other formats so that we didn't have to invest time and resources in maintaining this, but we had no choice. Now **we maintain and develop Fragments actively**. 💪🏻

Fragments are free and open source. We built it for us, but as everything we have built until now, **if someone else find them useful, we'll be happy**! 😎
