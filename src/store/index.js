import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { animeReducer } from "./animeReducer";
import { headerItemReducer } from "./headerItemReducer";
import { loadReducer } from "./loadReducer";
import { pageReducer } from "./pageReducer";
import { quoteReducer } from "./quoteReducer";

const rootReducer = combineReducers({
    anime: animeReducer,
    load: loadReducer,
    headerItem: headerItemReducer,
    page: pageReducer,
    quote: quoteReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));