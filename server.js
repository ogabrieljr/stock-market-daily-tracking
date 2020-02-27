const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") require("dotenv").config();

app.get("/values", (req, res) => {
  res.send({
    API_CALL: `${process.env.API_CALL}&symbol=MSFT&apikey=${process.env.API_KEY}`
  });
});

app.post("/symbol", (req, res) => {
  res
    .status(200)
    .send(
      `${process.env.API_CALL}&symbol=${req.body.stockSymbol}&apikey=${process.env.API_KEY}`
    );
});
