const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") require("dotenv").config();

/*
TODO: 
DYNAMIC SYMBOL INPUT
*/

app.get("/values", (req, res) => {
  res.send({
    API: process.env.API_KEY,
    API_CALL: process.env.API_CALL + process.env.API_KEY
  });
});
