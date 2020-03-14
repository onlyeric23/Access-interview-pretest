import { ofType, Epic } from "redux-observable";
import { from, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import {
  TYPE_GET_USER_DETAIL,
  getUserDetailFail,
  getUserDetailSuccess
} from "./actions";

const URL = "https://api.github.com/users";

export const fetchUserDetailEpic: Epic = action$ =>
  action$.pipe(
    ofType(TYPE_GET_USER_DETAIL),
    mergeMap(action => from(fetch(`${URL}/${action.payload}`))),
    mergeMap(result => from(result.json())),
    map(getUserDetailSuccess),
    catchError(error => of(getUserDetailFail(error)))
  );
