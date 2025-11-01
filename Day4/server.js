const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200,{'content-type': 'text/plain'});
//     res.end("Hello World!, I am Live");
// })

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");

// })

const user = {
    name: "Prem",
    age: 21,
    email: "prem@gmail.com"
}

const data = JSON.stringify(user);

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === "/") {
        res.writeHead(200, { 'content-type': 'text/plan' });
        res.end("Home")
    } else if (req.url === "/api/user") {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(data);
    } else {
        res.writeHead(410, { 'content-type': 'text/html' });
        res.end("<H1> Page Not Found </H1>");
    }

})

server.listen(8000, () => {
    console.log("Server is running on port 8000");

})