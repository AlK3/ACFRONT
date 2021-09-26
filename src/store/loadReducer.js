import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    load: false,
}

const setLoad = createAction('SET_LOAD');

export const loadReducer = createReducer(initialState, {
  [setLoad]: (state, action) => {
    state.load = action.payload;
  }
});