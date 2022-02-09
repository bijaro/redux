import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { DECREAMENT, INCREAMENT, INCREAMENT_BY_VALUE } from '../redux/actions/type';

export default function Counter() {
  // const [counter, setCounter] = useState(0)
  const counter = useSelector(state => state.counter)
  console.log(counter);
  
  const dispatch = useDispatch()
  const val = useRef()
                    const handleIncrease = () => {
                                        dispatch({type :INCREAMENT})
                    }
                     const handleDecrease = () => {
                       dispatch({type:DECREAMENT})
  };
  const handleIncreseByValue = (e) => {
    e.preventDefault()
  //  console.log(val.current.value)
    const value = val.current.value
    if (value == '' || isNaN(Number(value))) alert('Enter a valid value(Number)')
    else {dispatch({
      type: INCREAMENT_BY_VALUE,
      payload : val.current.value
      
    })}val.current.value = "";
    
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 ">
      <div className="  ">
        <div className=" text-center me-5">
          <p className="fs-4">{counter}</p>
          <button className="btn btn-primary" onClick={handleIncrease}>
            Increase
          </button>
          <button className="btn btn-danger" onClick={handleDecrease}>
            Decrease
          </button>
        </div>
      </div>
      <form onSubmit={handleIncreseByValue}>
        <p>INCREASE BY VALUE </p>
        <input
          type="text"
          ref={val}
          placeholder="Enter Value "
          className="form mb-2"
        />
        <br />
        <textarea name="" id="" cols="30" rows="1"></textarea>
        <br />
        <button className="btn btn-secondary  ">Increase By Value</button>
      </form>
    </div>
  );
  
}
