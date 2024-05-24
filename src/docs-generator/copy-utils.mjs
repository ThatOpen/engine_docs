import {exec, execSync} from "node:child_process";
import {cp} from "node:fs/promises";
import * as path from "node:path";
import * as fs from "fs";

import {promisify} from "node:util";

// Make exec return promises
const execPromise = promisify(exec);

// Test that the `gh` command-line utility is installed
export const ghVersion = () => {
    return execSync("gh --version", err => {
        if (err) {
            console.error("`gh` command is not accessible. Aborting...");

            process.exit(1);
        }
    });
}

/* Fetch latest release version. If it errors or if
   there are no releases yet, return an empty string */
export const getLatestRelease = async (orgName, repoName) => {
    let release = undefined;
    try {
        release = await execPromise(
            `gh api repos/${orgName}/${repoName}/releases/latest`);
        release = release.stdout;
    } catch {
    }

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
                           for "${orgName}/${repoName}". Aborting...`);

            process.exit(2);
        }
    }

    return release;
};

/* Clone git repository with minimal depth for an specific tag.
   If no tag is specified, it will use the default branch */
export const cloneMinimalRepo = async (orgName, repo, fullRepoDirName) => {
    const repoDirName = path.resolve(`${fullRepoDirName}/${repo.name}`);

    let command = `gh repo clone ${orgName}/${repo.name} ${repoDirName} -- --depth 1`;
    let tagName = "(default branch)";

    if (repo.release && repo.release !== "") {
        command = `${command} -b ${repo.release}`;
        tagName = repo.release;
    }

    await execPromise(`${command}`);

    return {repoDirName, tagName};
};


/**
 * Recursively copy files and directories from source to destination, with an option to ignore files based on a regex pattern.
 * @param {string} src - The source directory
 * @param {string} dest - The destination directory
 * @param {RegExp} ignoreFiles - The regex pattern to ignore files
 * @param {RegExp} ignorePaths - The regex pattern to ignore paths
 */
export function copyRecursiveSync(src, dest, ignoreFiles = null, ignorePaths = null) {
    if (!fs.existsSync(src)) {
        console.error(`Source path "${src}" does not exist.`);
        return;
    }

    const stats = fs.statSync(src);
    const isDirectory = stats.isDirectory();

    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest);
        }

        fs.readdirSync(src).forEach((childItemName) => {
            const childSrcPath = path.join(src, childItemName);
            const childDestPath = path.join(dest, childItemName);

            if(ignorePaths && ignorePaths.test(childSrcPath)) {
                console.log(`Ignored: ${childSrcPath}`);
                return;
            }

            if (ignoreFiles && ignoreFiles.test(childItemName)) {
                // console.log(`Ignoring file/folder: ${childItemName}`);
            } else {
                copyRecursiveSync(childSrcPath, childDestPath, ignoreFiles, ignorePaths);
            }
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}