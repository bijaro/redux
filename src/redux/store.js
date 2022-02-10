import { createStore } from "redux";
import commentReducer from "./reducers/commentReducer";


const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore( commentReducer , enhancer());
export default store