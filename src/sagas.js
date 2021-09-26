import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_QUOTES, updateQuotes } from './actions';

function fetchQuotes(title, page) {
    return fetch(`https://animechan.vercel.app/api/quotes/anime?title=${title}&page=${page}`)
        .then(response => response.json());
}

function* workerLoadQuotes({title, page}) {
    yield put({type: 'SET_LOAD', payload: true});
    const quotes = yield call(fetchQuotes, title, page);
    yield put({type: 'SET_LOAD', payload: false});
    yield put(updateQuotes(quotes));
}

export function* watchLoadQuotes() {
    yield takeEvery(LOAD_QUOTES, workerLoadQuotes);
}