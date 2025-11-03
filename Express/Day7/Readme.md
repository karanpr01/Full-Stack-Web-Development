# Phase: 1 Backend Foundation

### Date: 3 Nov 2025
#### Day 4

---
# 📘Concepts I Learned
 ## MiddleWare.

- A middleware is a function that intercepts incoming requests before they reach the route handler, performs some task ``` (like authentication, logging, or validation) ```, and then either continues the request flow or stops it..

---

# Two ways to run MiddleWare

## 1. Application level MiddleWare
- This runs for every Routes.

- ✅ Runs for every request, regardless of the route.

## Example
```
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("This runs for every routes");
    next()
})

app.get("/", function (req, res) {
    res.send("Hello World!")
})

app.get("/admin", hello, (req, res) => {
    res.send("<h1> Hello Prem, Good Morning! 😊 ")
})

app.listen(3000);

```

## 1. Route level MiddleWare
- This runs for specific Routes Only.

- ✅ Middleware runs only when ``` /admin ``` is requested.

## Example
```
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("This runs for every routes");
    next()
})

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

app.listen(3000);

```