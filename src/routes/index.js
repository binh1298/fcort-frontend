import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {PublicRoute} from './PublicRoute';
import SignUp from '../containers/SignUp';
import Login from '../containers/Login';

export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
];
export const Routes = (
  <Switch>
    {publicRoutes.map((route) => (
      <PublicRoute
        key={route.name}
        exact={true}
        path={route.path}
        component={route.component}
      />
    ))}
    <Redirect to="/login" />
  </Switch>
);
