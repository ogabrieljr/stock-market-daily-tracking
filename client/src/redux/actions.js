export const setStockValues = prices => ({
  type: "SET_STOCK_VALUES",
  payload: prices
});

export const setApiCall = url => ({
  type: "SET_API_CALL",
  payload: url
});
