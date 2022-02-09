import { DECREAMENT, INCREAMENT, INCREAMENT_BY_VALUE } from "../actions/type";

const CounterReducer = (state = { counter :0}, action) => {
  //   const { type } = action;
  // console.log(state);
  const {type,payload}=action
  switch (type) {
    case INCREAMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREAMENT:
      return { ...state, counter: state.counter - 1 };
    case INCREAMENT_BY_VALUE:
      return { ...state, counter: state.counter + Number(payload) };
    default:
      return state;
  }
};
export default CounterReducer;
