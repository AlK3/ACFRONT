import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./sagas";
import { quoteReducer } from "./quoteReducer";
import { loadReducer } from "./loadReducer";
import { animeReducer } from "./animeReducer";
import { pageReducer } from "./pageReducer";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        load: loadReducer,
        page: pageReducer,
        quote: quoteReducer,
        anime: animeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);