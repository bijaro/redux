import { createStore } from "redux";
import CounterReducer from "./reducers/counterReducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(CounterReducer,enhancer());
export default store