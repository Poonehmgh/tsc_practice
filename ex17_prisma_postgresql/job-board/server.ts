import express from "express"
import companyRouter from "./companies"
import jobRouter from "./jobListings"


const app = express()
app.use(express.json())
app.use("/api/companies", companyRouter)
app.use("/api/jobs", jobRouter)

app.listen(1337, ()=> {
    console.log("server is running on the 1337 port")
})