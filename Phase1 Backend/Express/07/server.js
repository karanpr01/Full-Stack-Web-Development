const express = require('express');

const app = express();

// * 1 Application level MiddleWare
app.use((req, res, next) => {
    console.log("This runs for every routes");
    next()
})

// * 2 Route level MiddleWare
const hello = (req, res, next) => {
    console.log("This runs only for Admin Route");
    next();
}

app.get("/", function (req, res) {
    res.send("Hello World!")
})

app.get("/admin", hello, (req, res) => {
    res.send("<h1> Hello Prem, Good Morning! 😊 ")
})

app.get("/profile", (req, res, next) => {
    return next(new Error("Something Went Wrong"))
})

app.use((err , req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Page is not available")
})

app.listen(3000);