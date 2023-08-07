"use strict";
const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("this is the homepage!");
    }
    if (req.url === "/about") {
        res.end("welcome to our history page!");
    }
    // the default, or when you access a page that doesnt exist:
    res.end("oops! we dont have such page!");
});
server.listen(5000);
