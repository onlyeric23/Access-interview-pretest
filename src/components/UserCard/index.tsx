import React, { FC } from "react";
import { UserCoarse } from "../../common/interface";
import { GiPoliceBadge } from "react-icons/gi";

import "./styles.scss";

const UserRow: FC<UserCoarse> = ({ avatar_url, login, site_admin }) => {
  return (
    <div className="user-row">
      <img src={avatar_url} alt="" />
      <div className="info">
        <div className="name">{login}</div>
        {site_admin && <GiPoliceBadge />}
      </div>
    </div>
  );
};

export default UserRow;
