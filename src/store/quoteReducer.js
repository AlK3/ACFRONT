import { createAction, createReducer } from "@reduxjs/toolkit";
import { UPDATE_QUOTE, UPDATE_QUOTES } from "./actions";

const initialState = {
    quote: {
        anime: '',
        character: '',
        quote: '',
    },
    quotes: [],
}

const updateQuote = createAction(UPDATE_QUOTE);
const updateQuotes = createAction(UPDATE_QUOTES);

export const quoteReducer = createReducer(initialState, {
  [updateQuote]: (state, action) => {
    state.quote = action.payload;
  },
  [updateQuotes]: (state, action) => {
    state.quotes = action.payload;
  },
});