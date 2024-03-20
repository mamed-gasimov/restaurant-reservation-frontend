import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  LoginPage,
  NotFound,
  RegisterPage,
  RestaurantsPage,
} from "@pages/index";
import { Wrapper } from "@components/index";
import { ROUTES } from "@router/routeNames";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: (
      <Wrapper>
        <RestaurantsPage />
      </Wrapper>
    ),
  },
  {
    path: ROUTES.register,
    element: (
      <Wrapper>
        <RegisterPage />
      </Wrapper>
    ),
  },
  {
    path: ROUTES.login,
    element: (
      <Wrapper>
        <LoginPage />
      </Wrapper>
    ),
  },
  {
    path: ROUTES.notFound,
    element: (
      <Wrapper>
        <NotFound />
      </Wrapper>
    ),
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
