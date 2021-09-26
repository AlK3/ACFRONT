import { takeEvery, put, call, all } from 'redux-saga/effects';
import { LOAD_ANIME, LOAD_QUOTE, LOAD_QUOTES, updateAnime, updateQuote, updateQuotes } from './actions';

function fetchQuotes(title, page) {
    return fetch(`https://animechan.vercel.app/api/quotes/anime?title=${title}&page=${page}`)
        .then(response => response.json());
}

function fetchQuote() {
    return fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
}

function fetchAnime() {
    return fetch('https://animechan.vercel.app/api/available/anime')
        .then(response => response.json())
}

function* workerLoadQuotes({title, page}) {
    yield put({type: 'SET_LOAD', payload: true});
    const quotes = yield call(fetchQuotes, title, page);
    yield put({type: 'SET_LOAD', payload: false});
    yield put(updateQuotes(quotes));
}

function* workerLoadQuote() {
    yield put({type: 'SET_LOAD', payload: true});
    const quote = yield call(fetchQuote);
    yield put({type: 'SET_LOAD', payload: false});
    yield put(updateQuote(quote));
}

function* workerLoadAnime() {
    yield put({type: 'SET_LOAD', payload: true});
    const anime = yield call(fetchAnime);
    yield put({type: 'SET_LOAD', payload: false});
    yield put(updateAnime(anime));
}

function* watchLoadQuotes() {
    yield takeEvery(LOAD_QUOTES, workerLoadQuotes);
}

function* watchLoadQuote() {
    yield takeEvery(LOAD_QUOTE, workerLoadQuote);
}

function* watchLoadAnime() {
    yield takeEvery(LOAD_ANIME, workerLoadAnime);
}

export default function* rootSaga() {
    yield all([
        watchLoadQuotes(),
        watchLoadQuote(),
        watchLoadAnime()
    ]);
}