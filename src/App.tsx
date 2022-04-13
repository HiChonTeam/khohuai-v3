import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";


//loading
import LoadingPage from "./components/Loading/LoadingPage";
//routes
import routes from "./routes";
//layout
import DefaultLayout from "./layouts/DefaultLayout";
//pages
const LoginPage = React.lazy(() => import("./pages/LoginPage"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route element={<DefaultLayout />}>
            {routes.map((route, key) => {
              return (
                <Route
                  key={key}
                  path={route.path}
                  element={<route.element />}
                />
              );
            })}
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
