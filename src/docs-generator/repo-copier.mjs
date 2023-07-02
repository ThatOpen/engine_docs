import { exec, execSync } from "node:child_process";
import { symlink } from "node:fs/promises";
import * as path from "node:path";

import { promisify } from "node:util";

// Make exec return promises
const execPromise = promisify(exec);

// List of repositories to include in the docs
let repositories = [
    { name: "IFCjs/clay", release: "", fallbackBranch: "" },
    { name: "IFCjs/components", release: "", fallbackBranch: "big-restructure" },
    { name: "IFCjs/fragment", release: "", fallbackBranch: "" },
    { name: "IFCjs/web-ifc", release: "", fallbackBranch: "" },
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
   If no tag or fallback branch specified, it will use the default branch */
const cloneMinimalRepo = async(repo) => {
    let repoDirName = repo.name.split(/\//).pop();
    repoDirName = path.resolve(`${fullRepoDirName}/${repoDirName}`);

    let command = `gh repo clone ${repo.name} ${repoDirName} -- --depth 1`;
    let tagName = "(default branch)";

    if (repo.release && repo.release !== "") {
        command = `${command} -b ${repo.release}`;
        tagName = repo.release;
    } else if (repo.fallbackBranch && repo.fallbackBranch !== "") {
        command = `${command} -b ${repo.fallbackBranch}`;
        tagName = repo.fallbackBranch;
    }

    await execPromise(`${command}`);

    return { repoDirName, tagName };
};

/* Create a symlink from the src/ directory inside the repo to the
 * tempDirName directory with the name of the repository */
const symlinkRepoSrc = async(repoName) => {
    const repoDirName = repoName.split(/\//).pop();
    const originalRepoSrcPath = path.resolve(
        `./${fullRepoDirName}/${repoDirName}/src`);
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
            ...repo,
            release: await getLatestRelease(repo.name),
        };
    })
);

console.log("Fetched releases:");
console.log(repositories);

// Clone minimal repositories and display the active branch
console.log("Cloning minified repositories...");

const clonedBranches = await Promise.all(
    repositories.map(async (repo) => {
        const { repoDirName, tagName } = await cloneMinimalRepo(repo);

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
            repo.name);

        return `'${originalRepoSrcPath}' -> '${repoSrcLink}'`;
    })
);

console.log("Generated symlinks");
console.log(srcSymlinks);

console.log("Finished copying and setting up repositories!");
