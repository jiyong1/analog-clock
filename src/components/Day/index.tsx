import { useSelector } from 'react-redux';
import { DayWrapper } from './Day.styled';

import type { RootState } from 'src/store';
import type { ClockState } from 'src/store/clock';

export default function Day() {
  const day = useSelector<RootState, ClockState['day']>((state) => state.clock.day);

  return <DayWrapper>{day && `${day.year}년 ${day.month}월 ${day.date}일`}</DayWrapper>;
}
