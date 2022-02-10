import React from 'react'

export default function List(props) {
  return (
    <div className='border bg-primary w-50 mx-auto'>
      <li> name : {props.name} </li>
      <li>commentaire : {props.comment} </li>
    </div>
  );
}
