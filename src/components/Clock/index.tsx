import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import ClockBody from 'src/components/ClockBody';
import { ClockWrapper, Pin } from './Clock.styled';
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
