import { createStore, combineReducers } from "redux";
import stockPricesReducers from "./stockPrices";

const rootStore = combineReducers({ stockPricesReducers });

export const store = createStore(rootStore);
