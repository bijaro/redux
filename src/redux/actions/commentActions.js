import { commentModel } from "../../model/todo"
import { ADD_COMMENT } from "./type"

export const add_comment = (id,name,comment) => {
                    
                    return {
                                        type: ADD_COMMENT,
                           payload: new commentModel(id,name,comment)            

                  }  
}