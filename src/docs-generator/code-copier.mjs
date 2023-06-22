import * as fs from "fs";
import * as path from "path";

makeDir("temp/components");
makeDir("temp/fragment");

let isFirstExecution = true;
copyFolderRecursiveSync("../components/src", "temp/components");
isFirstExecution = true;
copyFolderRecursiveSync("../fragment/src", "temp/fragment");

function makeDir(path) {
    if(!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

function copyFolderRecursiveSync( source, target ) {
    let files = [];

    const extension = isFirstExecution ? "" : path.basename( source );
    isFirstExecution = false;

    // Check if folder needs to be created or integrated
    let targetFolder = path.join( target, extension );
    if ( !fs.existsSync( targetFolder ) ) {
        fs.mkdirSync( targetFolder );
    }

    // Copy
    if ( fs.lstatSync( source ).isDirectory() ) {
        files = fs.readdirSync( source );
        files.forEach( function ( file ) {
            let curSource = path.join( source, file );
            if ( fs.lstatSync( curSource ).isDirectory() ) {
                copyFolderRecursiveSync( curSource, targetFolder );
            } else {
                copyFileSync( curSource, targetFolder );
            }
        } );
    }
}

function copyFileSync( source, target ) {

    let targetFile = target;

    // If target is a directory, a new file with the same name will be created
    if ( fs.existsSync( target ) ) {
        if ( fs.lstatSync( target ).isDirectory() ) {
            targetFile = path.join( target, path.basename( source ) );
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}


