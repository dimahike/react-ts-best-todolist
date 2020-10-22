import { ADD_TODO, UPDATE_STATE, REMOVE_TODO } from '../typeActions'

export const addTodo = (todo?: TodoType) => ({
  type: ADD_TODO,
  payload: todo
})

export const updateState = (newState: any) => ({
  type: UPDATE_STATE,
  payload: newState
})

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id
})


