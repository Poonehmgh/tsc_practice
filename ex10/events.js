var EventEmitter = require("events");
// equivalent of require in ts is import:
// import EventEmitter from "events";
var customEventEmitter = new EventEmitter;
customEventEmitter.on("eventName", function () { console.log("hello"); });
customEventEmitter.emit("eventName");
console.log("hhvlwvbhakej");
