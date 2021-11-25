import GlobalStyle from 'src/style/global';
import { Provider } from 'react-redux';

import store from 'src/store';

// components
import App from './App';

export default function Main() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
}
