//import {createReadStream} from "fs"
//or
// const { createReadStreamsMEeee } = require("fs");
// or:
// const createReadStream = require("fs");
// import * as fs from "fs";
import * as http from "http"
import * as fs from "fs"
http.createServer((req, res) => {
    const text = fs.readFileSync("./big.txt");
    res.end(text);
}).listen(5000) //holy shit! this is really amazing:)) you actually can see the text in the localhost:5000

// another way of reading a file and sending it as an http responce,
// but this time through chunks of data which is more efficient:

http.createServer((req, res)=>{
 const fileStream = fs.createReadStream("./big.txt", "utf8");
 fileStream.on("open", ()=>{
     fileStream.pipe(res);
 })
    fileStream.on("error", (err) => {
        res.end(err);
    })
})

// I dont really understand how this works though !! will come back again