import { todoListDB } from "../../DB";
import { ADD_TODO, REMOVE_TODO, UPDATE_STATE } from "../typeActions";

const initialState: TodoListType = todoListDB;

const todolist = (state = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case ADD_TODO: {
      if (action.payload === undefined) {
        return [
          ...state
        ]
      }
      return [
        ...state,
        action.payload
      ]
    }
    case UPDATE_STATE: {
      const findIndex = state.findIndex(item => item.id === action.payload.id);
      state[findIndex].state = action.payload.state;

      return [...state]
    }
    case REMOVE_TODO: {
      const newTodolist = state.filter((item: TodoType) => item.id !== action.payload)
      return newTodolist;
    }
    default:
      return state;
  }
}

export default todolist;