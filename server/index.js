const express = require("express");
const app = express();

const { connectMongoDb } = require("./connect");
require("dotenv").config();
const product = require("./models/product");
const userRouter = require("./routes/user");
const cors = require("cors");

const mongo_url = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("app is working..");
});

connectMongoDb(mongo_url)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

//middleware for json body data in postman
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

app.listen(PORT, () => {
  console.log(`app is listening at ${PORT} port`);
});
