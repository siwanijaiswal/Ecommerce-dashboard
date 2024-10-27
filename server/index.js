const express = require("express");
const app = express();
const PORT = 8001;

app.get("/", (req, res) => {
  res.send("app is working..");
});

app.listen(PORT, () => {
  console.log(`app is listening at ${PORT} port`);
});
