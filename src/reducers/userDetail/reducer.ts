import { UserFine } from "../../common/interface";
import {
  TYPE_GET_USER_DETAIL,
  TYPE_GET_USER_DETAIL_SUCCESS,
  TYPE_GET_USER_DETAIL_FAIL
} from "./actions";

export interface State {
  loading: boolean;
  user?: UserFine;
}

const initState: State = {
  loading: false
};

const reducer: (
  state: State,
  action: { type: string; payload: any }
) => State = (state = initState, action) => {
  switch (action.type) {
    case TYPE_GET_USER_DETAIL:
      return { ...state, loading: true };
    case TYPE_GET_USER_DETAIL_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case TYPE_GET_USER_DETAIL_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
