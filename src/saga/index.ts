import { all } from 'redux-saga/effects';
import clockSaga from './clock';

export default function* rootSaga() {
  yield all([clockSaga()]);
}
