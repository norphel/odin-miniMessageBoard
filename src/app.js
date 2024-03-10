import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// view engine setup
app.set("views", "src/views");
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

// routes import
import indexRouter from "./routes/index.route.js";
import newMessageFormRouter from "./routes/newMessageForm.route.js";

// routes declaration
app.use("/", indexRouter);
app.use("/new", newMessageFormRouter);

export { app };
