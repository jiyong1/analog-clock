import clockReducer, { clockActions } from '../store/clock';
import { getDayNumbers, getClockNumbers } from '../utils';

describe('clock state test', () => {
  const initialState = {
    day: null,
    clock: null,
  };
  it('clock을 watch하기 시작하면 현재 시간으로 상태를 업데이트 한다.', () => {
    const now = new Date();
    const expectedResult = { day: getDayNumbers(now), clock: getClockNumbers(now) };
    const result = clockReducer(initialState, clockActions.watchClock());
    expect(result).toMatchObject(expectedResult);
  });
  it('clock 업데이트가 정확히 이루어진다.', () => {
    const otherDate = new Date('1995-08-13');
    const expectedResult = getClockNumbers(otherDate);
    const { clock } = clockReducer(initialState, clockActions.updateClock(expectedResult));
    expect(clock).toMatchObject(expectedResult);
  });
});
