import {
    ghVersion,
    getLatestRelease,
    cloneMinimalRepo,
    copyRepo
} from "./copy-utils.mjs";

// Organization name
const orgName = "ThatOpen";

// List of repositories to include in the docs
let repositories = [
    // { name: "clay", release: "" },
    { name: "engine_components", release: "" },
    { name: "engine_fragment", release: "" },
    // { name: "web-ifc", release: "" },
];
const tempDirName = "temp";

// Handle command-line arguments
const validArgs = [ '--local', '--remote' ];
const [localMode, remoteMode] = validArgs;

if (process.argv.length !== 3 ||
    !process.argv.some((arg) => validArgs.includes(arg))) {

    console.error(`Please specify any of: ${validArgs}. Exiting...`);
    process.exit(1);
}

// Run "local" mode, using repositories from parent directory
if (process.argv.includes(localMode)) {
    const localRepoPath = '../';
    console.info("Using local mode.");
    // Copy repo directories inside each repository
    console.info(`Copying directories from "${localRepoPath}"...`);

    const repoCopies = await Promise.all(
        repositories.map(async (repo) => {
            try {
                const {originalRepoPath, repoCopyPath} = await copyRepo(
                    repo.name, localRepoPath, tempDirName);

                return `'${originalRepoPath}' -> '${repoCopyPath}'`;
            } catch {
                return '';
            }
        })
    );

    console.info("Copied repository directories");
    console.info(repoCopies);
    
}
// Run "remote" mode, copying repositories remotely from GitHub
else if (process.argv.includes(remoteMode)) {
    // Relative path to store the repos
    const fullRepoDirName = `${tempDirName}/`;
    console.info(`Using remote mode. ${ghVersion()}`);

    // Fetch and fill the releases field for each repo
    console.info("Fetching releases...");

    repositories = await Promise.all(
        repositories.map(async (repo) => {
            return {
                ...repo,
                release: await getLatestRelease(orgName, repo.name),
            };
        })
    );

    console.info("Fetched releases:");
    console.info(repositories);

    // Clone minimal repositories and display the active branch
    console.info("Cloning minified repositories...");

    const clonedBranches = await Promise.all(
        repositories.map(async (repo) => {
            const { repoDirName, tagName } = await cloneMinimalRepo(
                orgName, repo, fullRepoDirName);

            return {
                directory: repoDirName,
                branch: tagName,
            };
        })
    );

    console.info("Cloned repositories:");
    console.info(clonedBranches);
}


console.info("Finished copying and setting up repositories!");
