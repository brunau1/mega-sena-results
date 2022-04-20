const fs = require("fs");
const path = require("path");

module.exports = () => {
  const filePath = path.resolve(__dirname, "./public/database.csv");
  const data = fs.readFileSync(filePath, "utf8");
  const raffleResults = [];
  const lines = data.split("\n");
  lines.forEach((line) => {
    const sections = line.replace(/\r/gi, "").split(",");
    raffleResults.push([
      sections[2],
      sections[3],
      sections[4],
      sections[5],
      sections[6],
      sections[7],
    ]);
  });
  console.log(raffleResults);
};
