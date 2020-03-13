//limited api calls
import React, { useEffect, Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Asynchronous() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const loading = open && options.length === 0;

  // useEffect(() => {
  //   let active = true;
  //   if (!loading) return undefined;
  //   (async () => {
  //     const api = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputValue}&apikey=VDVV6C6RDRMGI1R7`;
  //     const response = await fetch(api);
  //     const data = await response.json();
  //     if (inputValue !== "") {
  //       if (active) {
  //         const symbol = data["bestMatches"];
  //         setOptions(symbol.map(key => key));
  //       }
  //     }
  //   })();
  //   return () => {
  //     active = false;
  //   };
  // }, [inputValue]);

  // useEffect(() => {
  //   if (!open) {
  //     setOptions([]);
  //   }
  // }, [open]);

  const change = e => {
    setTimeout(() => {
      console.log("A");
    }, 1000);
    setInputValue(e.target.value);
    // let active = true;
    // if (!loading) return undefined;
    setTimeout(async () => {
      const api = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputValue}&apikey=VDVV6C6RDRMGI1R7`;
      const response = await fetch(api);
      const data = await response.json();
      if (inputValue !== "") {
        // if (active) {
        const symbol = data["bestMatches"];
        if (symbol) {
          setOptions(symbol.map(key => key));
        }
        // }
      }
    }, 2000);
  };

  return (
    <Autocomplete
      style={{ width: 300 }}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      getOptionSelected={(option, value) => setInputValue(option)}
      getOptionLabel={option => (
        <>
          {option["1. symbol"]} - {option["2. name"]}
        </>
      )}
      options={options}
      loading={loading}
      renderInput={params => (
        <TextField
          onChange={e => change(e)}
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </Fragment>
            )
          }}
        />
      )}
    />
  );
}
