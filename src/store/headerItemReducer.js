import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    headerItem: '',
}

const setHeaderItem = createAction('SET_HEADER_ITEM');

export const headerItemReducer = createReducer(initialState, {
  [setHeaderItem]: (state, action) => {
    state.headerItem = action.payload;
  }
});