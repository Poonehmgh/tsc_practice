
const express = require("express")
const app = express()
const pool = require("./db")

// get all of our todos:


app.get("/todos", async (req, res) =>{
    try{
       const todos = await pool.query('SELECT * FROM todos')
        res.json(todos.rows)
    }catch (err) {
      console.log(err)
    }
})

app.listen(8000, () => {
    console.log("server is running on 8000")
})