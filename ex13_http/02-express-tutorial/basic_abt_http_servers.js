const http = require("http")

const server = http.createServer((req, res)=>{ // the createServer() has a callback,
    // which will be invoked everytime the user hits our server.
    // we will describe the header of our response like this:
    res.writeHead(200, {"content-type":"text/html"}) // express takes care of this
    // and it matters to indicate the type of response we are providing. if we
    // just go with "content-type":"text/plain" express analyze our code as an html and it
    // would just consider the whole code as a plain text. called : mime type

    res.write("<h1>hommmmmeeee page<\h1>")
    console.log("user hit the server");
    res.end("home page");
    // req obj:
    // console.log(req);
    // // method:
    // console.log(req.method);
    // //url: shows which resource is requested by client
    // console.log(req.url);

})
server.listen(5000)