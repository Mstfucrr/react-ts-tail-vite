#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
    try {
        execSync(command, { stdio: "inherit" });
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
};
console.log("react-ts-tail-vite");

const repoName = process.argv[2];
const gitCheckout = `git clone 
--depth 1
https://github.com/Mstfucrr/react-ts-tail-vite ${repoName}`;

const installDeps = `cd ${repoName} && npm install`;

console.log("Creating project...");
const checkedOut = runCommand(gitCheckout);
if (!checkedOut) process.exit(1);

console.log(`Installing dependencies for ${repoName}...`);
const depsInstalled = runCommand(installDeps);
if (!depsInstalled) process.exit(1);

console.log("Done!");
console.log(`cd ${repoName} && npm run dev`)