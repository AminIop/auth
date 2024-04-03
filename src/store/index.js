import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from "./sagas/root";


const enhancer = composeWithDevTools({})
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    enhancer(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(sagaWatcher)

export default store