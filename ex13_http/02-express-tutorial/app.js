const express = require("express")
const app = express() // we first import the module and then here we invoke it.
const {products} = require("./data")
const {people} = require("./data")
//in express, we have so many interesting features.
//(reminder, all the methods are from the perspective of the user. so user deletes, user posts, and user gets and so on)

// this method is invoked when user wants to get sth from the browser.
//every time user accesses "/", this callback function is invoked.
app.get("/", (req, res)=>{
    res.send("Home")

})
//wh vgjwdjcva;val'rgjm
// sending json as response:
app.get("/data", (req, res)=>{
    res.json(products)
})

app.get("/people", (req, res)=> {
    res.json(people)
})

// how to send a specific part of json object, for example only the names of people objects:
app.get("/people/selec", (req, res)=>{
    const peops = people.map((p) =>{
    const {name} = p
        return {name}
    })
    res.json(peops)
})

// how can we send only one object as response, for example: emma
app.get("/people/selec/emma", (req, res)=>{
    const ema = people.find((person)=>{
        return person.id === 5 // if all of the arrow function is in the same line it has the implicit return
    })
    res.status(200).json(ema)
})

// we do not want to hard code, we wanna rout parameters to do that: (whatever parameter after :    )

app.get("/people/selec/:personID", (req, res)=>{
    console.log(req.params); // the req.params shows the personName as with the url entered
    const personID = req.params.personID;
    const person = people.find((no) => {
        return no.id === Number(personID)})
    // console.log("person is " + person);
    if (!person)
        return res.status(404).send("Product doesnt exist")
    res.json(person)
})
app.get("/about", (req, res)=>{
    res.status(200).send("about") // we can send the status code right away in a chain form in express
})
// this method includes all the http verbs??
app.all("*", (req, res)=>{
    res.status(404).send("not found")
})
app.listen(5002, ()=>{
    console.log("server is running on 5002")
})

