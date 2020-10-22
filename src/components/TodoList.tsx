import React from 'react';
// import { todoListDB } from '../DB';
import Todo from './Todo';

import './todolist.scss';

type PropsType = {
  todolist: TodoListType;
};

const Todolist: React.FC<PropsType> = ({ todolist }) => {
  console.log('from todolist', todolist);

  return (
    <div id="todo-list">
      {todolist.map((todo) => (
        <Todo key={`todo_${todo.id}`} todo={todo} />
      ))}
    </div>
  );
};

export default Todolist;
