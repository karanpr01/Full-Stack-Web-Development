//* From handling methods GET,POST,PUT,DELETE,PATCH.

const http = require('http');
const fs = require('fs');
const path = require('path');

// const server = http.createServer((req, res) => {
//     if(req.method === 'POST' && req.url === "/submit"){
//         let body = "";

//         req.on("data", (chunk) => {
//             body += chunk.toString() // convert buffer into string.
//         })

//         // End event triggered when all data received
//         req.on("end", () => {
//             console.log(JSON.parse(body));
//             res.writeHead(200, {'content-type': 'application/json'});
//             res.end(JSON.stringify({
//                 Success: true,
//                 Message: "Data Received Successfully"
//             }))
//         });
//     }else{
//         res.writeHead(200, {'content-type': 'application/json'});
//         res.end(JSON.stringify({
//             Success: false,
//             Message: "Data Not Found"
//         }))
//     }
// })

const server = http.createServer((req,res) => {
    res.writeHead(200, {"content-type": "text/html"});

    const dirPath = path.join(__dirname, "index.html")
    const htmlContent = fs.readFileSync(dirPath);

    res.end(htmlContent);
})

server.listen(8000, () => {
    console.log("Server is running on port 8000");
    
})