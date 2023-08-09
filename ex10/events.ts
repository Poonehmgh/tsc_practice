const EventEmitter = require("events");
// equivalent of require in ts is import:

// import EventEmitter from "events";
const customEventEmitter = new EventEmitter;
customEventEmitter.on("eventName", ()=>{console.log("hello");});
customEventEmitter.emit("eventName");


