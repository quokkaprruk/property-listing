const express = require("express");
const app = express();
const ejs = require("ejs");
const axios = require("axios");
//controller
/*home = index
form
listing page */
const indexController = require("./controllers/indexController");
const listingFormController = require("./controllers/listingFormController");
const listingsController = require("./controllers/listingsController");
//static file
app.use(express.static("assets"));
app.use(express.json());

//tells Express to use EJS to dynamically generate HTML content
app.set("view engine", "ejs");

//handle req
app.get("/", indexController);
app.get("/listingForm", listingFormController);
app.get("/listings", listingsController);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
