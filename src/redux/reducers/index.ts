import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todolist from './todolist'
import sortList from './sortList'


export const rootReducer = combineReducers({
  todolist,
  sortList,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>
