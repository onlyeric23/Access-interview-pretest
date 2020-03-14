import { ofType, Epic } from "redux-observable";
import { from, of } from "rxjs";
import { map, catchError, withLatestFrom, mergeMap } from "rxjs/operators";
import {
  TYPE_GET_USER_LIST,
  getUserListSuccess,
  getUserListFail
} from "./actions";
import { State } from "./reducer";

const URL = "https://api.github.com/users";

export const PAGE_SIZE = 20;

export const fetchUserListEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(TYPE_GET_USER_LIST),
    withLatestFrom(state$),
    map(([, state]) => state.userList),
    mergeMap(({ users }: State) => {
      const since = users.length > 0 ? users[users.length - 1].id : 0;
      const url = `${URL}?since=${since}&per_page=${PAGE_SIZE}`;
      return from(fetch(url).then(result => result.json()));
    }),
    map(getUserListSuccess),
    catchError(error => of(getUserListFail(error)))
  );
