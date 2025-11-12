const fs = require("fs");
const path = require("path");
const message = process.argv[2] || "Default log";

fs.appendFile(path.join(__dirname, "logs.txt"), `${new Date()} - ${message}\n`, (err) => {
  if (err) console.error("Error writing log:", err);
  else console.log("Log saved!");
});
