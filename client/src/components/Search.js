import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { connect } from "react-redux";
import { setApiCall } from "../redux/actions";

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

function Search({ dispatch }) {
  const [stockSymbol, setStockSymbol] = useState("");

  const classes = useStyles();

  const submit = event => {
    event.preventDefault();
    axios
      .post("/symbol", { stockSymbol })
      .then(response => dispatch(setApiCall(response.data)));
  };

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

export default connect()(Search);
