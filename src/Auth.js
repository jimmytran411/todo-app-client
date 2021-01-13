import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "./utils/auth";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/user/login" />
      }
    />
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
