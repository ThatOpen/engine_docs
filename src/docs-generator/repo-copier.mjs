import { exec, execSync } from "node:child_process";
import { symlink } from "node:fs/promises";
import * as path from "node:path";

import { promisify } from "node:util";

// Make exec return promises
const execPromise = promisify(exec);

// List of repositories to include in the docs
let repositories = [
    { name: "IFCjs/clay", release: "", srcDir: "src" },
    { name: "IFCjs/components", release: "", srcDir: "library/src" },
    { name: "IFCjs/fragment", release: "", srcDir: "src" },
    { name: "IFCjs/web-ifc", release: "", srcDir: "src" },
];

// Relative path to store the repos
const tempDirName = "temp";
const fullRepoDirName = `${tempDirName}/_repos`;

// Test that the `gh` command-line utility is installed
const ghVersion = execSync("gh --version", err => {
    if (err) {
        console.error("`gh` command is not accessible. Aborting...");

        process.exit(1);
    }
});

console.info(`Using ${ghVersion}`);

/* Fetch latest release version. If it errors or if
   there are no releases yet, return an empty string */
const getLatestRelease = async (repoName) => {
    let release = await execPromise(
        `gh api repos/${repoName}/releases/latest || true`);
    release = release.stdout;

    try {
        release = JSON.parse(release).tag_name;
        if (release === undefined) {
            release = "";
        }
    } catch (e) {
        if (e instanceof SyntaxError) {
            release = "";
        } else {
            console.error(`Unexpected error while fetching releases
                           for ${repoName}. Aborting...`);

            process.exit(2);
        }
    }

    return release;
};

/* Clone git repository with minimal depth for an specific tag.
   If no tag is specified, it will use the default branch */
const cloneMinimalRepo = async(repoName, tag) => {
    let repoDirName = repoName.split(/\//).pop();
    repoDirName = path.resolve(`${fullRepoDirName}/${repoDirName}`);

    let command = `gh repo clone ${repoName} ${repoDirName} -- --depth 1`;
    let tagName = "(default branch)";

    if (tag !== "") {
        command = `${command} -b ${tag}`;
        tagName = tag;
    }

    await execPromise(`${command}`);

    return { repoDirName, tagName };
};

/* Create a symlink from the src/ directory inside the repo to the
 * tempDirName directory with the name of the repository */
const symlinkRepoSrc = async(repoName, sourceDir) => {
    const repoDirName = repoName.split(/\//).pop();
    const originalRepoSrcPath = path.resolve(
        `./${fullRepoDirName}/${repoDirName}/${sourceDir}`);
    const repoSrcLink = path.resolve(
        `./${tempDirName}/${repoDirName}`);

    await symlink(originalRepoSrcPath, repoSrcLink);

    return { originalRepoSrcPath, repoSrcLink };
};

// Fetch and fill the releases field for each repo
console.log("Fetching releases...");

repositories = await Promise.all(
    repositories.map(async (repo) => {
        return {
            name: repo.name,
            release: await getLatestRelease(repo.name),
            srcDir: repo.srcDir,
        };
    })
);

console.log("Fetched releases:");
console.log(repositories);

// Clone minimal repositories and display the active branch
console.log("Cloning minified repositories...");

const clonedBranches = await Promise.all(
    repositories.map(async (repo) => {
        const { repoDirName, tagName } = await cloneMinimalRepo(
                repo.name, repo.release);

        return {
            directory: repoDirName,
            branch: tagName,
        };
    })
);

console.log("Cloned repositories:");
console.log(clonedBranches);

// Generate symlinks to src/ directories inside each repository
console.log("Generating symlinks to src/ directories...");

const srcSymlinks = await Promise.all(
    repositories.map(async (repo) => {
        const {originalRepoSrcPath, repoSrcLink} = await symlinkRepoSrc(
            repo.name, repo.srcDir);

        return `'${originalRepoSrcPath}' -> '${repoSrcLink}'`;
    })
);

console.log("Generated symlinks");
console.log(srcSymlinks);

console.log("Finished copying and setting up repositories!");
