import React from 'react';
import {LOCALSTORAGE_TOKEN_NAME} from '../../configurations';
import LocalStorageUtils from '../../utils/LocalStorageUtils';
import Welcome from '../Welcome';
import Home from '../Home';
export const Navigation = () => {
  const user = LocalStorageUtils.getUser(LOCALSTORAGE_TOKEN_NAME);
  return !user.fullname ? <Welcome /> : <Home />;
};
export default Navigation;
