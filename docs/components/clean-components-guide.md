---
sidebar_position: 4
---

# Clean components ABC

## Basics

Always extend from the base `Component` class.

```tsx
import * as OBC from "openbim-components"

export MyComponent extends OBC.Component<any> {}
```

If your component has more than one file, name the base file `index.ts`. If you need to include other supporting files for your component, create a `src` folder in the component folder. You can call those supporting file whatever you want. This is a basic folder structure, making sure you name the component folder as the class name:

- MyComponent
    - src

      - supporting-file-1.ts

      - supporting-file-2.ts

      - index.ts


## TypeScript

Avoid using `!` in property fields. If a property element is not initialized in the constructor, you can either use `?`, or create a getter to assert that it exists before getting it.

Always name private members with underscore.

```tsx
import {Component} from "src/base-types/component"

export MyComponent extends Component<any> {
	private _privateProperty: any;
}
```

Never define private properties in the constructor. Make them explicit beforehand:

```jsx
/*Incorrect*/
constructor(private _components: Components)

/*Correct*/
private _components: Components
constructor(components: Components) {
	this._components = components
}
```

Always make events readonly and initialize them directly.

```jsx
readonly onCreated = new Event<any>()
```

Follow the Single Responsibility Principle.

Always make sure to know the interfaces you can implement when creating your component (i.e. `Creatable`, `Hideable`, `UI`, etc), that way we keep things uniform in terms of properties and methods naming and types.

## Documentation

In tutorials, try to not reference functions inside paragraphs. That allows to easily update the tutorial code without need to also update the paragraphs.

```jsx
/*Incorrect*/
/*MD
To add a cube to the scene, you need to call scene.add()
*/

scene.add(cube)

/*Correct*/
/*MD
To add a cube to the scene, just add the following code line!
*/

scene.add(cube)
```

## Memory management

Memory management is critical when using Open BIM components. Not paying attention to this can result in applications that consume more and more memory, up to a point in which it freeze and / or crash. This is especially relevant when using SPA (Single Page Application) libraries and frameworks, like React, Angular, Vue, etc.

To make sure your component doesn’t cause any memory leaks and stays efficient, you need to make sure that:

- It is added to the `components` object like this: `components.tools.add("name", yourComponent)` .

- It implements the `Disposable` interface. This will force you to implement a `dispose()` method that will be called automatically by the library when it’s disposed. You can add all the clean up logic inside this method.

There are some things that you want to clean up inside the `dispose` method:

### 3D objects and materials

Three.js needs to [manually release the memory](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects) of the geometry and materials that are not used anymore. If your component creates any new geometry or material, you need to keep track of it and get rid of it. You can do this in 2 ways:

1. Using the Three.js `dispose` method to get rid of all geometries and materials, including their children recursively.

2. Using the `disposer` object provided by the components library, which does everything for you.

You can also make sure that the browser gets rid of this memory fast by leaving this data out of scope (e.g. emptying the array where they are after disposing it). For instance, if you are keeping track of all your meshes in an array called `meshes`, you can get rid of it like this:

```jsx
import * as THREE from "three";
import * as OBC from "openbim-components";

class YourComponent extends Component<THREE.Mesh[]> implements Disposable {

	// ...

	private _meshes: Mesh[];
	private _disposer = new OBC.Disposer();

	dispose() {
		// ...
		for(const mesh of this.meshes) {
			this._disposer.dispose(mesh);
		}
		this._meshes = [];
	}

}
```

### UI Components / HTML elements

If your components has any kind of menu, it’s probably made of UI Components or raw HTML elements. When you dispose your component, you should also get rid of them to make sure that they are not left hidden somewhere consuming memory. You can easily do this by:

- Calling the `dispose` method of the UI Components that you create.

- Calling the `remove` method of any HTML element that you create.

> The only exception to this rule is if your component takes external UI components or HTML elements. In this case, it’s possible that it is used by other components that are not being disposed yet. In that case, you can just de-reference it (e.g. assigning them an empty value).
>

### Events

Events are a nice way of binding HTML elements to JS logic. A common way of doing that is using `addEventListener`. That’s fine if all the events are bound to HTML elements that you create inside your component (and thus are destroyed when your component is disposed).

But in some situations you’ll need to add events to HTML elements outside your components, or even to the global `window` object. In those cases, you will need to make sure that you get rid of these events when your component is disposed. You can do that with `removeEventListener`, and making sure that you keep a reference to the logic as an arrow function.

To make sure you don’t forget about getting rid of your events, it’s a good practice to create a `setupEvents` method that allows you to toggle them like this:

```jsx
import * as THREE from "three";
import * as OBC from "openbim-components";

class YourComponent extends Component<THREE.Mesh[]> implements Disposable {

	// ...

	constructor() {
		this.setupEvents(true);
	}

	dispose() {
		// ...
		this.setupEvents(false);
	}

	private _setupEvents(active: boolean) {
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

### Huge objects / arrays

Some components are data-heavy. You should make sure that that memory is released when your component is disposed. To achieve that, you can just assign them an empty value:

```jsx
import * as THREE from "three";
import * as OBC from "openbim-components";

class YourComponent extends Component<THREE.Mesh[]> implements Disposable {

	dataArray: any = [];
	dataObject: any = {};

	dispose() {
		// ...
		this.dataArray= [];
		this.dataObject= {};
	}
}
```