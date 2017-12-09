import { all } from 'redux-saga/effects';
import { tickerSagas } from './modules/ticker/sagas';

export default function* rootSaga() {
  yield all([
    ...tickerSagas
  ]);
}
