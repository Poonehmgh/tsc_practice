const express = require("express")
const app = express();
// path = require("path");

app.set("view engine", "ejs")
app.set('views', __dirname + '/v');

const todos =[{
    task: "wash the dishes", hours: 2, done: false},
    {task: "vacuum", hours: 1, done: false},
    {task: "call the colleague", hours: 1, done: false}]
app.get("/", (req, res) => {
    // const indexPath = path.join(__dirname, "index.html")
    // res.sendFile(indexPath, {sampleTodo});
    res.render("index", {todos});
})


app.listen(3000, ()=>{
    console.log("the port is being reached")
})