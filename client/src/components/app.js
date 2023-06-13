import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./Profile";
import LoginPage from "./login";
import RegisterPage from "./Register";
import ComingSoonPage from "./CalorieTracker";
import EditProfile from "./EditProfile";

const Error = lazy(() => import("./Error"));

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
import RestaurantMenu from "./RestaurantMenu";
import { Provider } from "react-redux";
import store from "../utils/Store";
import Cart from "./Cart";
import RegisterPage from "./Register";
import Food from "./Food";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
};


const Login = () => {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
};



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <Suspense>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/food",
        element: <Food />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/Restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/Calorie",
        element: <ComingSoonPage />,
      }
    ],
    
  },
  ,
      {
        path: "/register",
        element: (
          <>
            <RegisterPage />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <Login />
          </>
        ),
        errorElement: (
          <Suspense>
            <Error />
          </Suspense>
        ),
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
        ],
      },
      {
        path: "/profile",
        element: (
          <>
            <EditProfile />
          </>
        ),
        errorElement: (
          <Suspense>
            <Error />
          </Suspense>
        ),
      },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
