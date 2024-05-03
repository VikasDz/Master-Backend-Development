const express = require('express')
const userModel = require('./userModel')
const app = express()



app.get('/', (req, res) => {
    res.send('Mongoose CRUD Operations')
})

app.get('/create', async function (req, res) {
    let user = await userModel.create({
        user: "VikasDz",
        username: "VikasDz",
        email: "VikasDz@gmail.com"
    })
    res.send(user)
})

app.get('/read', async function (req, res) {
    let user = await userModel.find({
    })
    res.send(user)
})

app.get('/update', async function (req, res) {
    let userupdate = await userModel.findOneAndUpdate({ username: "VikasDz" }, { name: "Vikas Kumar" }, { new: true })
    res.send(userupdate)

})

app.get('/delete', async function (req, res) {
    let userupdate = await userModel.deleteMany({ username: "VikasDz" })
    res.send(userupdate)

})

app.listen(3000, function () {
    console.log("listening on on port");
})

