import { UserCoarse } from "../../common/interface";
import {
  TYPE_GET_USER_LIST,
  TYPE_GET_USER_LIST_SUCCESS,
  TYPE_GET_USER_LIST_FAIL
} from "./actions";

export interface State {
  loading: boolean;
  users: UserCoarse[];
}

const initState: State = {
  loading: false,
  users: []
};

const reducer = (state = initState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case TYPE_GET_USER_LIST:
      return { ...state, loading: true };
    case TYPE_GET_USER_LIST_SUCCESS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
        loading: false
      };
    case TYPE_GET_USER_LIST_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
