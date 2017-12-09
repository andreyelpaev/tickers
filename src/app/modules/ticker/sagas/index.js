import { call, put, takeEvery, race } from 'redux-saga/effects';
import { fetchTicker } from '../api';
import types from '../constants/types';
import { ticker, setData } from '../actions';
import { delay } from 'redux-saga';

function* fetchData(action) {
  yield put(ticker.requested());
}

function* fetchDataRequested(action) {
  try {
    const data = yield call(fetchTicker, action);
    yield put(ticker.succeed(data));
  } catch (e) {
    yield put(ticker.failed(e));
  }
}

function* fetchDataSucceed(action) {
  const { payload } = action;
  yield put(setData(payload));

  yield delay(5000);
  yield call(fetchData);
}


export const tickerSagas = [
  takeEvery(types.FETCH_DATA, fetchData),
  takeEvery(types.FETCH_DATA_REQUESTED, fetchDataRequested),
  takeEvery(types.FETCH_DATA_SUCCEED, fetchDataSucceed),
];
