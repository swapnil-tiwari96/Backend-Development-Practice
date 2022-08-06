const { readFileSync, writeFileSync } = require("fs")

const first = readFileSync("./first.txt", "utf8");
const second = readFileSync("./second.txt", "utf8")

// first argumen is the file name, second is what you want to write, third is if you want to append data (existing data plus whatever happens when node is run again)
writeFileSync("./result.txt", `Here is the result of 2 files: ${first} ${second}`, { flag: "a" }); 
