import { ADD_COMMENT } from "../actions/type";

const initState = [];
const commentReducer = (state = initState, action) => {
                    const {type,payload}=action
  switch (type) {
    case ADD_COMMENT:
      return [...state, { ...payload }];
    default:
      return state;
      
  }
};
 export default commentReducer
