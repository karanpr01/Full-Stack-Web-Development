const express = require('express');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')

app.get("/", (req,res) => {
    res.render("index");
})

app.get("/profile/:username", (req, res) => {
    res.send(`<h1> Hello ${req.params.username}! </h1>`)
})

app.get("/author/:username/:age", (req, res) => {
    res.send(`<h1> Welcome ${req.params.username} of age ${req.params.age}! </h1>`)
})

app.listen(3000, () => {
    console.log("Server is Running");
})