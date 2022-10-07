import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import StorySaga from "./HomePage/CenterPage/Redux/StorySaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,

  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(StorySaga);
export default store;
