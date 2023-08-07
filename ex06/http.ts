const http = require("http");
const server = http.createServer((req, res)=>{
    if (req.url === "/"){
        res.end("this is the homepage!");
    }
    if (req.url === "/about")
    {
        res.end("welcome to our history page!"); // i donnot why server stops after i visit the about page:-?
    }
    // the default, or when you access a page that doesnt exist:
    res.end("oops! we dont have such page!");
})
server.listen(5000);