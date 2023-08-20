const http = require("http");
const fs = require("fs");
const path = require("path")
const server = http.createServer((req, res) => {
    if (req.url === "/"){
        const ipath = path.join(__dirname, "index.html")
        fs.readFile(ipath, "utf8", (err, data) =>{
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
        a_path = path.join(__dirname, "about.html")
        fs.readFile(a_path, "utf-8", (err, data) => {
            if (err)
            {
                res.writeHead(500, {"Content-Type" : "text/plain"})
                res.end("could not read about.html")
            }
            else
            {
                res.writeHead(200, {"Content-Type" : "text/html"})
                res.end(data)
            }
        })
    }
    else
    {
        res.writeHead(404, {"Content-Type":"text/plain"})
        res.end("error! not found")
    }
})

server.listen(3000, () => {
    console.log("server is up on port 3000");
})
