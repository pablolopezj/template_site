import express from "express";
import hbs from "hbs";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";

import path from "path";
dotenv.config();

const app = express();
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// handlebar
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Pablo",
    titulo: "Testing node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Pablo",
    titulo: "Testing node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Pablo",
    titulo: "Testing node",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
