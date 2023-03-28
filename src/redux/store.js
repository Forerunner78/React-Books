import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducerAddBooks from "./reducers/reducerAddBooks";

const rootReducer = combineReducers({ library: reducerAddBooks });

const store = configureStore({ reducer: rootReducer });

export default store;
