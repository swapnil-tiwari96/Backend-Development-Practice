// npm - global command, comes with node
// npm --version

// local dependency - use it only in this directory
// npm i <packagename>

// global dependency - use it in any project
// npm i -g <packagename>
// sudo npm i -g <packagename>

// package.json - manifest file (stores important info about project/package)
// manual approach - (create package.json in the root, create properties etc)
// npm init (step by step - press enter to skip)
// npm init -y (everything default)

const _ = require('lodash'); //This will only happen if I installed the package already.

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
