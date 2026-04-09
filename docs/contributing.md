---
sidebar_position: -3
---

# 🤝 Get involved

Want to help us make this project even more amazing? Great! **Contributing is easy**, and on this page you'll find a quick guide on how to do it. 👇🏻

There are basically 3 places where you can help:

## 🐞 Spotting bugs

Have you found a bug / something to improve? **Create an issue in the corresponding repository** (if it doesn't exist yet) so that we can start working on it! 💪🏻

**If you are not sure where** the issue belongs, you can just create it in the [components repository](https://github.com/ThatOpen/engine_components/issues/) and we'll redirect it to the right place!

## 🍻 Visiting the community

Our [community](https://people.thatopen.com/) is **the heart of our project**. It's the place where all BIM software developers meet, share their wins and learn from each other.

You can be part of it by:

- **Showing** us what you built with our libraries!

- **Answering** questions of other BIM software developers.

- **Sharing** resources / tutorials.

- **Starting** interesting debates and conversations.


## 👨🏻‍💻 Coding

:::tip What you'll need

The knowledge you need to help us depend **on which part of the libraries** you want to help us with. In general, basic knowledge of web development, TypeScript and Three.js should suffice. If you are not sure, don't hesitate to **ask us**!

:::

This includes **adding features** and enhancing existing ones, **fixing bugs** or **writing docs**. The steps to contribute are the following:

### 🙏🏻 1. Ask first

We have been creating and maintaining our libraries for years for free, and there is nothing we appreciate more than people who want to help us. 💕

:::note Meritocracy over anarchy

At That Open Company we believe in a **merit-based governance model** over the libraries. That means that the **people who have helped the most** and for the longest have the most decision-making power over them.

:::

Therefore, if you use the libraries and miss something, or just want to be part of the project, we strongly recommend that you **ask first**. It can save yourself days of work doing a PR that might be rejected by the maintainers. Also, if you ask, **we'll gladly help you out** in everything you need to start developing. 🚀

You can ask by **opening a feature issue** in any of our repositories or **adding a comment to any existing one**. That way, you open a friendly discussion where people can participate and maintainers decide. If you are not sure where the issue belongs, you can just create it in the [components repository](https://github.com/ThatOpen/engine_components/issues/) and we'll redirect it to the right place!


### 🚀 2. Start coding

Once you have asked, and got a positive answer from one of the maintainers, **you can start coding**! To add / edit code of the library, you will need to:

1. Install yarn using `npm i -g yarn`.

2. **Create a fork** of the repository.

3. Clone your fork to your local machine.

4. **Create a branch** to work on that specific issue, and [link that branch to the issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue).

5. Use the command `yarn install` to install all the dependencies of that library.

6. Use the command `yarn dev` to run a local server where you can see the changes you make in the corresponding `example.ts` files. To see the changes, you have 2 options: 
   1. Run `yarn build` in the corresponding package. 
   2. To see the changes in real time, you can substitute the `import` statement path of the library by `../..`. For instance, in an `example.ts` in the `@thatopen/components` package, you can substitute the line `import * as OBC from @thatopen/components` by `import * as OBC from ../..`, and you'll see the changes you make to the code without needing to rebuild. Don't forget to change this statement back when you are done!

7. **Work on your fork** of the repository locally. Please follow the [basic clean rules](./components/clean-components-guide.md)!

8. After making all your commits with the changes, run `yarn build-libraries` to check that you haven't created any errors in the examples.

9. **Create a pull request**. The name should follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) convention. If you are not sure, check out the title past pull requests!

Then, someone from our team will reviewed it and, if everything is ok, merge it. That's it! Easy, right? 😋 We'll help you get started and give you anything you needs, so don't hesitate to reach out!

## 📏 Code guidelines

Before opening a PR, please follow the rules below. They keep our releases smooth and our docs page rendering correctly. **If you catch a violation, fix it at the source** — it's almost always cheaper than cleaning up later.

These apply to **all five packages** (`fragments`, `components`, `components-front`, `ui`, `ui-obc`).

### 1. 📝 JSDoc rules

The TypeDoc plugin that powers this docs site renders class/interface/type/function summaries into a **markdown table**. Anything with a newline in the description breaks that table. To keep rendering reliable, follow these rules:

#### 1.1 The summary of every exported item must be a single line

Applies to `class`, `abstract class`, `interface`, `type`, `const`, `function` — anything TypeDoc puts in an index table.

```ts
// ❌ Bad — two description lines
/**
 * Manages block insertions across all drawings.
 * A block is a reusable named geometry definition.
 */
export class BlockAnnotations { ... }

// ✅ Good — single line description
/** Manages block insertions across all drawings. */
export class BlockAnnotations { ... }
```

If your description does not fit comfortably on one line, **move the extra content to the constructor JSDoc** (for classes) or rephrase (for interfaces/types/functions):

```ts
/** A single technical drawing — the core spatial aggregate. */
export class TechnicalDrawing {
  /**
   * Brings together a THREE.Group and a collection of viewports.
   * Moving or rotating the container repositions the entire drawing
   * in 3D world space without affecting local coordinates.
   */
  constructor(components: Components) { ... }
}
```

:::note

`@param`, `@returns`, `@example`, `@template`, `@fires`, `@element` tags are fine even if they make the JSDoc span multiple lines — they get rendered in their own sections, not in the summary cell. The rule is about the **description text** only.

:::

#### 1.2 Never put multiline code blocks inside `@param` descriptions

TypeDoc inlines `@param` descriptions into a markdown table cell, and fenced code blocks inside a table cell turn into `<code>{...}</code>` HTML. MDX then tries to parse the literal `{` as a JSX expression and fails to build the docs.

```ts
// ❌ Bad — fenced code block in @param description
/**
 * @param config - The configuration.
 * Default configuration:
 * ```ts
 * { attributesDefault: true }
 * ```
 */

// ✅ Good — plain prose
/**
 * @param config - The configuration. Defaults to returning all built-in
 * attributes and no relations.
 */
```

If you need a longer example, put it under `@example` (which gets its own section) instead of inside `@param`.

#### 1.3 Escape literal `{` / `}` in descriptions

Anywhere else in a JSDoc description, literal curly braces — even inside prose — can choke MDX. Wrap them in backticks so they become inline code:

```ts
// ❌ Bad — MDX will try to parse { value, label? } as a JS expression
/** An array of mark objects ({ value, label? }) that define snap points. */

// ✅ Good — backticks render the braces as literal text
/** An array of mark objects (`{ value, label? }`) that define snap points. */
```

Same rule for TypeScript generics that appear in prose (`` `Map<string, number>` ``) — wrap them in backticks.

### 2. 🌐 `example.ts` rules

Examples in `src/**/example.ts` are bundled into the docs site and shipped to `docs.thatopen.com`. That means every URL has to work **from a browser loading the tutorial page**, not from your local dev server.

#### 2.1 All `fetch` calls must use absolute github.io URLs

```ts
// ✅ Good — absolute github.io URL
const arqFile = await fetch(
  "https://thatopen.github.io/engine_components/resources/frags/school_arq.frag"
);

// ❌ Bad — relative path, 404s on deployed docs
const arqFile = await fetch("/resources/frags/school_arq.frag");
```

The domain should be the package's own github repo:

| Package | Domain |
|---|---|
| fragments | `https://thatopen.github.io/engine_fragment/resources/...` |
| components / components-front / ui / ui-obc | `https://thatopen.github.io/engine_components/resources/...` |

Exception: `worker.mjs` always lives in `engine_fragment/resources/` because the worker ships with the fragments package.

:::tip

Files named `test.ts` (not `example.ts`) are not bundled into the docs. They can keep using `/resources/...` for local dev.

:::

#### 2.2 Adding a new resource? Commit the file to the repo

If your new example fetches `resources/foo/bar.json`, the file must live in the repo's `resources/` folder (which is what github.io serves). Checklist:

- [ ] Add the file to `resources/<subfolder>/`
- [ ] Reference it with the absolute github.io URL in `example.ts`
- [ ] Commit the resource file along with the example update

### 3. 🧱 web-ifc and wasm URLs

When you bump `web-ifc` in `package.json`, update **every reference** to its wasm CDN URL at the same time. Grep for `web-ifc@` and rewrite them all:

```ts
// package.json
"web-ifc": "0.0.77"        // bumped

// example.ts — must match
wasm: { path: "https://unpkg.com/web-ifc@0.0.77/", absolute: true }
```

Out-of-sync versions will load wasm that doesn't match the runtime API and produce obscure errors at fetch time.

### 4. 📊 Chart examples

#### 4.1 Use positive-only data for pie/doughnut/polarArea

Negative slices make no visual sense on a pie chart and look broken.

```ts
// ❌ Bad — random signed values on a pie chart
const value = Math.floor(Math.random() * 200 - 100);

// ✅ Good — positive values for pie-family charts
const value = Math.round(Math.random() * 90 + 10);
```

Reserve signed random values for bar/line/radar charts where negatives are meaningful.

#### 4.2 Transparent borders on a dark theme

The `bim-chart` default `borderColor` is `#000000`, which draws a harsh black outline on the dark UI theme. Set it to transparent when you create a chart in an example:

```ts
chart.borderColor = "#00000000";
```

### 5. 🎨 `example.html` theme

Every `example.html` should use the same theme class as its sibling examples in the same folder. Our default is **dark**:

```html
<html lang="en" class="bim-ui-dark">
```

A stray `bim-ui-light` will make one example render on a white background while the rest use the dark theme — easy to notice in review, easy to miss in development.

### 6. 🧹 Don't ship debugging leftovers in `example.html`

When you locally test a new example, you may temporarily change things like:

- the `<script type="module" src="./test.ts">` tag (point at a test entry)
- the `<title>` to "Document" or a working name
- CSS margin tweaks for debugging

**Revert these before committing** — otherwise you'll ship broken tutorials.

### 📋 TL;DR checklist

- [ ] Class/interface/type/function summary: **one line**.
- [ ] Never put fenced code blocks inside `@param`.
- [ ] Curly braces in JSDoc prose: wrap in backticks.
- [ ] `example.ts` fetch calls: **absolute github.io URLs only**.
- [ ] Bump web-ifc in package.json? Update every wasm URL at the same time.
- [ ] New resource file? Commit it to the repo's `resources/` folder.
- [ ] `example.html` theme: `bim-ui-dark`, not `bim-ui-light`.
- [ ] Never commit debugging leftovers (`./test.ts`, `<title>Document</title>`, etc.).

