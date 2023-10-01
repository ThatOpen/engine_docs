import { exec, execSync } from "node:child_process";
import { cp } from "node:fs/promises";
import * as path from "node:path";

import { promisify } from "node:util";

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
    let release = await execPromise(
        `gh api repos/${orgName}/${repoName}/releases/latest || true`);
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
                           for "${orgName}/${repoName}". Aborting...`);

            process.exit(2);
        }
    }

    return release;
};

/* Clone git repository with minimal depth for an specific tag.
   If no tag is specified, it will use the default branch */
export const cloneMinimalRepo = async(orgName, repo, fullRepoDirName) => {
    const repoDirName = path.resolve(`${fullRepoDirName}/${repo.name}`);

    let command = `gh repo clone ${orgName}/${repo.name} ${repoDirName} -- --depth 1`;
    let tagName = "(default branch)";

    if (repo.release && repo.release !== "") {
        command = `${command} -b ${repo.release}`;
        tagName = repo.release;
    }

    await execPromise(`${command}`);

    return { repoDirName, tagName };
};

/* Copy the src/ directory inside the repo to the
 * tempDirName directory with the name of the repository */
export const copyRepoSrc = async(repoName, repoPath, destPath) => {
    const originalRepoSrcPath = path.resolve(
        `./${repoPath}/${repoName}/src`);
    const repoSrcCopyPath = path.resolve(
        `./${destPath}/${repoName}`);

    await cp(originalRepoSrcPath, repoSrcCopyPath, { recursive: true });

    return { originalRepoSrcPath, repoSrcCopyPath };
};
