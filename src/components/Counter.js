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
  console.log(todos);
  
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
    <div className=" w-50 mt-3 p-5 mx-auto border ">
      <form className=" text-center" onSubmit={handleIncreseByValue}>
        <p>Add Comment</p>
        <input
          className="w-75 "
          type="text"
          ref={name}
          placeholder="NAME "
        />
        <br />
        <textarea
          className="form w-75  "
          placeholder="Enter MESSAGE"
          ref={comment}
          name=""
          id=""
          cols="30"
          rows="1"
        ></textarea>
        <br />
        <button type="submit" className="btn btn-secondary w-75">
          add
        </button>
      </form>
    </div>
  );
  
}
