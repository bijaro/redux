import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';

export default function Comment() {
  const todos = useSelector(state => state)
  console.log(todos);
                    
                    return (
                      <div className="text-center mt-4">
                        <ul className="list-unstyled">
                          {todos.map(t=><List key={t.id} id={t.id} name={t.name}comment={t.comment}/>)}
                        </ul>
                      </div>
                    );
}
