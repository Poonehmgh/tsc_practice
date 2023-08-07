"use strict";
/**** asynchronous module       **/
const { readFile, writeFile } = require("fs");
readFile("./content/text1.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile("./content/text2.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile("./content/result_async.txt", `${first} and ${second}`, (err, result) => {
            if (err)
                return;
            console.log(result);
        });
    });
});
