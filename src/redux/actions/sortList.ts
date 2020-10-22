import { SORT_BY_STATE } from "../typeActions";

export const sortByState = (todo: number) => ({
  type: SORT_BY_STATE,
  payload: todo
})
