const INITIAL_STATE = {
  stockPrices: []
};

const stockReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_STOCK_VALUES":
      return {
        ...state,
        stockPrices: action.payload
      };
    default:
      return state;
  }
};

export default stockReducer;
