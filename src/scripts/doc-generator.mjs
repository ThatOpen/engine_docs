import * as fs from "fs";
import got from "got";

// https://api.github.com/repos/IFCjs/components/git/trees/main?recursive=1

//#region Regex
const mdCommentRegex = /\/\*MD([\s\S]*?)\*\//g;
const codeBlockRegex = /\*\/([\s\S]*?)\/\*MD/g;
//#endregion

// Just in case, this could be multiple docs.json files in several repositories.
const docsJSON = [
  "https://raw.githubusercontent.com/IFCjs/components/big-restructure/docs/docs.json",
];

const libraryDirs = ["components"];

// init();

async function init() {
  cleanUp();
  for (let i = 0; i < docsJSON.length; i++) {
    const docJSON = docsJSON[i];
    const docRes = await got(docJSON);
    const docsList = JSON.parse(docRes.body);
    for (let j = 0; j < docsList.length; j++) {
      const doc = docsList[j];
      if (!doc.api) {
        continue;
      }

      //This is a temporal replacement to get information from the big-restructure branch. Later on, this will come from the main branch.
      const tempTutorialPath = doc.tutorial.replace(
        "https://ifcjs.github.io/components",
        "https://raw.githubusercontent.com/IFCjs/components/big-restructure"
      );

      const tempApiPath = doc.api.replace(
        "https://raw.githubusercontent.com/IFCjs/components/main/",
        "https://raw.githubusercontent.com/IFCjs/components/big-restructure"
      );

      const html = await got(tempTutorialPath);
      const path = generateMDX(`docs/components`, doc.name, html.body);
      generateLiveDemo(path, doc.tutorial);
      generateAPI(path, tempApiPath);
    }
  }

  generateIndexJSON("docs/components", "Components");
}

function generateIndexJSON(path, label) {
  const json = { label };
  const serialized = JSON.stringify(json);
  const name = `${path}/_category_.json`;
  fs.writeFileSync(name, serialized);
}

function generateMDX(path, name, html, outputMDX = true) {
  const scriptModule = html.match(
    /<script\b[^>]*type="module"[^>]*>[\s\S]*?<\/script>/g
  );
  if (!scriptModule) {
    return;
  }
  const script = scriptModule[0]
    .replace(/<script\b[^>]*type="module"[^>]*>/g, "")
    .replace(/<\/script>/g, "");

  //#region Get comments
  const comments = script.match(mdCommentRegex);
  const parsedComments = comments?.map((comment) => {
    const slicedComment = comment
      .slice(4, -2)
      .replace(/\r/g, "")
      .replace(/^\s+/gm, "");
    return slicedComment;
  });
  //#endregion

  //#region Get code blocks
  const codes = script.match(codeBlockRegex);
  const codeBlocks = codes?.map((code) => {
    const slicedCode = code
      .slice(2, -4)
      .replace(/\r/g, "")
      .replace(/^\s+/gm, "");
    return "\n```js\n" + slicedCode + "```\n";
  });
  //#endregion

  //#region Append markdown comment and code
  let tutorialMD = "";
  parsedComments?.forEach((comment, i) => {
    tutorialMD += comment;
    if (codeBlocks && codeBlocks[i]) {
      tutorialMD += codeBlocks[i];
    }
  });
  //#endregion

  const extension = outputMDX ? ".mdx" : ".md";
  const markdownPath = `${path}/${name}${extension}`;
  try {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    fs.writeFileSync(markdownPath, tutorialMD);
    return markdownPath;
  } catch (e) {
    console.log(e);
  }
}

function cleanUp() {
  for (const dir of libraryDirs) {
    const path = `docs/${dir}`;
    if (fs.existsSync(path)) {
      fs.rmSync(path, { recursive: true, force: true });
    }
  }
}

generateAPI();

function generateAPI(path, apiURL) {

  const example = `
import * as THREE from "three";
import { Components } from "../../types/components";
import { Component } from "../../types/component";
import { Disposable } from "../../types";
/*
  A basic 3D [scene](https://threejs.org/docs/#api/en/scenes/Scene) to add
  objects hierarchically.
*/
export declare class SimpleScene extends Component<THREE.Scene> implements Disposable {
    /* {@link Component.enabled} */
    enabled: boolean;
    /* {@link Component.name} */
    name: string;
    private readonly _scene;
    private readonly _disposer;
    constructor(components: Components);
    /* {@link Component.get} */
    get(): THREE.Scene;
    /* {@link Disposable.dispose} */
    dispose(): void;
}
  `

  let apiDocs = ``;

  const documentedItems = /\/\*[\S\s]*?\*\/\n.*/g;
  const justDocumentation = /\/\*[\S\s]*?\*\//;
  const isItem = /export.*(class|interface|type)/;
  const results = example.match(documentedItems);

  for(const result of results) {
    // Get documentation
    const doc = result.match(justDocumentation)[0];
    const formattedDoc = doc.replaceAll("/*", "").replaceAll("*/", "").replaceAll("\n", "").replaceAll(/ +/g, " ");

    // Get code

    const code = result.slice(doc.length);
    const formattedCode = code.replaceAll(/ +/g, " ");

    // Save to docs

    apiDocs += formattedCode + "\n\n";
    apiDocs += formattedDoc + "\n";
  }

  try {
    fs.writeFileSync("test.txt", apiDocs);
  } catch(e) {
    console.log(e);
  }
}

function generateLiveDemo(path, tutorialURL) {
  const tutorial = `
  
  <iframe src="${tutorialURL}"></iframe>
  
  `;

  fs.appendFile(path, tutorial, function (err) {
    if (err) throw err;
  });
}
