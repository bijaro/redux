import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentModel } from '../model/todo';
import { del_comment, update_comment } from '../redux/actions/commentActions';
import List from './List';

export default function Comment() {

  const todos = useSelector((stateStoree) => stateStoree)
  console.log(todos);
  const dispatch = useDispatch ()

  const deleteId = (delId) => {
    dispatch(del_comment(delId))
  }
  const [selected, setSelected] = useState(0)
  const commentEdit = useRef()
  const nameEdit = useRef()
  
  const editComment = (id,name,comment) => {
     setSelected (id)
     nameEdit.current.value = name
    commentEdit.current.value =comment

  
  }

  const update = () => {
    return dispatch(
      update_comment (
        new commentModel(
          selected,
          nameEdit.current.value,
          commentEdit.current.value
        )
      )
    );
   
 }

                    
                    return (
                      <div className="text-center  bg-white col-md-10 col-lg-6  mx-auto ">
                        <ul className="list-unstyled">
                          {todos.map((t) => (
                            <List
                              deleteId={deleteId}
                              editComment={editComment}
                              key={t.id}
                              id={t.id}
                              name={t.name}
                              comment={t.comment}
                            />
                          ))}
                        </ul>

                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              {/* <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  Modal title
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div>
                              <div className="modal-body">...</div> */}
                              <div className=" w-75 mt-3 p-3 mx-auto border-2 bg-white ">
                                <form className=" text-center shadow-2">
                                  <p className="fs-3 fw-bold">Edit COMMENT</p>

                                  <input
                                    className=" form-control w-75  mx-auto mb-3 p-1"
                                    type="text"
                                    ref={nameEdit}
                                    placeholder="Name "
                                  />

                                  <textarea
                                    className="form-control w-75 mx-auto "
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Add Comment "
                                    ref={commentEdit}
                                  ></textarea>
                                </form>
                              </div>
                              <div className="modal-footer">
                                <button
                                  onClick={update}
                                  data-bs-dismiss="modal"
                                  data-dismiss="modal"
                                  type="button"
                                  className="btn btn-success mx-auto"
                                >
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
}

