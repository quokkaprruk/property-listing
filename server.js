/*************************************************************************************
 * WEB322 - 2237 Project
 * I declare that this assignment is my own work in accordance with the Seneca Academic
 * Policy. No part of this assignment has been copied manually or electronically from
 * any other source (including web sites) or distributed to other students.
 *
 * Student Name  : Siripa Purinruk
 * Student ID    : 120453220
 * Course/Section: WEB322 NEE
 *
 **************************************************************************************/
const path = require("path");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const rentalsDB = require("./models/rentals-db"); //import data
const app = express();
//setup ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, "/assets")));
app.use(express.static(path.join(__dirname, "/modules")));

// Add your routes here
// e.g. app.get() { ... }
// res.sendFile(path.join(__dirname, "/views/home.html"));
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
  //const allRentals = rentalsDB.getAllProperties();
  const allRentals = rentalsDB.getRentalsByCityAndProvince();
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

// *** DO NOT MODIFY THE LINES BELOW ***

// This use() will not allow requests to go beyond it
// so we place it at the end of the file, after the other routes.
// This function will catch all other requests that don't match
// any other route handlers declared before it.
// This means we can use it as a sort of 'catch all' when no route match is found.
// We use this function to handle 404 requests to pages that are not found.
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// This use() will add an error handler function to
// catch all errors.
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Define a port to listen to requests on.
const HTTP_PORT = process.env.PORT || 8080;

// Call this function after the http server starts listening for requests.
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// Listen on port 8080. The default port for http is 80, https is 443. We use 8080 here
// because sometimes port 80 is in use by other applications on the machine
app.listen(HTTP_PORT, onHttpStart);

//connect to http://localhost:8080, not https://localhost:8080
//dont forget to uninstall nodemon
