const express = require("express");
const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/redux";
mongoose.connect(
  DB_URL,
  { useNewUrlParser: true }
);
mongoose.connection.on("connected", err => {
  if (err) console.log(err);
  console.log("redux数据库连接成功！");
});

// 创建user表
const User = mongoose.model(
  "user",
  new mongoose.Schema({
    name: { type: String, require: true },
    age: { type: Number, require: false }
  })
);

User.create(
  {
    name: "Test",
    age: 18
  },
  (err, data) => {
    if (err) console.log(err);
    console.log(data);
  }
);

const app = express();

app.get("/", (req, res) => {
  res.end("Hello Word!");
});

app.get("/user", (req, res) => {
  User.find({}, (err, data) => {
    res.json(data);
  });
});

app.listen(3005, () => {
  console.log("react-redux-express 运行在3005端口！");
});
