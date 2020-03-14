import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserDetail from "./pages/UserDetail";
import UserList from "./pages/UserList";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/user" component={UserDetail} />
          <Route path="/" component={UserList} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
