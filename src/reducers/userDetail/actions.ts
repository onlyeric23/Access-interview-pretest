export const TYPE_GET_USER_DETAIL = "TYPE_GET_USER_DETAIL";
export const TYPE_GET_USER_DETAIL_SUCCESS = "TYPE_GET_USER_DETAIL_SUCCESS";
export const TYPE_GET_USER_DETAIL_FAIL = "TYPE_GET_USER_DETAIL_FAIL";

export const getUserDetail = (username: string) => ({
  type: TYPE_GET_USER_DETAIL,
  payload: username
});

export const getUserDetailSuccess = (result: any) => ({
  type: TYPE_GET_USER_DETAIL_SUCCESS,
  payload: result
});

export const getUserDetailFail = (error: any) => ({
  type: TYPE_GET_USER_DETAIL_SUCCESS,
  payload: error
});
