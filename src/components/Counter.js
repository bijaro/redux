import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { add_comment } from '../redux/actions/commentActions';

export default function Counter() {
  //   // const [counter, setCounter] = useState(0)
  //   const counter = useSelector(state => state.counter)
  //   console.log(counter);
  
  //   const dispatch = useDispatch()
  //   const val = useRef()
  //                     const handleIncrease = () => {
  //                                         dispatch({type :INCREAMENT})
  //                     }
  //                      const handleDecrease = () => {
  //                        dispatch({type:DECREAMENT})


  //   };
  const name = useRef()
  const comment = useRef()
  const todos = useSelector((stateStore) => stateStore);
  
  
  const dispatch = useDispatch()


  const handleIncreseByValue = (e) => {
    e.preventDefault()
    
    if (name.current.value !== '' || comment.current.value !== '') {
      dispatch(
        add_comment(todos.length + 1,
          name.current.value,
          comment.current.value
        ))
      name.current.value = "";
      comment.current.value = "";
    }
    else {
      alert('invalid task')
     
    }
  }

  return (
    <div className="  col-md-10 col-lg-6 my-3  p-5 mx-auto border-2 bg-white ">
      <form className=" text-center shadow-2" onSubmit={handleIncreseByValue}>
        <p className="fs-3 fw-bold">ADD COMMENT</p>
        <div className="">
          <input
            className=" form-control w-75  mx-auto mb-3 p-1"
            type="text"
            ref={name}
            placeholder="Name "
          />

          <textarea
            className="form-control w-75 mx-auto "
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Add Comment "
            ref={comment}
          ></textarea>
        </div>
        {/* <textarea
          className="form-control  w-75  m-2 "
          id="exampleFormControlTextarea1"
          rows="3"
          style={{}}
          placeholder="Enter your comment"
          ref={comment}
          name=""
          id=""
          cols="30"
          rows="1"
        ></textarea> */}
        <br />
        <button type="submit" className="btn btn-secondary fw-bold w-75">
          Add
        </button>
      </form>
    </div>
  );
  
}
