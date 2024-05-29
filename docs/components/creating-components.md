---
sidebar_position: 2
---

# 🦾 Making your own

## 👪 Create it

Our libraries have **many components**, but the BIM world is vast and it's impossible to cover all use cases. But that's the biggest power of components: **they are flexible and can be extended** to cover all use cases.


:::danger We like types, but you don't have to

We are going to do the examples in TypeScript, but don't worry if you only know JavaScript! Translating these examples to JavaScript would be exactly the same but removing all the type definitions. 🤝

:::


**Creating a component** is as simple as creating a class that extends the basic `Component` class. For example, let's create a "Hello world" component, whose only mission is to log a greeting message in the console. 👋🏻

```ts
import * as OBC from "@thatopen/components";

/**
 * A basic component to say hello in the console.
 */
export class HelloWorldComponent extends OBC.Component {

  static readonly uuid = "60bd6763-f9ff-4820-a04f-2054922c0297" as const;

  enabled = true;

  private readonly _message = "Hello";

  constructor(components: OBC.Components) {
    super(components);
	components.add(HelloWorldComponent.uuid, this);
  }

  greet(name: string) {
    const message = `${this._message} ${name}!`;
    console.log(message);
  }
}
```



As you can see, the structure of the component is very simple. The Component base class **requires certain things**:

- **A static UUID (v4)** that identifies it uniquely within the `Components` instance that is used to create it.

- **A constructor** where the only parameter is the object `Components`. This `Components` object will be available as a public property of the class automatically. Also, you need to add the component to the `Components` instance in the constructor.

- **An `enabled` property** that indicates whether the component is active or not.

Now, you can use this component just as any of the components you will get to know in the [tutorials](../Tutorials/Components/Core/Worlds)! 👩🏻‍🏫


## 🌍 Availability

As you can see, components have a static UUID (v4) and are registered in the `Components` instance. That way, we make sure that they are **unique and globally available** through your entire application (or `Components` instance). You can access that component instance anywhere else in your application like this:

```ts
// Somewhere in your app:

const helloWorldComponent = new HelloWorldComponent(components);

// Somewhere else in your app:

const hwComponent = await components.get(HelloWorldComponent);
```

We strongly recommend that you always get the **library built-in components** using the `get` method directly, never instantiating them yourself. Don't worry, if they are not instanced, they library will do it for you automatically! 🤖


## ♻️ Lifecycle

The library will take care of **updating your components** and **releasing their memory** when your 3D app is diposed, preventing memory leaks. You can set up your component easily using the interfaces provided by the library. For example:

- With `Updateable`, the library will automatically update your component every frame. 🔄️

- With `Disposable`, the library will release the memory of your component when the application is disposed, preventing memory leaks. 🧹

Let's see them in action!

```ts
import * as THREE from "three";
import * as OBC from "@thatopen/components";

/**
 * A basic component to say hello in the console.
 */
export class HelloWorldComponent extends OBC.Component
  implements OBC.Disposable, OBC.Updateable  {
	static readonly uuid = "0f89b34b-fc6b-4b97-b56d-1edeb0a308a2";

	readonly onAfterUpdate = new OBC.Event();

	readonly onBeforeUpdate = new OBC.Event();

    readonly onDisposed = new OBC.Event();

	enabled = true;

	someMesh = new THREE.Mesh(); 

	private readonly _message = "Hello";

	constructor(components: OBC.Components) {
		super(components);
		components.add(HelloWorldComponent.uuid, this);
	}

	greet(name: string) {
		const message = `${this._message} ${name}!`;
		console.log(message);
	}

	dispose() {
		this.enabled = false;
		// Make sure to clean up the events
		this.onBeforeUpdate.reset();
		this.onAfterUpdate.reset();
		// Use the disposer component to easily dispose THREE.js objects
		const disposer = this.components.get(OBC.Disposer);
		disposer.destroy(this.someMesh);
        this.onDisposed.trigger();
		this.onDisposed.reset();
    }

    async update(delta?: number) {
		this.onBeforeUpdate.trigger();
		console.log("Updated! Delta: " + delta);
		this.onAfterUpdate.trigger();
	}
}
```

This is it! Now, the library will take care of **updating and disposing** your component automatically. 💪🏻🤖

## 🧹 Cleanliness

It's important that you keep your components **clean and tidy**! To do that, check out the short guide for [avoiding smells when creating components](clean-components-guide.md). 🪐

## 💅🏻 UI

We strongly recommend that you **don't include UI logic in your components**. Rather, we have a UI Components library that is specific for building BIM UIs super easily. The code of both libraries (components and UI components) is completely decoupled. We encourage you to do the same. 🍐🍎 

Check out the **UI Components tutorials** for more details about how to build your own UI elements.