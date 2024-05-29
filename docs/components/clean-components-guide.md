---
sidebar_position: 3
---

# 🧹 Keeping them clean

## 🧽 Basics

Always extend from the base `Component` class. 👪

```tsx
import * as OBC from "@thatopen/components"

export MyComponent extends OBC.Component {
	// ...
}
```

Always name the **base file** of your component `index.ts` and store it in **a folder with the component name**. If you need to include other supporting files, create a `src` folder in the component folder. You can call those supporting file whatever you want. This is a basic folder structure: 🗃️

- MyComponent
    - src

      - supporting-file-1.ts

      - supporting-file-2.ts

      - index.ts


## 🧼 TypeScript

Follow the **Single Responsibility Principle**. 🥇

Always name private members with **underscore**. 🥷🏻

Avoid using `!` in property fields. If a property element is not initialized in the constructor, you can either use `?`, or **create a getter** to assert that it exists before getting it, like this:

```tsx
private _customProperty?: string;

get customProperty(): string { 
	if(!this._customProperty) {
		throw new Error("Custom property not initialized!");
	}
	return this._customProperty;
 }

```

Avoid using `any` as much as possible. ❌

Never define private properties in the constructor. **Make them explicit** beforehand: 📋

```tsx
/*Incorrect*/
constructor(private _components: Components)

/*Correct*/
private _components: Components
constructor(components: Components) {
	this._components = components;
}
```

Always **make events readonly** and initialize them directly. ⚡

```jsx
readonly onCreated = new OBC.Event<number>()
```

Always make sure to **know the interfaces** you can implement when creating your component (i.e. `Creatable`, `Hideable`, `UI`, etc), that way we keep things uniform in terms of properties and methods naming and types.

## 📚 Documentation

In tutorials, **try to not reference specifics** inside paragraphs. That allows to easily update the tutorial code without need to also update the paragraphs. 👇🏻

```tsx
/*❌ Incorrect */
/*MD
To add a cube to the scene, you need to call scene.add()
*/

scene.add(cube)

/*✅ Correct*/
/*MD
To add a cube to the scene, just add the following code line!
*/

scene.add(cube)
```

## 🧠 Memory management

**Memory management is critical** when using Open BIM components. Not paying attention to this can result in applications that consume more and more memory, up to a point in which it **freezes / crashes**. This is especially relevant when using SPA (Single Page Application) libraries and frameworks, like **React**, **Angular**, **Vue**, etc. 🛑

To make sure your component **doesn’t cause memory leaks** and stays efficient, you need to make sure that:

- It is added to the `components` instance in the constructor like specified in the [component creation guide](./creating-components.md#-create-it).

- It implements the `Disposable` interface. This will force you to implement a `dispose()` method that will be called automatically by the library when `components.dispose()` is called. You can **add all the clean up logic inside this method**. You also need to add a `onDisposed` event so that you can subscribe to the deletion of that component to clean up. 

There are some things that you want to clean up inside the `dispose` method:

### 🥎 3D objects and materials

Three.js needs to [manually release the memory](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects) of the **geometry** and **materials** that are not used anymore. If your component creates any new geometry or material, you need to keep track of it and get rid of it. You can do this in 2 ways:

1. 🧹 Using the Three.js `dispose` method to **delete all geometries and materials**, including their children.

2. 🧹 Using the `Disposer` component provided by the components library, which **does everything for you**. 

To make sure that the browser gets rid of this memory, you should also **leave this data out of scope** (e.g. emptying the array where they are after disposing it). For instance, if you are keeping track of all your meshes in an array called `meshes`, you can get rid of it like this: 👇🏻

```tsx
import * as THREE from "three";
import * as OBC from "@thatopen/components";

class YourComponent extends Component implements Disposable {

	// ...

	readonly onDisposed = new OBC.Event();

	private _meshes: Mesh[];

	dispose() {
		// ...
		const disposer = this.components.get(OBC.Disposer);
		for(const mesh of this.meshes) {
			// The disposer gets rid of geometries and materials
			// including children
			disposer.dispose(mesh);
		}
		// Removing all references to them
		// in arrays an object is critical for this to work
		this._meshes = [];
		this.onDisposed.trigger();
		this.onDisposed.reset();
	}

}
```


### 📅 Events

Events are a nice way of **binding HTML elements to JS logic**. A common way of doing that is using `addEventListener`. That’s fine if all the events are bound to HTML elements that you create inside your component and **are destroyed when your component is disposed**. 👌🏻

But in some situations you’ll need to add events to HTML elements outside your components, or even to the global `window` object. In those cases, you will need to make sure that you **get rid of these events** when your component is disposed. You can do that with `removeEventListener`, and making sure that you keep a reference to the logic as an **arrow function**. 🏹

To make sure you don’t forget about **getting rid of your events**, it’s a good practice to create a `setupEvents` method that allows you to toggle them like this: 👇🏻

```tsx
import * as THREE from "three";
import * as OBC from "@thatopen/components";

class YourComponent extends Component implements Disposable {

	// ...

	constructor() {
		this.setupEvents(true);
	}

	dispose() {
		// ...
		this.setupEvents(false);
		// ...
	}

	private setupEvents(active: boolean) {
		if(active) {
			window.addEventListener("mousemove", this.logMessage);
		} else {
			window.removeEventListener("mousemove", this.logMessage);
		}
	}

	private logMessage = () => {
		console.log("Hey!");
	}
}
```

### 🐘 Huge objects / arrays

Some components are data-heavy. JavaScript has an automatic garbage collector that should take care of these, but that can take some time. To **accelerate this release of memory**, you can just assign them an empty value:

```jsx
import * as THREE from "three";
import * as OBC from "@thatopen/components";

class YourComponent extends Component implements Disposable {

	dataArray: any = [];
	dataObject: any = {};

	dispose() {
		// ...
		this.dataArray= [];
		this.dataObject= {};
	}
}
```