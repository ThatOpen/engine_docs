<p align="center">
  <a href="https://thatopen.com/">TOC</a>
  |
  <a href="https://docs.thatopen.com/intro">documentation</a>
  |
  <a href="https://people.thatopen.com/">community</a>
  |
  <a href="https://www.npmjs.com/package/bim-fragment">npm package</a>
</p>

![cover](https://thatopen.github.io/engine_components/resources/cover.png)

# That Open Docs <img src="https://thatopen.github.io/engine_components/resources/favicon.ico" width="32"/>

This library contains the official docs for all the libraries of That Open Company.

- It uses [docusaurus](https://docusaurus.io/) to build them.
- It gathers code from our repos and build the API docs using [TypeDoc](https://typedoc.org/).
- It gathers the HTML examples from our repos and build the tutorials.

If you see anything outdated in the [docs page](https://docs.thatopen.com/intro), feel free to open an issue. If the issue is specific to a specific repository, please open the issue in that repository!

If you have any questions, you can also ask around in our [community](https://people.thatopen.com/).


## 🤝 Want our help?
Are you developing a project with our technology and would like our help?
Apply now to join [That Open Accelerator Program](https://thatopen.com/accelerator)!


## Local development

### BEFORE YOU START

This repository just has the general articles and the code to bring all the docs together and present it in a nice way.

The API documentation and tutorials for each library are not written in this repository, but in each library. That way, we can:

- Make the API docs in TypeDoc, making them available in Intellisense on all IDEs.
- Check that the tutorials keep working when we make changes / fixes / new features to the libraries.

For example, imagine you are looking for the `Worlds` API documentation or tutorial. You won't find them here. It's in the `components` repository (as the `Worlds` class belongs to that repo). You can find them [here](https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/core/Worlds/index.ts) and [here](https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/core/Worlds/example.ts) respectively.

This means that if you want to raise an issue or fix a typo from the API or the tutorials, this is not the place to do so. 

> If you are not sure the repository where the issue belongs, feel free to create the issue here and we'll redirect it to the right repo. 👌🏻

That said, maybe you want to execute our docs locally. We'll teach you how to do that in the following steps.

### Clone the libraries locally

The docs are build centrally to have everything in the same place. This means that the docs require the libraries to be **present at the same directory**. You can achieve that by running the following commands:

```bash
git clone https://github.com/ThatOpen/engine_docs/
git clone https://github.com/ThatOpen/engine_components/
git clone https://github.com/ThatOpen/engine_fragment/
git clone https://github.com/ThatOpen/engine_ui-components/
```

### Install all dependencies

You can do it with the following command:

```bash
yarn install
```

### Setting up the docs

To generate the docs locally, you can run the following command. This will copy the libraries automatically and set everything up so that you can execute and build the docs.

```bash
yarn docs:local
```

### Running this locally

Now you can run the docs locally using the following command:

```bash
yarn start
```

### Building the docs

Finally, to build the docs, you can execute the following command:

```bash
yarn build:local
```

If you have previously executed `yarn docs:local`, you can also just execute the following:

```bash
yarn build
```
