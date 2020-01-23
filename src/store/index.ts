import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import jpeg from "./jpeg";

const reducers = combineReducers({ jpeg });

export const Store = createStore(reducers, composeWithDevTools());

export type State = ReturnType<typeof Store.getState>;
