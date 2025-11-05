const express = require('express');
const app = express();

const userModel = require('./userModel')

app.get("/",(req,res) =>{
    res.send("hey");
});

app.get("/create", async (req,res) => {
    let createdUser = await userModel.create({
        name: "Prem Karn",
        username: "PK01",
        age: 21,
        email: "karanprem01@gamil.com"
    })

    res.send(createdUser);
    
});

app.get("/update", async (req,res) => {
    let updateUser = await userModel.findOneAndUpdate({username: "PK01"},{username: "Prem"}, {new: true});

    res.send(updateUser);
});

app.get("/read", async (req,res) => {
    let users = await userModel.find();
    res.send(users)
});

app.get("/delete", async (req,res) => {
    let users = await userModel.findOneAndDelete({name: "Prem Karn"});
    res.send(users)
})

app.listen(3000,(req,res)=> {
    console.log("Server is Running");
    
})