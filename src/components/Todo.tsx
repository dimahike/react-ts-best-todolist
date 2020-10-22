import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/actions/todolist';

import { Button } from './shared/Button';
import { State } from './State';
import './todo.scss';

type PropsType = {
  todo: TodoType;
};

const Todo: React.FC<PropsType> = ({ todo }) => {
  const dispatch = useDispatch();
  const [visibleDescription, setVisibleDescription] = React.useState<boolean>(false);
  console.log('todo from Todo', todo);

  const refTodo = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  const onHandleVisibilityDescrip = (event: any) => {
    const path = event.target;

    const button = refTodo.current.getElementsByTagName('button')[0];
    const state = refTodo.current.getElementsByClassName('state')[0];

    if (refTodo.current.contains(path)) {
      if (button.contains(path) || state.contains(path)) {
        return;
        // console.log('onClick button or class state');
      } else {
        console.log('onClick on class todo next');
        setVisibleDescription(!visibleDescription);
      }
    }
  };

  const onHandleDeleteTodo = () => {
    dispatch(removeTodo(todo.id));
    console.log('onHandleDeleteTodo');
  };

  return (
    <div className="todo">
      <div ref={refTodo} onClick={onHandleVisibilityDescrip} className=" flex just-c-bs align-i-c ">
        <div className="main">
          <div className="left">
            <div className={`primordial ${visibleDescription ? 'rotared' : ''}`}>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
                />
              </svg>
            </div>
            <State state={todo.state} id={todo.id} />
          </div>
          <div className="right">
            <p className="task">{todo.task}</p>
          </div>
        </div>
        <div>
          <Button onclick={onHandleDeleteTodo} name="delete" className="btn-sm btn-danger" />
        </div>
      </div>

      {visibleDescription && (
        <div className="extra">
          <p className="decription">{todo.decription}</p>
          <p className="date">
            <span>From {todo.date.from}</span>
            {todo.date.to === null ? '' : <span> to {todo.date.to}</span>}
          </p>
        </div>
      )}
    </div>
  );
};

export default Todo;
