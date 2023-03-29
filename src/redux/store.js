import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducerAddBooks from "./reducers/reducerAddBooks";
import reducerFetchedBooks from "./reducers/reducerFetchBooks";

const rootReducer = combineReducers({ library: reducerAddBooks, search: reducerFetchedBooks });

const store = configureStore({
    reducer: rootReducer,
});

export default store;
