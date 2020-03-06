import React, { useEffect, useState } from "react";
import StocksXYValues from "./components/StocksXYValues";
import Search from "./components/Search";
import { setStockValues } from "./redux/actions";
import { store } from "./redux/store";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginLeft: "10%",
    padding: "5px"
  }
});

function App() {
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function fetchMyApi() {
      const values = await fetch("/values");
      const valuesJson = await values.json();
      const apiCall = await fetch(valuesJson.API_CALL);
      const apiCallJson = await apiCall.json();
      const stockValues = () => {
        if (apiCallJson["Meta Data"]) {
          const entriesArray = Object.entries(apiCallJson["Time Series (Daily)"]);
          const metaData = Object.values(apiCallJson["Meta Data"]);
          const finalData = entriesArray.map(key => {
            return {
              name: key[0],
              open: key[1]["1. open"],
              close: key[1]["4. close"],
              volume: key[1]["5. volume"],
              symbol: metaData[1]
            };
          });
          store.dispatch(setStockValues(finalData.reverse()));
        } else {
          console.log(apiCallJson["Note"]);

          setErrorMsg(apiCallJson["Note"]);
        }
      };
      stockValues();
    }
    fetchMyApi();
  }, []);
  const classes = useStyles();
  return (
    <div>
      <Search />
      <div className={classes.root}>{errorMsg}</div>
      <StocksXYValues />
    </div>
  );
}

export default App;
