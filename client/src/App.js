import React, { useEffect } from "react";
import StocksXYValues from "./components/StocksXYValues";
import Search from "./components/Search";
import fetchMyApi from "./utils/fetchMyApi";

function App() {
  useEffect(() => {
    fetchMyApi();
  }, []);

  return (
    <div>
      <Search />
      <StocksXYValues />
    </div>
  );
}

export default App;
