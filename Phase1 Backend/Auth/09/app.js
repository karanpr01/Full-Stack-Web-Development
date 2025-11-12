const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

app.use(cookieParser());

app.get("/", (req, res) => {
    res.cookie("name", "Priya");
    res.send("Done")
});

app.get("/read", (req, res) => {
    // console.log(req.cookies);
    res.send("Read Page");
});

app.get("/login", (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash("PremKarn", salt, function (err, hash) {
            res.send(hash);

        });
    });
});

// * Hash Password- $2b$10$j999L27NZXgQ8TuHD0TyOe7FAjef66qgXyvesB/.7GyeS44KCjRJ2

app.get("/check", (req, res) => {
    bcrypt.compare("PremKarn", "$2b$10$j999L27NZXgQ8TuHD0TyOe7FAjef66qgXyvesB/.7GyeS44KCjRJ2", function (err, result) {
        res.send(result)
    });
});

app.get("/jwt", (req,res) => {
    let token = jwt.sign({email: "karnpr01@gamil.com"}, "Secret");
    res.cookie("token", token);
    res.send("Done")
    
});

app.get("/verify", (req, res) => {
    // res.send(req.cookies);
    let data = jwt.verify(req.cookies.token, "Secret");
    res.send(data);
})

app.listen(3000, (req, res) => {
    console.log("Server is Running....");
})