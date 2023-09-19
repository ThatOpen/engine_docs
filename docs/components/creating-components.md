---
sidebar_position: 3
---

# Creating new components

## Components

Our libraries have many components, but the BIM world is vast and it's impossible to cover all use cases.
But that's the biggest power of components: they are flexible and can be extended to cover all use cases.


:::danger We like types, but you don't have to

We are going to do the examples in TypeScript, but don't worry if you only know JavaScript! Translating these examples to JavaScript would be exactly the same but removing all the type definitions.

:::


Creating a component is as simple as creating a class that extends the basic Component class. It is a generic class, which means that you can specify a type when defining it. This type is what we call the `core` of the component: the type of data it stores inside that best represents what the component does. 

For example, let's create a "Hello world" component, whose only mission is to log a greeting message in the console. 

```ts
import * as OBC from "openbim-components";

/**
 * A basic component to say hello in the console.
 */
export class HelloWorldComponent extends OBC.Component<string> {
  enabled = true;

  private readonly _message = "Hello";

  constructor(components: OBC.Components) {
    super(components);
  }

  get() {
    return this._message;
  }

  greet(name: string) {
    const message = `${this._message} ${name}!`;
    console.log(message);
  }
}
```

As you can see, the structure of the component is very simple. The Component base class requires it to have certain things:

- A constructor where at least one of the arguments will be the main object `components`. This `components` object will be available as a public property of the class.

- An `enabled` property that indicates whether the component is active or not.

- A `get()` method that returns the main data of the component.

Now, you can use this component just as any of the components you will get to know in the [tutorials](../Tutorials/SimpleScene.mdx)! 

### User Interface

Creating the UI of a whole BIM application can be a pain, even if you have a BIM library that does the heavy lifting for you. Luckily, the components library also comes with a set of pre-made UI elements that you can use to build it in minutes!

:::info UI Components

You don't need to use them if you don't want to, but it will allow you to build the same UI that you see in our editor and in some tools of our library.

:::

You can check out the UIComponents tutorial for a more in-depth look of what you can do with them, or simply check out the code of some of our components. 

To add them to your component, you just need to use the `UI` interface and use the `UIElement` object: 

```ts
import * as OBC from "openbim-components";

/**
 * A basic component to say hello in the console.
 */
export class HelloWorldComponent extends OBC.Component<string> 
  implements OBC.UI {
  enabled = true;
	
  uiElement = new OBC.UIElement<{greet: OBC.Button}>();	

  private readonly _message = "Hello";

  constructor(components: OBC.Components) {
    super(components);
		
	const greet = new OBC.Button(components);
	greet.materialIcon = "handshake";
	greet.tooltip = "Greet";
	greet.onClick.add(() => this.greet("stranger"));
	this.uiElement.set({ greet });
  }

  get() {
    return this._message;
  }

  greet(name: string) {
    const message = `${this._message} ${name}!`;
    console.log(message);
  }
}
```

Great! Now you can use them like this:

```ts
const greetButton = helloWorldTool.uiElement.get("greet");
const toolbar = new OBC.Toolbar(components);
components.ui.addToolbar(toolbar);
toolbar.addChild(greetButton);
```

### Keep it clean

It's important that you keep your components clean and tidy! To do that, check out the short guide for [avoiding smells when creating components](clean-components-guide.md).

## Tools

Creating a tool is very similar to creating a component. It just has a bunch of extra requirements:

```ts
import * as OBC from "openbim-components";

/**
 * A basic component to say hello in the console.
 */
export class HelloWorldTool extends OBC.Component<string> {
  static readonly uuid = "0f89b34b-fc6b-4b97-b56d-1edeb0a308a2";
  
  enabled = true;

  private readonly _message = "Hello";

  constructor(components: OBC.Components) {
    super(components);
	components.tools.add(HelloWorldTool.uuid, this);	
  }

  get() {
    return this._message;
  }

  greet(name: string) {
    const message = `${this._message} ${name}!`;
    console.log(message);
  }
}
```

Let's see the benefits we get for making a tool instead of a simple component:

### Availability

As you can see, tools have a static UUID (v4) and are registered in the [ToolsComponent](../Tutorials/ToolsComponent.mdx). That way, we
make sure that they are unique and globally available through your entire application. If you want to access that tool anywhere else in your application like this:

```ts
// Somewhere in your app:

const helloWorldTool = new HelloWorldTool(components);

// Somewhere else in your app:

const hwTool = await components.get(HelloWorldTool.uuid);
```

### Lifecycle

The library will take care of updating your tools (if needed) and releasing their memory when your 3D app is diposed, preventing memory leaks. You can set up your tool easily using the interfaces provided by the library. For example:

- With `updateable`, the library will automatically update your component every frame.

- With `disposable`, the library will release the memory of your component when the application is disposed, preventing memory leaks. 

Let's see them in action!

```ts
import * as THREE from "three";
import * as OBC from "openbim-components";

/**
 * A basic component to say hello in the console.
 */
export class HelloWorldTool extends OBC.Component<string> 
  implements OBC.Disposable, OBC.Updateable  {
	static readonly uuid = "0f89b34b-fc6b-4b97-b56d-1edeb0a308a2";

	readonly onAfterUpdate = new OBC.Event();

	readonly onBeforeUpdate = new OBC.Event();

	enabled = true;
	someMesh = new THREE.Mesh(); 

	private readonly _message = "Hello";

	constructor(components: OBC.Components) {
		super(components);
		components.tools.add(HelloWorldTool.uuid, this);
	}
	
	get() {
		return this._message;
	}

	greet(name: string) {
		const message = `${this._message} ${name}!`;
		console.log(message);
	}

	async dispose() {
		this.enabled = false;
		// Make sure to clean up the events
		this.onBeforeUpdate.reset();
		this.onAfterUpdate.reset();
		// Use the disposer tool to easily dispose THREE.js objects
		const disposer = await this.components.tool.get(OBC.Disposer);
		disposer.destroy(this.someMesh);
    }

    async update() {
		this.onBeforeUpdate.trigger();
		console.log("Updated!");
		this.onAfterUpdate.trigger();
	}
}
```

This is it! Now, the library will take care of updating and disposing your component automatically.

### Cloud native

To find out how to bring your tools to the cloud, check out the [cloud tools tutorial](../that-open-platform/getting-started.mdx)!

🚀🚀🚀