"use strict";
// const fs = require("fs");
// const first_ = fs.readFileSync("./content/text1.txt", "utf8");
// or :
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/text1.txt", 'utf8'); //encoding protocol is the optional argument
const second = readFileSync("./content/text2.txt", 'utf8');
console.log(first, " ", second);
//overwrites the existing file. otherwise creates the file, if we add that flad, it will append the content
writeFileSync("./content/result.txt", `yoooooooo ${first} and ${second}`, { flag: 'a' });
