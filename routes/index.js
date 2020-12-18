const express = require("express");
const router = express.Router();

const messages = [
  { text: "Hey babe", user: "Ria", date: new Date() },
  { text: "Hey cutie", user: "Andy", date: new Date() },
  { text: "Hello", user: "Dia", date: new Date() },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini message board", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  messages.push({ text: req.body.text, user: req.body.user, date: new Date() });
  res.redirect("/");
});

module.exports = router;
