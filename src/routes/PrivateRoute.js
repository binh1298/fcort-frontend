import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import LocalStorageUtils from '../utils/LocalStorageUtils';
export const PrivateRoute = ({component, ...rest}) => {
  const user = LocalStorageUtils.getUser();
  if (user && user.sub?.length > 0) {
    // TODO should check authorization here

    return <Route {...rest} component={component} />;
  }

  // We need to keep the path for first page load
  // tokenStorageService.set(pathNameKey.FIRST_LOAD, location.pathname);
  return <Redirect to="/login" />;
};
