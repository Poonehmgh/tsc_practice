"use strict";
//**  fetching from an API ! *//
console.log("start!");
fetch("https://restcountries.com/v3.1/all").then((x) => { return x.json(); }).then((json) => {
    let countries = json;
    const flag = json[0].flag;
    console.log(" Flag of the first country in the list is : ", flag);
    // we are running this code inside a callback, so the order of printing would be: 1.start 2. done 3. "Flag of..."
}).catch((err) => { console.log(err + "you!"); });
console.log("Done!");
//since the flag is returned as a promise, we cannot print it here. we should
// print it in the call back. cause here's code is executed before call backs are processed!
// console.log(flag); NO
