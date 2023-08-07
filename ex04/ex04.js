"use strict";
// accessing builtin modules
const os = require("os");
console.log(os.userInfo());
// return system uptime in secs
console.log("the uptime of the system is: " + os.uptime());
const currentSys = {
    name: os.type(),
    mem: os.totalmem(),
    freeMem: os.freemem(),
};
console.log(currentSys);
const path = require("path");
console.log(path.basename);
