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
    width: 14px;
    background-color: black;
    border-radius: 2px;
  }
  &.pin__minute {
    left: calc(50% - 5px);
    height: 40%;
    width: 10px;
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
