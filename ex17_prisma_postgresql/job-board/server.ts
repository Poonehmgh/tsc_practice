import express from "express"
const app = express()
app.use(express.json())

app.listen(1337, ()=> {
    console.log("server is running on the 1337 port")
})