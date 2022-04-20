const fs = require("fs");

const database = fs.readFileSync("./database.json", "utf8");

console.log("The data has already been converted!!");
