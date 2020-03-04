import React, { useEffect, useState } from "react";
import StocksXYValues from "./components/StocksXYValues";
import Search from "./components/Search";
import { connect } from "react-redux";
import { setStockValues } from "./redux/actions";

function App({ dispatch }) {
  useEffect(() => {
    fetch("/values")
      .then(res => res.json())
      .then(data =>
        fetch(data.API_CALL)
          .then(res => res.json())
          .then(stockValues => {
            if (stockValues) {
              const entriesArray = Object.entries(
                stockValues["Time Series (Daily)"]
              );
              const metaData = Object.values(stockValues["Meta Data"]);
              const finalData = entriesArray.map(key => {
                return {
                  name: key[0],
                  open: key[1]["1. open"],
                  close: key[1]["4. close"],
                  volume: key[1]["5. volume"],
                  symbol: metaData[1]
                };
              });
              dispatch(setStockValues(finalData.reverse()));
            }
          })
      );
  }, []);

  return (
    <div>
      <Search />
      <StocksXYValues />
    </div>
  );
}

export default connect()(App);
