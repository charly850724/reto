const express = require("express");
const app = express();

app.use(express.json());

app.use("/person", require("./routes/person"));

app.listen(3000);
console.log("Server on port", 3000);

module.exports = app;