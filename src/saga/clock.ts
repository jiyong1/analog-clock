import { call, put, select, takeLatest, all, fork, delay } from 'redux-saga/effects';
import { clockActions } from 'src/store/clock';
import { getClockNumbers, getDayNumbers, objShallowCompare } from 'src/utils';

import type { RootState } from 'src/store';

function* updateClock() {
  while (true) {
    const now = new Date();
    const clock = getClockNumbers(now);
    yield put(clockActions.updateClock(clock));

    const dayState = yield select((state: RootState) => state.clock.day);
    const day = getDayNumbers(now);

    if (!objShallowCompare(day, dayState)) {
      yield put(clockActions.updateDay(day));
    }
    yield delay(1000 - now.getMilliseconds());
  }
}

function* watchClock() {
  yield takeLatest(clockActions.watchClock, updateClock);
}

export default function* clockSaga() {
  yield all([fork(watchClock)]);
}
