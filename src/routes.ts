import React from 'react';

interface routeType {
  path: string,
  element: any;
}

interface RouterType {
  [key: string]: routeType[]
};

//pages
const LoginPage = React.lazy(() => import("./pages/AuthPage/Login"));
const RegisterPage = React.lazy(() => import('./pages/AuthPage/Register'));

const CartPage = React.lazy(() => import('./pages/CartPage'));

const routes: RouterType = {
  notLoggedIn: [
    { path: '/login', element: LoginPage },
    { path: '/register', element: RegisterPage }
  ],
  loggedIn: [
    { path: '/cart', element: CartPage },
  ]
}

export default routes;