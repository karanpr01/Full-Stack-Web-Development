const express = require('express');

const app = express();

//* app.get/post/put/patch/delete

app.get("/", (req,res) => {
    res.send("<H1>Hello world!</H1>")
});

const user = {
    name:"Prem",
    age:21,
    email:"karnprem@gamil.com",
    address:"Mumbai51"
}

app.get("/user", (req, res) => {
    res.send(user)
})

app.get("/api/:Id", (req,res) => {
    // const Id = req.params.productId
    const {Id} = req.params; //Destructuring

    console.log(Id);

    const product = {
        id:1,
        name:"MacBook pro"
    }

    res.status(200).json({
        success:true,
        product
    })
    
})

app.listen(8000, () => {
    console.log("Server is running on port 8000");
    
})