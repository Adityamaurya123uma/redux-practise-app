import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todoState);
    const dispatch = useDispatch();

  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className=""
            key={todo.id}
          >
            <div className=''>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className=""
            >
                Click Me To Remove this
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos