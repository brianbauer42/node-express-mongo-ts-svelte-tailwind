#!/usr/bin/env node
import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
// import passport from "passport";
import session from "express-session";

// import { registerStrategies } from "./passport/passport";
import { config } from "../config/server.config";
// import { enableHotReload } from "./enableHotReload";

const app = express();
// registerStrategies(passport);

app.use(
  session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true
  })
);
// app.use(passport.initialize());
// app.use(passport.session());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../public"));


// ---------------- API ROUTES ----------------
// These are authentication related routes for creation and authentication of accounts.
// app.post(
//   "/api/user/register",
//   registerNewUser
// );
// app.post("/api/user/login", loginExistingUser);
// app.get("/api/user/logout", (req: Request, res: Response) => {
//   req.logout();
//   res.redirect("/");
// });

// app.get("/api/user/:id", requireLogin, readUser);
// app.put('/api/user/:id', auth.requireLogin, userCtrl.update);



mongoose.connect(config.mongoUri, {
//   useCreateIndex: true,
//   useNewUrlParser: true
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "Connection error!")
);

mongoose.connection.once("open", () => {
  console.log("\x1b[32m%s\x1b[0m", "MongoDB connected successfully");
});

// Render the index (referring to root of views specified in middleware section (__dirname + '/public'))
app.get("/", (req: Request, res: Response) => {
  res.render("index.html");
});

// Begin serving users
app.listen(config.port, "localhost", (err: NodeJS.ErrnoException) => {
  if (err) {
    return console.error(err);
  }
  console.log(
    "\x1b[32m%s\x1b[0m",
    "Listening for connections on port: " + config.port
  );
});
