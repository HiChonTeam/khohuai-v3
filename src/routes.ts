import React from 'react';

//pages
const MainPage = React.lazy(() => import('./pages/Mainpage'));


const routes = [
  { path: '/', element: MainPage },
]

export default routes;