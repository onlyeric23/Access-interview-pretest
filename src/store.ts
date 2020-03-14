import { createStore, combineReducers, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import userList from "./reducers/userList/reducer";
import userDetail from "./reducers/userDetail/reducer";
import { fetchUserListEpic } from "./reducers/userList/epics";
import { fetchUserDetailEpic } from "./reducers/userDetail/epics";

export const rootEpic = combineEpics(fetchUserListEpic, fetchUserDetailEpic);

export const rootReducer = combineReducers({
  userList,
  userDetail
});

const middlewareEpic = createEpicMiddleware();

function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(middlewareEpic))
  );

  middlewareEpic.run(rootEpic);

  return store;
}

export default configureStore;
