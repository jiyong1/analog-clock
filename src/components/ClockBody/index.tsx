import { useMemo, memo } from 'react';
import { ClockBodyWrapper, CenterCircle } from './Body.styled';

import Indicator from './Indicator';

const ClockBody = memo(function () {
  const pinFixture = useMemo(() => {
    return Array.from({ length: 60 }, (_, idx) => idx);
  }, []);

  return (
    <ClockBodyWrapper>
      {pinFixture.map((pinIdx) => {
        return <Indicator key={`indicator-${pinIdx}`} rotate={`rotate(${pinIdx * 6}deg)`} big={pinIdx % 5 === 0} />;
      })}
      <CenterCircle />
    </ClockBodyWrapper>
  );
});

export default ClockBody;
