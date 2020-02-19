const INITIAL_STATE = {
  stockValues: []
};

const stockPricesReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_STOCK_VALUES":
      return {
        ...state,
        stockValues: action.payload
      };
    default:
      return state;
  }
};

export default stockPricesReducers;
