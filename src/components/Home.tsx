import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions/todolist';

import './home.scss';
import NewTask from './NewTask';
import TodoList from './TodoList';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const todolist = useSelector(({ todolist }: any) => todolist);
  const state = useSelector(({ sortList }: any) => sortList.state);

  const filteredTodolist = todolist.filter((todo: TodoType) => {
    if (state === 0) {
      return todo.state !== state;
    } else {
      return todo.state === state;
    }
  });

  console.log('filteredTodolist', filteredTodolist);

  React.useEffect(() => {
    dispatch(addTodo());
  }, []);

  return (
    <div className="paper">
      <div id="home">
        <h2 className="home-header">Add New Task</h2>
        <NewTask />
        <h2 className="home-header">Your Tasks</h2>
        <TodoList todolist={filteredTodolist} />
      </div>
    </div>
  );
};
