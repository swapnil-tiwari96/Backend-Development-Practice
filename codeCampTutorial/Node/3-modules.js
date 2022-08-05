// Node uses CommonJs, every file is a module by default.
// Modules - encapsulated code (only share minimum)
const names = require("./3.1-constants")
const sayHi = require("./3.2-function")
require("./3.3-directly")

sayHi(names.john);
sayHi(names.peter);
