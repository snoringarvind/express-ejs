const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

const indexRoute = require("./routes/index");
// const newRoute = require("./routes/new");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoute);
// app.use("/new", newRoute);

app.listen(3000);
