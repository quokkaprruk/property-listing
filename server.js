
const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const rentalsDB = require("./models/rentals-db"); //import data
const app = express();

app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, "/assets")));
app.use(express.static(path.join(__dirname, "/modules")));


app.set("layout", "layouts/main"); //render main page and took the body from home ejs
app.get("/", function (req, res) {
  const featuredRentals = rentalsDB.getFeaturedRentals(); //get data
  res.render("home", {
    featuredRentals, // featuredRental: featuredRental
    title: "Home Page",
    stylesheet: "/css/home.css",
  });
});

app.get("/rentals", (req, res) => {
  const allRentals = rentalsDB.getAllProperties();
  res.render("rentals", {
    allRentals,
    title: "Rentals Page",
    stylesheet: "/css/rentals.css",
  });
});

app.get("/sign-up", (req, res) => {
  res.render("signup", {
    title: "Sign Up Page",
    stylesheet: "/css/form.css",
  });
});

app.get("/log-in", (req, res) => {
  res.render("login", {
    title: "Log In Page",
    stylesheet: "/css/form.css",
  });
});


app.use((req, res) => {
  res.status(404).send("Page Not Found");
});


app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});


const HTTP_PORT = process.env.PORT || 8080;

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}


app.listen(HTTP_PORT, onHttpStart);


