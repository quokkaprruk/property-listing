const axios = require("axios"); //import node fetch

module.exports = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://zillow56.p.rapidapi.com/search",
    params: {
      location: "houston, tx", //user should send params
    },
    headers: {
      "X-RapidAPI-Key": "9b17aa429dmsh7c5a4821bffa205p16e1cajsn149d76f0619b",
      "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const results = response.data.results;
    console.log(results);
    // res.json(results);
    res.render("listings", { properties: results }); //pass property data to EJS template
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
