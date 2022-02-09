import { DECREAMENT, INCREAMENT } from "../actions/type";

const CounterReducer = (state = { counter: 0 }, action) => {
//   const { type } = action;
                    console.log(state);
  switch (action.type) {
    case INCREAMENT:
      return {...state,counter:state.counter +1}
    case DECREAMENT:
                                          return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
export default CounterReducer;
