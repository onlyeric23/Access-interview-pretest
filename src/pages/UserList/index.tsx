import React, {
  FunctionComponent,
  useEffect,
  useCallback,
  useRef
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getUserList } from "../../reducers/userList/actions";
import { State as StateUserList } from "../../reducers/userList/reducer";
import UserCard from "../../components/UserCard";

import "./styles.scss";

const DISTANCE = 60;

const UserList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector(
    (store: { userList: StateUserList }) => store.userList
  );

  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = useCallback(() => {
    const element = ref.current;
    if (!element || loading) return;
    if (
      element.scrollHeight - element.clientHeight - element.scrollTop <=
      DISTANCE
    ) {
      dispatch(getUserList());
    }
  }, [dispatch, loading]);

  const checkLoadMore = useCallback(() => {
    const element = ref.current;
    if (!element || loading) return;
    if (element.scrollHeight === element.clientHeight) {
      dispatch(getUserList());
    }
  }, [loading, dispatch]);

  useEffect(() => {
    checkLoadMore();
  }, [users.length, checkLoadMore]);

  useEffect(() => {
    document.addEventListener("resize", checkLoadMore);
    return () => document.removeEventListener("resize", checkLoadMore);
  }, [checkLoadMore]);

  return (
    <div className="page user-list" onScroll={handleScroll} ref={ref}>
      {users.map(user => (
        <Link to={`/user?username=${user.login}`}>
          <UserCard {...user} key={user.id} />
        </Link>
      ))}
      {loading && <div className="loading">loading...</div>}
    </div>
  );
};

export default UserList;
