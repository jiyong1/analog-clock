import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import ClockBody from 'src/components/ClockBody';
import { ClockWrapper, SecondPin, MinutePin, HourPin, Pin } from './Clock.styled';
import { getDegree } from 'src/utils';

import type { RootState } from 'src/store';

export default function Clock() {
  const clock = useSelector((state: RootState) => state.clock.clock);

  const rotateArr = useMemo(() => {
    return getDegree(clock);
  }, [clock]);

  return (
    <ClockWrapper>
      <ClockBody />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate3D(-50%, -50%, 0)',
          width: '1rem',
          height: '1rem',
          border: '1px solid blue',
        }}
      ></div>
      {clock && (
        <>
          <Pin className="pin__hour" style={{ transform: rotateArr[0] }} />
          <Pin className="pin__minute" style={{ transform: rotateArr[1] }} />
          <Pin className="pin__second" style={{ transform: rotateArr[2] }} />
        </>
      )}
    </ClockWrapper>
  );
}
