import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { DECREAMENT, INCREAMENT } from '../redux/actions/type';

export default function Counter() {
  // const [counter, setCounter] = useState(0)
 const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
                    const handleIncrease = () => {
                                        dispatch({type :INCREAMENT})
                    }
                     const handleDecrease = () => {
                       dispatch({type:DECREAMENT})
                     };

                    return (
                      <div className='text-center'>
                        <p>{counter}</p>
                        <button className="btn btn-primary" onClick={handleIncrease}>Increase</button>
                        <button className="btn btn-danger" onClick={handleDecrease}>Decrease</button>
                      </div>
  );
  
}
