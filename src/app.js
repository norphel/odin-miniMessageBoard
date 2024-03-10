import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes import
import indexRouter from "./routes/index.route.js";
import newMessageFormRouter from "./routes/newMessageForm.route.js";

// routes declaration
app.use("/", indexRouter);
app.use("/new", newMessageFormRouter);

export { app };
