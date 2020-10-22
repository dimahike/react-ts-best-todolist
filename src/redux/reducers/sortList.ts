import { SORT_BY_STATE } from "../typeActions";

const initialState: InitialSortListType = {
  state: 0
};

const sortList = (state = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {


    case SORT_BY_STATE: {

      return { state: action.payload }
    }

    default:
      return state;
  }
}

export default sortList;