const {readFile} = require("fs");
const getText  = (path: string) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err: any, data: any) => {
            if (err)
                reject(err);
            else
                resolve(data);
        })
    });
};
const getText2 = (path: string) => {
    return new Promise(()=>{console.log("hello hello")})
}

// approach one to the asynchronous funcs with promise: nested with then

getText("./sample.txt").then((res) => {console.log(res);}).catch((err)=>{console.log(err)});

getText2("./sample.txt");

// so we saw that the text2 function is printed synchronousely because it is really not
// not expecting a promise. for the promise to work properly we need to provide
// resolve and reject arguments in its input function, these arfuments will show us the
// state of the process and if promise was successfully delivered or not !

/* making an async function: */

/* approach two to the async functions with promise: await and async (convention : use try and catch) */

const start = async () => {
    try{
        const first = await getText("./sample.txt");//only when the promise is resolved, we will get the first.
        console.log("first text is: " + first);
    }
    catch(err){
        console.log(err);
    }
}
start();