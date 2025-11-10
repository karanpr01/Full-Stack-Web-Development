const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/posts');

app.get("/",(req,res) => {
   res.send("<h1> Welcome </h1>")
});

app.get("/create", async (req,res) => {
    let createdUser = await userModel.create({
        username: "Prem",
        email: "prem@gmail.com",
        age: 21
    });

    res.send(createdUser);
});

app.get("/post/create", async (req,res) => {
    let post = await postModel.create({
        postdata: "Helle World ! I am Prem",
        user: "691182ac44767a971289798d"
    });

    let user = await userModel.findOne({_id: "691182ac44767a971289798d"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
})

app.listen(3000, (req,res) => {
    console.log("Server is Running");
})