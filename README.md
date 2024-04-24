<p align="center">
  <a href="https://thatopen.com/">TOC</a>
  |
  <a href="https://docs.thatopen.com/intro">documentation</a>
  |
  <a href="https://platform.thatopen.com/app">demo</a>
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

## Local development

This repository uses `yarn@4`.

> You can use nodejs' [corepack](https://nodejs.org/api/corepack.html) if you don't want to install yarn.
> ```bash
> corepack enable
> ```


Install all dependencies

```bash
yarn install
```

Run docusaurus local devserver

```bash
yarn start
```

**TODO**

Add documentation on `docs-generator`