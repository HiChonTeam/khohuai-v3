import React from 'react';

interface routeType {
  path: string,
  element: any;
}

interface routerType {
  [key: string]: routeType[]
};

//pages

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const CartPage = React.lazy(() => import('./pages/CartPage'));

const routes: routerType = {
  notLoggedIn: [
    { path: '/login', element: LoginPage },
  ],
  loggedIn: [
    { path: '/cart', element: CartPage },
  ]
}

export default routes;