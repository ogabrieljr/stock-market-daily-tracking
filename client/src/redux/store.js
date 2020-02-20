import { createStore, combineReducers } from "redux";
import stockReducer from "./stockReducer";

const rootStore = combineReducers({ stockReducer });

export const store = createStore(rootStore);
