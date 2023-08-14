const http = require("http")
const {readFileSync} = require("fs")

const server = http.createServer((req, res)=>{
    const url = req.url;
    if (url === "/"){
    res.writeHead(200, {"content-type":"text/html"})
    res.write("<h1>hommmmmeeee page<\h1>")
    console.log("user hit the server");
    res.end();
    }
    else if (url=== "/contact"){
        res.writeHead(200, {"content-type":"text/html"})
        res.write("<h1>contact page<\h1>")
        console.log("user hit the server");
        res.end();}
    else if(url === "/pinar") {
        res.writeHead(200, {"content-type": "text/html"})
        const content = readFileSync("./index.html")
        res.write(content)
        res.end()
    }
    else{
        res.writeHead(404, {"content-type":"text/html"})
        res.write("<h1>not found!<\h1>")
        console.log("user hit the server");
        res.end();
    }

})
server.listen(5001)
