/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from "path";
import fetch from "node-fetch";
import execa, { Options } from "execa";
import { makeDir, moveDir, cleanDir } from "./lib/fs";
import run from "./run";

type RemoteDefs = {
    name: string;
    url: string;
    branch: string;
    website: string;
    static?: boolean;
};

// GitHub Pages
const remote: RemoteDefs = {
    name: "github",
    url: "https://github.com/<user>/<repo>.git",
    branch: "gh-pages",
    website: "https://<user>.github.io/<repo>/",
    static: true,
};

// Heroku
// const remote: RemoteDefs = {
//   name: 'heroku',
//   url: 'https://git.heroku.com/<app>.git',
//   branch: 'master',
//   website: 'https://<app>.herokuapp.com',
// };

// Azure Web Apps
// const remote: RemoteDefs = {
//   name: 'azure',
//   url: 'https://<user>@<app>.scm.azurewebsites.net:443/<app>.git',
//   branch: 'master',
//   website: `http://<app>.azurewebsites.net`,
// };

const options: Options = {
    cwd: path.resolve(__dirname, "../build"),
    stdio: ["ignore", "inherit", "inherit"],
};

/**
 * Deploy the contents of the `/build` folder to a remote server via Git.
 */
async function deploy() {
    // Initialize a new repository
    await makeDir("build");
    await execa("git", ["init", "--quiet"], options);

    // Changing a remote's URL
    let isRemoteExists = false;
    try {
        await execa("git", ["config", "--get", `remote.${remote.name}.url`], options);
        isRemoteExists = true;
    } catch (error) {
        /* skip */
    }
    await execa("git", ["remote", isRemoteExists ? "set-url" : "add", remote.name, remote.url], options);

    // Fetch the remote repository if it exists
    let isRefExists = false;
    try {
        await execa("git", ["ls-remote", "--quiet", "--exit-code", remote.url, remote.branch], options);
        isRefExists = true;
    } catch (error) {
        await execa("git", ["update-ref", "-d", "HEAD"], options);
    }
    if (isRefExists) {
        await execa("git", ["fetch", remote.name], options);
        await execa("git", ["reset", `${remote.name}/${remote.branch}`, "--hard"], options);
        await execa("git", ["clean", "--force"], options);
    }

    // Build the project in RELEASE mode which
    // generates optimized and minimized bundles
    process.argv.push("--release");
    if (remote.static) process.argv.push("--static");
    await run(require("./build").default); // eslint-disable-line global-require
    if (process.argv.includes("--static")) {
        await cleanDir("build/*", {
            nosort: true,
            dot: true,
            ignore: ["build/.git", "build/public"],
        });
        await moveDir("build/public", "build");
    }

    // Push the contents of the build folder to the remote server via Git
    await execa("git", ["add", ".", "--all"], options);
    try {
        await execa("git", ["diff", "--cached", "--exit-code", "--quiet"], options);
    } catch (error) {
        await execa("git", ["commit", "--message", `Update ${new Date().toISOString()}`], options);
    }
    await execa("git", ["push", remote.name, `master:${remote.branch}`, "--set-upstream"], options);

    // Check if the site was successfully deployed
    const response = await fetch(remote.website);
    console.info(`${remote.website} => ${response.status} ${response.statusText}`);
}

export default deploy;
