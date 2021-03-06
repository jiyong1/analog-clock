import styled from 'styled-components';

export const ClockBodyWrapper = styled.div`
  width: 100%;
  padding-top: calc(100% - 6px);
  border: 3px solid black;
  border-radius: 50%;
  position: relative;
`;

export const CenterCircle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  background-color: #333;
  border-radius: 50%;
  z-index: 1;
`;

export const Pin = styled.div`
  position: absolute;
  width: 2px;
  height: 50%;
  top: 0;
  left: 50%;
  transform-origin: bottom center;

  &::after {
    content: '';
    width: 5px;
    height: 12px;
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #555;
  }
  &.indicator__big::after {
    width: 9px;
    height: 20px;
  }
`;
