import React from 'react';
import {LOCALSTORAGE_TOKEN_NAME} from '../../configurations';
import LocalStorageUtils from '../../utils/LocalStorageUtils';
import Welcome from '../Welcome';
import Chatting from '../Chatting';
export const Home = () => {
  const user = LocalStorageUtils.getUser(LOCALSTORAGE_TOKEN_NAME);
  return !user.fullname ? <Welcome /> : <Chatting />;
};
export default Home;
