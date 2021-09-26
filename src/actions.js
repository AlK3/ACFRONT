export const UPDATE_QUOTES = 'UPDATE_QUOTES';
export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const UPDATE_ANIME = 'UPDATE_ANIME';
export const LOAD_QUOTES = 'LOAD_QUOTES';
export const LOAD_QUOTE = 'LOAD_QUOTE';
export const LOAD_ANIME = 'LOAD_ANIME';

export const updateQuotes = (dataFromServer) => {
    return {
        type: UPDATE_QUOTES,
        payload: dataFromServer
    };
}

export const updateQuote = (dataFromServer) => {
    return {
        type: UPDATE_QUOTE,
        payload: dataFromServer
    };
}

export const updateAnime = (dataFromServer) => {
    return {
        type: UPDATE_ANIME,
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

export const loadQuote = () => {
    return {
        type: LOAD_QUOTE
    }
}

export const loadAnime = () => {
    return {
        type: LOAD_ANIME
    }
}