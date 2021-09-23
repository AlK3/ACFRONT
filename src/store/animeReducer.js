const defaultState = {
    anime: [],
}
  
export const animeReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'UPDATE_ANIME':
        return {anime: action.payload};
  
      default:
        return state;
    }
}