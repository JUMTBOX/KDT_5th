const express = require("express");
let app = express();
const port = 3000;

app.get("/멍멍", (req, res) => {
  res.send("멍멍");
});

app.listen(port, () => {
  console.log(`THE SEVER IS LISTENING AT PORT${port}...`);
});
