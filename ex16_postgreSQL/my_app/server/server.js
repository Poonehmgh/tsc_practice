
const express = require("express")
const app = express()
const pool = require("./db")
const cors = require("cors") // if not, it will block our app due to cors policy !?!
// get all of our todos:

app.use(cors())
app.get("/todos/:userEmail", async (req, res) =>{
    const email = req.params.userEmail
    // const email = 'test@test.com'
    try{
       // const todos = await pool.query('SELECT * FROM todos')
        const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [email]) // ==show me the object of which has this user_email
        res.json(todos.rows)
    }catch (err) {
      console.log(err)
    }
})

app.listen(8000, () => {
    console.log("server is running on 8000")
})