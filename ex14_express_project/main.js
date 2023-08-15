const express = require("express")
const app = express();
// path = require("path");
const Task = require("./models/Task")
app.set("view engine", "ejs")
app.set('views', __dirname + '/v');

const todos =[{
    task: "wash the dishes", hours: 2, done: true, id: 1},
    {task: "vacuum", hours: 1, done: false, id: 2},
    {task: "call the colleague", hours: 1, done: false, id: 3}]
app.get("/", (req, res) => {
    // const indexPath = path.join(__dirname, "index.html")
    // res.sendFile(indexPath, {sampleTodo});
    res.render("index", {todos});
})


app.get("/task/:id", (req, res) =>{
    const taskID = req.params.id
    const task = todos.find((p) => {
        return p.id === Number(taskID)
    })
    task.done = true;
    res.redirect("/");

})

app.get("/complete/:id", (req, res) =>{
    const taskID = req.params.id;
    const taskk = todos.find((p) => {return p.id === Number(taskID)})
    taskk.done = !taskk.done
    res.json({ task: taskk.task,completed: taskk.done});
})
app.listen(3000, ()=>{
    console.log("the port is being reached")
})