import { UPDATE_QUOTE, UPDATE_QUOTES } from "../actions";


const defaultState = {
    quote: {
        anime: '',
        character: '',
        quote: '',
    },
    quotes: []
}
  
export const quoteReducer = (state = defaultState, action) => {
    switch (action.type) {
      case UPDATE_QUOTE:
        return {...state, quote: action.payload};
      case UPDATE_QUOTES:
        return {...state, quotes: action.payload};

      default:
        return state;
    }
}