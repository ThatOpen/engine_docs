import * as fs from "node:fs";
import * as path from "node:path";
import { traverseDir } from "./dir-traverser.mjs";

// #region Regex
const mdCommentRegex = /\/\*MD([\s\S]*?)\*\//g;
const codeBlockRegex = /\*\/([\s\S]*?)\/\*MD/g;
// #endregion

traverseDir("temp/engine_components/src", (_, libFiles) => {
  const tutorialFiles = libFiles.filter((path) => path.match(/index\.html$/));
  generateTutorials(tutorialFiles);
});

function generateTutorials(tutorialPaths) {
  const basePath = `docs/Tutorials`;
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath, { recursive: true });
  }

  for (const tutorialPath of tutorialPaths) {
    const splitted = tutorialPath.split(path.sep);
    const componentName = splitted[splitted.length - 2];
    const resultPath = `${basePath}/${componentName}.mdx`;
    const html = fs.readFileSync(tutorialPath, "utf-8");

    let tutorial = getTutorial(html);
    if (!tutorial) continue;
    tutorial += getLiveDemo(tutorialPath);

    try {
      fs.writeFileSync(resultPath, tutorial);
    } catch (e) {
      console.error(e);
    }
  }
}

function getTutorial(html) {
  const scriptModule = html.match(
    /<script\b[^>]*type="module"[^>]*>[\s\S]*?<\/script>/g,
  );

  if (!scriptModule) return null;

  const script = scriptModule[0]
    .replace(/<script\b[^>]*type="module"[^>]*>/g, "")
    .replace(/<\/script>/g, "");

  //#region Get comments
  const comments = script.match(mdCommentRegex);
  if (!comments) return null;
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

  return tutorialMD;
}

function getLiveDemo(path) {
  let url = path
    .replaceAll("\\", "/")
    .replace(/.*docs\/temp\//, "https://thatopen.github.io/");

  const baseUrlPattern = /.*github.io\/.*?\//;
  const size = baseUrlPattern.exec(url)[0].length;
  url = url.slice(0, size) + url.slice(size);

  return `

  <iframe src="${url}"></iframe>

  `;
}
