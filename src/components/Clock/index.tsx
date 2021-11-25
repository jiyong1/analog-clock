import { useMemo, useCallback, useRef, useState, MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';

import ClockBody from 'src/components/ClockBody';
import { ClockWrapper, Pin, ToolTipWrapper, ToolTip } from './Clock.styled';
import { getDegree, getLocaleString } from 'src/utils';

import type { RootState } from 'src/store';

export default function Clock() {
  const clock = useSelector((state: RootState) => state.clock.clock);
  const clockRef = useRef<HTMLDivElement>(null);
  const [tooltipDisplay, setTooltipDisplay] = useState<boolean>(false);
  const [tooltipTranslate, setTooltipTranslate] = useState<[number, number]>([0, 0]);

  const rotateArr = useMemo(() => {
    const numberArr = getDegree(clock);
    return numberArr.map((value) => `rotate(${value}deg)`);
  }, [clock]);

  const tooltipText: string = useMemo(() => {
    return getLocaleString(clock);
  }, [clock]);

  const mouseHandler: MouseEventHandler = useCallback((e) => {
    if (!clockRef) return;
    const clockElem = clockRef.current;
    const { top: offsetY, left: offsetX, width } = clockElem.getBoundingClientRect();
    const { clientX, clientY } = e;

    // checking mouse pointer in clock element
    const [centerX, centerY] = [offsetX + width / 2, offsetY + width / 2];
    const distance = Math.sqrt(Math.pow(centerX - clientX, 2) + Math.pow(centerY - clientY, 2));
    if (distance > width / 2) {
      setTooltipDisplay(false);
      return;
    } else {
      const [pointX, pointY] = [clientX - offsetX, clientY - offsetY];
      const displayYOffset = -60;
      setTooltipDisplay(true);
      setTooltipTranslate([pointX, pointY + displayYOffset]);
    }
  }, []);

  const mouseOutHandler = useCallback(() => {
    setTooltipDisplay(false);
  }, []);

  return (
    <ClockWrapper ref={clockRef} onMouseLeave={mouseOutHandler} onMouseMove={mouseHandler}>
      <ClockBody />
      {clock && (
        <>
          <Pin className="pin__hour" style={{ transform: rotateArr[0] }} />
          <Pin className="pin__minute" style={{ transform: rotateArr[1] }} />
          <Pin className="pin__second" style={{ transform: rotateArr[2] }} />
          <ToolTipWrapper
            style={{
              display: tooltipDisplay ? 'block' : 'none',
              transform: `translate3d(${tooltipTranslate[0]}px, ${tooltipTranslate[1]}px, 0)`,
            }}
          >
            <ToolTip>{tooltipText}</ToolTip>
          </ToolTipWrapper>
        </>
      )}
    </ClockWrapper>
  );
}
