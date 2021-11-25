import styled from 'styled-components';

export const ClockWrapper = styled.section`
  position: relative;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

export const Pin = styled.div`
  position: absolute;
  bottom: calc(50% - 30px);
  transform-origin: center calc(100% - 30px);

  &.pin__hour {
    left: calc(50% - 7px);
    height: 30%;
    width: 12px;
    background-color: black;
    border-radius: 2px;
  }
  &.pin__minute {
    left: calc(50% - 5px);
    height: 40%;
    width: 8px;
    background-color: black;
    border-radius: 2px;
  }
  &.pin__second {
    left: calc(50% - 1px);
    height: 50%;
    width: 2px;
    background-color: red;
  }
`;

export const ToolTipWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 16px 0;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    bottom: 16px;
    left: 0;
    width: 10px;
    height: 10px;
    background-color: #444;
    transform: translate3d(-50%, 50%, 0) rotate(45deg);
  }
`;

export const ToolTip = styled.div`
  background-color: #444;
  color: white;
  padding: 0.5em;
  border-radius: 6px;
`;
