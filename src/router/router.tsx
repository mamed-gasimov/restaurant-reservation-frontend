import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginPage, RegisterPage, RestaurantsPage } from "@pages/index";
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
    path: ROUTES.restaurants,
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
        <h1>NOT FOUND!</h1>
      </Wrapper>
    ),
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
