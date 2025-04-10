import * as fs from "node:fs";
import * as path from "node:path";

const tutorialsPath = "docs/Tutorials"

if (fs.existsSync(tutorialsPath)) {
  fs.rmSync(tutorialsPath, { recursive: true, force: true })
}

fs.mkdirSync(tutorialsPath)

fs.writeFileSync(`${tutorialsPath}/_category_.yml`, "label: \"👩🏻‍🏫 Tutorials\"\n");

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
    name: "engine_fragment",
    label: "Fragments",
    branch: "main",
    packagesAlias: {
      fragments: "Fragments",
    }
  },
  {
    name: "engine_ui-components",
    label: "UserInterface",
    branch: "main",
    packagesAlias: {
      core: "Core",
      obc: "OBC",
    },
    tutorialsAlias: {
      "TopicsList": "TopicsUI",
    }
  }
]

for (const repo of repos) {
  const { name, branch, label } = repo
  const baseURL = `https://raw.githubusercontent.com/ThatOpen/${name}/${branch}`
  const response = await fetch(`${baseURL}/examples/paths.json`)
  if (!response.ok) {
    console.log(`${name} not found`)
    continue;
  }
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
    const exampleParent = getTutorialParent(exampleRoute)
    const exampleName = splittedRoute[splittedRoute.length - 2]
    const exampleSrc = `https://thatopen.github.io/${name}/examples/${exampleParent ? `${exampleParent}/${exampleName}` : exampleName}`
    tutorial = `<div style={{position: "relative"}}><iframe src="${exampleSrc}"></iframe><button class="full-screen-btn" onClick={() => window.open("${exampleSrc}")} >Go Full Screen</button></div>\n
:::info Source
Copying and pasting? We've got you covered! You can find the full source code of this tutorial [here](https://github.com/ThatOpen/${name}/blob/${branch}/${exampleRoute}).
:::

${tutorial}
`
    const groups = groupTutorials(repoExamples)
    const tutorialName = repo.tutorialsAlias?.[exampleName] ?? exampleName
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

      const isParent = Object.keys(groups).includes(exampleName)
      if (isParent || exampleParent) {
        const dirPath = path.join(repoTutorialsPath, isParent ? tutorialName : exampleParent)
        if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath)
        const tutorialPath = path.join(dirPath, tutorialName + ".mdx")
        fs.writeFileSync(tutorialPath, tutorial)
      } else {
        const tutorialPath = path.join(repoTutorialsPath, tutorialName + ".mdx")
        fs.writeFileSync(tutorialPath, tutorial)
      }

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

function groupTutorials(paths) {
  const groups = {}
  for (const path of paths) {
    const splittedRoute = path.split("examples")
    if (splittedRoute.length !== 2) continue
    const parent = getTutorialParent(path)
    if (!groups[parent]) groups[parent] = []
    const name = splittedRoute[1].split("/")[1]
    groups[parent].push(name)
  }
  return groups
}

function getTutorialParent(path) {
  const splittedRoute = path.split("examples")
  if (splittedRoute.length !== 2) return null
  const initialRouteSplit = splittedRoute[0].split("/")
  const parent = initialRouteSplit[initialRouteSplit.length - 2]
  return parent
}