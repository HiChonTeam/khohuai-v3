import React from 'react';

interface routeType {
  path: string,
  element: any;
}

interface routerType {
  [key: string]: routeType[]
};

//pages
const MainPage = React.lazy(() => import('./pages/Mainpage'));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));


const routes: routerType = {
  notlogin: [
    { path: '/login', element: LoginPage },
  ],
  main: [
    { path: '/', element: MainPage },
  ]
}

export default routes;