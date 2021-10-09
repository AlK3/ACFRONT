import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    perPage: 30,
    pageMain: 1,
    pageAnime: 1,
}

const updatePerPage = createAction('UPDATE_PER_PAGE');
const updatePageMain = createAction('UPDATE_PAGE_MAIN');
const updatePageAnime = createAction('UPDATE_PAGE_ANIME');

export const pageReducer = createReducer(initialState, {
    [updatePerPage]: (state, action) => {
        state.perPage = action.payload;
    },
    [updatePageMain]: (state, action) => {
        state.pageMain = action.payload;
    },
    [updatePageAnime]: (state, action) => {
        state.pageAnime = action.payload;
    },
});