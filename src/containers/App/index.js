/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from '../../routes';
export const App = () => {
  return <BrowserRouter> {Routes} </BrowserRouter>;
};
export default App;
