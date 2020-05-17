/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from '../../routes';
import Login from '../Login';
import SignUp from '../SignUp';
import Home from '../Home';
// import './styles.css';

export const App = () => {
  return (
    <div>
    <Home />
      <BrowserRouter> {Routes} </BrowserRouter>
    </div>
  );
};
export default App;
