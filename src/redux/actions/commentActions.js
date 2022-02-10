import { commentModel } from "../../model/todo"
import { ADD_COMMENT, DEL_COMMENT, EDIT_TASK } from "./type"

export const add_comment = (id,name,comment) => {
                    
                    return {
                                        type: ADD_COMMENT,
                           payload: new commentModel(id,name,comment)            

                  }  
}

export const del_comment = (delId) => {
          
                    return {
                                        type: DEL_COMMENT,
                                        payload : delId
                    }

}

export const update_comment = (editTask) => {
                    return {
                                        type: EDIT_TASK,
                                        payload : editTask
                                                            
          }          

}