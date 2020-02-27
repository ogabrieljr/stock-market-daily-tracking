const INITIAL_STATE = {
  stockPrices: [],
  apiCall: ""
};

const stockReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_STOCK_VALUES":
      return {
        ...state,
        stockPrices: action.payload
      };
    case "SET_API_CALL":
      return {
        ...state,
        apiCall: action.payload
      };
    default:
      return state;
  }
};

export default stockReducer;
