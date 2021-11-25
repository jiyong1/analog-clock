import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDayNumbers, getClockNumbers } from 'src/utils';

export interface ClockState {
  day: {
    year: number;
    month: number;
    date: number;
  } | null;
  clock: {
    hour: number;
    minute: number;
    second: number;
  } | null;
}

const initialState: ClockState = {
  day: null,
  clock: null,
};

const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    watchClock: (state) => {
      const now = new Date();
      state.day = getDayNumbers(now);
      state.clock = getClockNumbers(now);
    },
    updateClock: (state, { payload }: PayloadAction<ClockState['clock']>) => {
      state.clock = payload;
    },
    updateDay: (state, { payload }: PayloadAction<ClockState['day']>) => {
      state.day = payload;
    },
  },
});

export default clockSlice.reducer;
export const clockActions = clockSlice.actions;
