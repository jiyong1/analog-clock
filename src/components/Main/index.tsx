import GlobalStyle from 'src/style/global';
import { ClockWrapper } from './main.styled';

// components
import ClockBody from 'src/components/ClockBody';

export default function Main() {
  return (
    <>
      <GlobalStyle />
      <ClockWrapper>
        <ClockBody />
      </ClockWrapper>
    </>
  );
}
