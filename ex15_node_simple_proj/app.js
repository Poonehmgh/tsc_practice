const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        fs.readFile("index.html", "utf8", (err, data) =>{
            if (err)
            {
                res.writeHead(500, {"content-type" : "text/plain"})
                res.end("not found")
            }
            else
            {
                res.writeHead(200, {"content-type" : "text/html"})
                res.end(data)
            }
        })
    }
    else if (req.url === "/about")
    {
        fs.readFile("about.html", "utf8", (err, data) => {
            if (err)
            {
                res.writeHead(500, {"content-type" : "text/plain"})
                res.end("could not read about.html")
            }
            else
            {
                res.writeHead(200, {"content-type" : "text/html"})
                res.end(data)
            }
        })
    }
    else
    {
        res.writeHead(404, {"content-type":"text/plain"})
        res.end("error! not found")
    }
})

server.listen(3000, () => {
    console.log("server is up on port 3000");
})