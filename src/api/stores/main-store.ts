import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/root-reducer";
import mySaga from "../sagas/main-saga";

const sagaMiddleware = createSagaMiddleware();

export const configureStore = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);
