import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

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

export default function Search() {
  const [stkSymbol, setStkSymbol] = useState("");
  const classes = useStyles();

  // TO DO: SEND TO REDUX
  // TO DO: SEND TO REDUX
  // TO DO: SEND TO REDUX

  const submit = event => {
    event.preventDefault();
    axios
      .post("/symbol", {
        stkSymbol
      })
      .then(function(response) {
        console.log(response.data);
      });
  };

  return (
    <form className={classes.root}>
      <TextField
        onChange={e => setStkSymbol(e.target.value)}
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
