import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../sagas";
import { animeReducer } from "./animeReducer";
import { headerItemReducer } from "./headerItemReducer";
import { loadReducer } from "./loadReducer";
import { pageReducer } from "./pageReducer";
import { quoteReducer } from "./quoteReducer";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        anime: animeReducer,
        load: loadReducer,
        headerItem: headerItemReducer,
        page: pageReducer,
        quote: quoteReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);