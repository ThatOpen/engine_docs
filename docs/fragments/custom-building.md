---
sidebar_position: 2
---

# 🦾 Building your own exporter/importer

## 🎯 Introduction

Fragments is built on top of [Flatbuffers](https://flatbuffers.dev/), which allow to create **binary formats that are compatible with over 15 programming languages**. In a nutshell, this is what you can do: 👇🏻

- 🌝 You can **automatically create a fragments importer / exporter**, allowing you to **read / write Fragments files** created by you, by us or by other developers.

- 🌚 You **can't have our powerful 3D viewer / BIM tools** in your programming language, because we created all that in JavaScript / TypeScript. That said, JavaScript / TypeScript is one of the most flexible stacks nowadays, so if you want our 3D technology, **there's a good chance you can embed it in your app**.

That said, let's get started! 🚀

## ✍🏻 Creating a Fragments exporter/importer

To create your own Fragments exporter / importer **you just need to do 3 things**:

1. 📃 **Download the Fragments schema file**, which you can find [here](https://github.com/ThatOpen/engine_fragment/blob/main/packages/fragments/flatbuffers/index.fbs).

2. 🤖 **Download the flatbuffers executable file** from [their official release page](https://github.com/google/flatbuffers/releases/tag/v25.2.10).

3. ▶️ **Execute the flatbuffers executable** using a terminal (e.g. VS Code terminal) passing the path of the .fbs file and the language you want to work with. You can find an example for each supported language [here](https://flatbuffers.dev/tutorial/#compiling-schema).

If you did everything right, you should now **have your own Fragment importer / exporter** in your programming language. In short: you can start reading and writting fragments! We'll give you some pointers to do this in the following points. 🥳

:::tip Beware: flatbuffers are strict

If you use a low level programming language like **C**, **C++** or **Rust**, flatbuffers will **feel like home**. Feel free to skip this section. But if you use a flexible programming language like **Python** or **JavaScript**, flatbuffers may be a bit weird for you. 👀

The main reason is because flatbuffers are **very strict** when reading and creating files. In languages like JavaScript or Python you can declare objects or arrays and then extend or shrink them at will, twist variable types as you like and pretty much do anything you can think of. Flatbuffers are strict and rigid. You really have to stick to their data types and follow their rules to make them work. But hey, **in exchange for this strictness, you'll get blazing speed!** 🚀🚀🚀

:::

### ⬇️ Importing Fragments

The very first thing you should to to familiarize yourself with Fragments and flatbuffers is **reading an existing fragments file**. You can find some in our repositories, but our recommendation is that you **download the simple wall** from the [schema example](./schema#-check-it-out) (just press the wall button and then the download button). You can also load your own IFC file there to get its fragment file and download it. 🏃🏻‍♂️

Now you can follow the [flatbuffers reading tutorial](https://flatbuffers.dev/tutorial/#deserialization) (in your programming language) to **read the file and traverse all the information inside it**. If you do it well, you should be able to see the same things that you see in the schema live example. 🚀

### ↗️ Exporting Fragments

Once you are able to read a fragments file successfully and have familiarized yourself with the flatbuffers API, you should be **ready to export your own fragments files**. To do this, you'll need to study and understand [the schema](./schema) if you haven't already, as well as the [flatbuffers docs for exporting](https://flatbuffers.dev/tutorial/#serialization). 📚

As a reference you can **check out our IFC - Fragment exporter in typescript**. It has quite a number of pieces because extracting the data from IFC is not easy, but if you pay close attention to [this file for geometry](https://github.com/ThatOpen/engine_fragment/blob/main/packages/fragments/src/Importers/IfcImporter/src/geometry/index.ts), [this file for properties](https://github.com/ThatOpen/engine_fragment/blob/main/packages/fragments/src/Importers/IfcImporter/src/properties/property-processor.ts) and [this file to build the model with the other 2](https://github.com/ThatOpen/engine_fragment/blob/main/packages/fragments/src/Importers/IfcImporter/index.ts), you'll get the feeling of exporting with flatbuffers. 🧑🏻‍💻

We might make more examples in the future, but **this should be enough to build your exporter**! 👏🏻