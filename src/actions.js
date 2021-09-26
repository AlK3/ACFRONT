export const UPDATE_QUOTES = 'UPDATE_QUOTES';
export const LOAD_QUOTES = 'LOAD_QUOTES';

export const updateQuotes = (dataFromServer) => {
    return {
        type: UPDATE_QUOTES,
        payload: dataFromServer
    };
}

export const loadQuotes = (title, page) => {
    return {
        type: LOAD_QUOTES,
        title,
        page
    };
}