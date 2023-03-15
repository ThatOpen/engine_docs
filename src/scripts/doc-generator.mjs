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

init();

async function init() {
  cleanUp();
  for (let i = 0; i < docsJSON.length; i++) {
    const docJSON = docsJSON[i];
    const docRes = await got(docJSON);
    const docsList = JSON.parse(docRes.body);
    for (let j = 0; j < docsList.length; j++) {
      const doc = docsList[j];
      if (!doc.tutorial) {
        continue;
      }
      //This is a temporal replacement to get information from the big-restructure branch. Later on, this will come from the main branch.
      const temporalReplacement = doc.tutorial.replace(
        "https://ifcjs.github.io/components",
        "https://raw.githubusercontent.com/IFCjs/components/big-restructure"
      );
      const html = await got(temporalReplacement);
      if (!html) {
        continue;
      }
      const path = generateMDX(`docs/components`, doc.name, html.body);
      generateTutorial(path, doc.tutorial);
    }
  }

  generateIndexJSON(
    "docs/components",
    "Components",
    "Lightweight modular BIM tools."
  );
}

function generateIndexJSON(path, label, description) {
  const json = {
    label,
    link: {
      type: "generated-index",
      description,
    },
  };

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

function generateTutorial(path, tutorialURL) {
  const tutorial = `
  
  <iframe src="${tutorialURL}"></iframe>
  
  `;

  fs.appendFile(path, tutorial, function (err) {
    if (err) throw err;
  });
}
