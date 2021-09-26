export const UPDATE_QUOTES = 'UPDATE_QUOTES';

export const updateQuotes = (dataFromServer) => {
    console.log(dataFromServer);
    return {
        type: UPDATE_QUOTES,
        payload: dataFromServer
    };
}

export const loadQuotes = (dispatch, title, page) => {
    dispatch({type: 'SET_LOAD', payload: true});
    fetch(`https://animechan.vercel.app/api/quotes/anime?title=${title}&page=${page}`)
        .then(response => response.json())
        .then(quotes => {
            dispatch(updateQuotes(quotes));
            dispatch({type: 'SET_LOAD', payload: false});
      });
}