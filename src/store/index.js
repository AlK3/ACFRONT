import createSagaMiddleware from "@redux-saga/core";
import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { watchLoadQuotes } from "../sagas";
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

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchLoadQuotes);