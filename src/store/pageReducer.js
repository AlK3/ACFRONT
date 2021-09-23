const defaultState = {
    pageMain: 1,
    pageAnime: {
        anime: '',
        page: 0
    },
    perPage: 30,
}
  
export const pageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_PAGE_MAIN':
            return {...state, pageMain: action.payload};
        case 'UPDATE_PAGE_ANIME':
            return {...state, pageAnime: action.payload};
        case 'UPDATE_PER_PAGE':
            return {...state, perPage: action.payload};

        default:
            return state;
    }
}