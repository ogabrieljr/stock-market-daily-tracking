import { store } from "../redux/store";
import { setStockValues } from "../redux/actions";

async function fetchMyApi() {
  const values = await fetch("/values");
  const valuesJson = await values.json();
  const apiCall = await fetch(valuesJson.API_CALL);
  const apiCallJson = await apiCall.json();
  const stockValues = () => {
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
  };
  stockValues();
}

export default fetchMyApi;
