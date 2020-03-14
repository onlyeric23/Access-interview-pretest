import { UserCoarse } from "../../common/interface";

export const TYPE_GET_USER_LIST = "TYPE_GET_USER_LIST";
export const TYPE_GET_USER_LIST_SUCCESS = "TYPE_GET_USER_LIST_SUCCESS";
export const TYPE_GET_USER_LIST_FAIL = "TYPE_GET_USER_LIST_FAIL";

export const getUserList = () => ({
  type: TYPE_GET_USER_LIST
});

export const getUserListSuccess = (result: UserCoarse[]) => ({
  type: TYPE_GET_USER_LIST_SUCCESS,
  payload: result
});

export const getUserListFail = (error: any) => ({
  type: TYPE_GET_USER_LIST_FAIL,
  payload: error
});
