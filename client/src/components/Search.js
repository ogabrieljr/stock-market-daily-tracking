import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { connect } from "react-redux";
import { setApiCall, setStockValues } from "../redux/actions";

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      width: 200,
      margin: "0px 0px 15px 100px"
    }
  },
  sbm: {
    "& > *": {
      width: 25,
      margin: "0 0 10px 0",
      fontSize: "13px"
    }
  }
}));

function Search({ dispatch, apiCall }) {
  const [stockSymbol, setStockSymbol] = useState("");
  const classes = useStyles();

  const submit = event => {
    event.preventDefault();
    axios
      .post("/symbol", { stockSymbol })
      .then(response => dispatch(setApiCall(response.data)));
  };

  useEffect(() => {
    fetch(apiCall)
      .then(res => res.json())
      .then(stockValues => {
        if (stockValues) {
          const entriesArray = Object.entries(stockValues["Time Series (Daily)"]);
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
      });
  }, [apiCall]);

  return (
    <form className={classes.root}>
      <TextField
        onChange={e => setStockSymbol(e.target.value)}
        id="standard-basic"
        label="Standard"
      />
      <div className={classes.sbm}>
        <Button
          onClick={e => submit(e)}
          disableRipple
          variant="outlined"
          size="small">
          Search
        </Button>
      </div>
    </form>
  );
}

const mapStateToProps = state => ({
  apiCall: state.stockReducer.apiCall
});

export default connect(mapStateToProps)(Search);
