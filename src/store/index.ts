import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import clockReducer from './clock';

import rootSaga from 'src/saga';

const sagaMiddleware = createSagaMiddleware();

function createStore() {
  const store = configureStore({
    reducer: {
      clock: clockReducer,
    },
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export default store;
