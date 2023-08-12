"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {createReadStream} from "fs"
//or
// const { createReadStreamsMEeee } = require("fs");
// or:
// const createReadStream = require("fs");
// import * as fs from "fs";
const http = __importStar(require("http"));
const fs = __importStar(require("fs"));
http.createServer((req, res) => {
    const text = fs.readFileSync("./big.txt");
    res.end(text);
}).listen(5000); //holy shit! this is really amazing:)) you actually can see the text in the localhost:5000
// another way of reading a file and sending it as an http responce,
// but this time through chunks of data which is more efficient:
http.createServer((req, res) => {
    const fileStream = fs.createReadStream("./big.txt", "utf8");
    fileStream.on("open", () => {
        fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
        res.end(err);
    });
});
