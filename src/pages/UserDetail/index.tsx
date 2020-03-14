import React, { FunctionComponent, useEffect } from "react";
import { useLocation, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { State as StateUserDetail } from "../../reducers/userDetail/reducer";
import { getUserDetail } from "../../reducers/userDetail/actions";

import "./styles.scss";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const UserDetail: FunctionComponent = () => {
  const query = useQuery();
  const username = query.get("username");

  const dispatch = useDispatch();
  const { loading, user } = useSelector(
    (store: { userDetail: StateUserDetail }) => store.userDetail
  );

  useEffect(() => {
    if (username) {
      dispatch(getUserDetail(username));
    }
  }, [dispatch, username]);

  if (!username) {
    return <Redirect to="/" />;
  }
  return (
    <div className="page user-detail">
      {loading ? (
        <div className="loading">loading...</div>
      ) : user ? (
        <>
          <img src={user.avatar_url} alt="" />
          <div>Name: {user.name}</div>
          <div>Bio: {user.bio}</div>
          <div>Username: {user.login}</div>
          {/* <div>{user.site_admin}</div> */}
          <div>Location: {user.location}</div>
          <div>Blog: {user.blog}</div>
        </>
      ) : (
        undefined
      )}
    </div>
  );
};

export default UserDetail;
