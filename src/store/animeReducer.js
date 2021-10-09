import { createAction, createReducer } from "@reduxjs/toolkit";
import { UPDATE_ANIME } from "./actions";

const initialState = {
  anime: [],
}

const updateAnime = createAction(UPDATE_ANIME);

export  const animeReducer = createReducer(initialState, {
  [updateAnime]: (state, action) => {
    state.anime = action.payload;
  }
});