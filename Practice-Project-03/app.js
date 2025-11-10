const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const userModel = require('./models/user');
const postModel = require('./models/posts')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

app.set('view engine', "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.get("/",(req,res) => {
    res.render("index")
});

app.post("/register", async (req,res) => {
    let {username, name, age, email, password} = req.body;

    let user = await userModel.findOne({email});
    if(user) return res.status(500).send("User Already Exist");

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                username,
                name,
                age,
                email,
                password: hash
            });

            let token = jwt.sign({email: email, userId: user._id}, "secret");
            res.cookie("token", token);
            res.send("User Registered");
        });
    });
});

app.get("/logout", (req,res) => {
    res.cookie("token","");
    res.redirect("login")
})



app.get("/login", (req,res) => {
    res.render("login")
});

app.post("/login", async (req,res) => {
    let {email, password} = req.body;

    let user = await userModel.findOne({email});
    if(!user) return res.status(500).send("SomeThing Went Wrong");

   bcrypt.compare(password, user.password, (err, result) => {
    if(result){
        let token = jwt.sign({email: email, userId: user._id}, "secret");
        res.cookie("token", token);
        res.render("home",{user})
        // res.send(`<h1> Welcome ${user.name}! `)
    }else {
        res.redirect("login")
    }

   })
});





function isLoggedIn (req, res, next){
    if(req.cookies.token === ""){
        res.send("You Must be LoggedIn")
    }else {
        let data = jwt.verify(req.cookies.token, "secret");
        req.user = data;
        next()
    }
    
}




app.get("/profile", isLoggedIn, (req,res) => {
    res.send(req.user)
    
})

app.listen(3000, (req,res) => {
    console.log("Server is Running");
});