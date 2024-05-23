import * as fs from "node:fs";
import * as path from "node:path";

const tutorialsPath = "docs/Tutorials"

if (fs.existsSync(tutorialsPath)) {
  fs.rmSync(tutorialsPath, { recursive: true, force: true })
}

fs.mkdirSync(tutorialsPath)

const repos = [
  {
    name: "engine_components",
    label: "Components",
    branch: "main",
    packagesAlias: {
      core: "Core",
      front: "Front"
    }
  },
  {
    name: "engine_ui-components",
    label: "UserInterface",
    branch: "main",
    packagesAlias: {
      core: "Core",
      obc: "OBC",
    }
  }
]

for (const repo of repos) {
  const { name, branch, label } = repo
  const baseURL = `https://raw.githubusercontent.com/ThatOpen/${name}/${branch}`
  const response = await fetch(`${baseURL}/examples/paths.json`)
  if (!response.ok) continue;
  const repoExamples = await response.json()
  const libTutorialsPath = path.join("docs", "Tutorials", label)
  if (!fs.existsSync(libTutorialsPath)) fs.mkdirSync(libTutorialsPath)
  setReadmeAsIndex(name, baseURL)
  for (const exampleRoute of repoExamples) {
    const examplePath = `${baseURL}/${exampleRoute}`
    const exampleResponse = await fetch(examplePath)
    if (!exampleResponse.ok) continue
    const example = await exampleResponse.text()
    const splittedRoute = exampleRoute.split("/")
    const isMonorepo = splittedRoute[0] === "packages"
    let tutorial = getTutorial(example)
    if (!tutorial) continue
    tutorial = `:::info Source
Copying and pasting? We got you covered! You can find the full source code of this tutorial [here](https://github.com/ThatOpen/${name}/blob/${branch}/${exampleRoute}).
:::

${tutorial}
`
    const tutorialName = splittedRoute[splittedRoute.length - 2]
    const demo = `\n\n<iframe src="https://thatopen.github.io/${name}/examples/${tutorialName}"></iframe>`
    tutorial += demo
    if (isMonorepo) {
      let repoAlias
      const repoName = splittedRoute[1]
      if ("packagesAlias" in repo) {
        repoAlias = repo.packagesAlias[repoName] ?? repoName
      } else {
        repoAlias = repoName
      }
      const repoTutorialsPath = path.join("docs", "Tutorials", label, repoAlias)
      if (!fs.existsSync(repoTutorialsPath)) fs.mkdirSync(repoTutorialsPath)
      fs.writeFileSync(path.join("docs", "Tutorials", label, repoAlias, tutorialName + ".mdx"), tutorial)
    } else {
      fs.writeFileSync(path.join("docs", "Tutorials", label, tutorialName + ".mdx"), tutorial)
    }
    console.log(`Wrote ${name}/${tutorialName}`)
  }
}

async function setReadmeAsIndex(repoName, url) {
  const response = await fetch(`${url}/README.md`)
  if (!response.ok) return;
  const readme = await response.text()
  const { label } = repos.find(repo => repo.name === repoName)
  fs.writeFileSync(path.join("docs", "Tutorials", label, "index.md"),
    `---
title: ${label}
---
${readme}
`)
}

function getTutorial(ts) {
  // Get markdown comments
  const comments = ts.match(/\/\*\s*MD\s*([\s\S]*?)\s*\*\//g);
  if (!comments) return null;

  const cleanedComments = comments.map(match => {
    const comment = match
      .replace(/\/\*\s*.*?MD/g, '') // get rid of /*MD
      .replace(/\*\/\s*/g, '') // get rid of */
      .replace(/\r\n\s+/g, "\r\n")
      .replace(/^\s+/gm, ''); // remove any space at the start of the lines
    return comment;
  });

  // Get code blocks
  const codes = ts.match(/\*\/\s*([\s\S]*?)\s*MD/g);
  if (!codes) return null;

  const cleanedCodes = codes.map(match => {
    const code = match
      .replace(/\/\*\s*.*?MD/g, '') // get rid of /*MD
      .replace(/\*\/\s*/g, '') // get rid of */
      .replace(/import\s*\*\s*as\s*OBC\s*from\s*"(.*?)";/g, 'import * as OBC from "openbim-components";') // fix the import text
      .replace(/^(\r\n)*|(\r\n)*$/g, '') // remove the new lines at the start and end of the code block
      .trim();
    return "\n```js\n" + code + "\n```\n";
  });

  // Append markdown comments and code
  let tutorial = "";
  for (const [i, comment] of cleanedComments.entries()) {
    tutorial += comment;
    const code = cleanedCodes[i];
    if (code) tutorial += cleanedCodes[i];
  }

  return tutorial;
}