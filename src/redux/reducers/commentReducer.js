import { ADD_COMMENT, DEL_COMMENT, EDIT_TASK } from "../actions/type";

const initState = [];
const commentReducer = (state = initState, action) => {
                    const {type,payload}=action
  switch (type) {
    case ADD_COMMENT:
      return [...state, { ...payload }];
    case DEL_COMMENT:
      return [...state.filter(t => t.id !== payload)]
    case EDIT_TASK:
      return [...state.map(t => {
        if (t.id === payload.id) {
          t = { ...payload }
          return t
        }
      })]
    
    default:
      return state;
      
  }
};
 export default commentReducer
