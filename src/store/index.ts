import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import status from "./status";

const reducers = combineReducers({ status });

export const Store = createStore(reducers, composeWithDevTools());

export type State = ReturnType<typeof Store.getState>;
