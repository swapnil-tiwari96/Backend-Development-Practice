const os = require("os");

// info about the user
console.log(os.userInfo());

// method returns the uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds.`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS);