const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World",
    user: "Charles",
    added: new Date(),
  },
];

import { Router } from "express";
const router = Router();

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Odin Mini Messageboard",
    messages: messages,
  });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

export default router;
