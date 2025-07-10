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


