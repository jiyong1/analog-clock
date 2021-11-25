import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { clockActions } from 'src/store/clock';

import Day from 'src/components/Day';
import Clock from 'src/components/Clock';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clockActions.watchClock());
  }, []);

  return (
    <>
      <Day />
      <Clock />
    </>
  );
}
