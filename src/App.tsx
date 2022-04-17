import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

//loading
import LoadingPage from "./components/Loading/LoadingPage";
//routes
import routes from "./routes";
//layout
import DefaultLayout from "./layouts/DefaultLayout";
import { useAppDispatch, useAppSelector } from "./hook";
import { checkSession } from "./store/slices/auth";

const App: React.FC = () => {

  const stateAuth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkSession())
    console.log('auth ', stateAuth);
  }, [stateAuth])
  
 
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route element={<DefaultLayout />}>
            {routes.main.map((route, key) => {
              return (
                <Route
                  key={key}
                  path={route.path}
                  element={<route.element />}
                />
              );
            })}
          </Route>
          <Route>
            {routes.notlogin.map((route, key) => {
              return (
                <Route
                  key={key}
                  path={route.path}
                  element={<route.element />}
                />
              );
            })}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
