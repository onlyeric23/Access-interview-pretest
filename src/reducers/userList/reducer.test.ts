import reducer, { State, initState } from "./reducer";
import { getUserList, getUserListFail, getUserListSuccess } from "./actions";
import { UserCoarse } from "../../common/interface";

it("test initState", () => {
  expect(reducer(undefined, {} as any)).toEqual(initState);
});

it("test getUserList", () => {
  expect(reducer(undefined, getUserList()).loading).toBeTruthy();
});

it("test getUserListSuccess", () => {
  const state: State = {
    users: [
      { id: 1 } as UserCoarse,
      { id: 2 } as UserCoarse,
      { id: 3 } as UserCoarse
    ],
    loading: true
  };
  expect(
    reducer(
      state,
      getUserListSuccess([
        { id: 4 } as UserCoarse,
        { id: 9 } as UserCoarse,
        { id: 6 } as UserCoarse
      ])
    )
  ).toEqual({
    users: [
      { id: 1 } as UserCoarse,
      { id: 2 } as UserCoarse,
      { id: 3 } as UserCoarse,
      { id: 4 } as UserCoarse,
      { id: 9 } as UserCoarse,
      { id: 6 } as UserCoarse
    ],
    loading: false
  });
});

it("test getUserListFail", () => {
  expect(reducer(undefined, getUserListFail(undefined)).loading).toBeFalsy();
});