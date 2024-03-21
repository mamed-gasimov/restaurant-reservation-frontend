import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { ROUTES } from "@router/routeNames";
import { AuthContext } from "@context/authContext";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const RouteGuard = ({ children }: IProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { authToken, userId } = useContext(AuthContext);

  const redirectToHome = () => {
    if (pathname === ROUTES.login || pathname === ROUTES.register) {
      navigate(ROUTES.home);
    }
  };

  useEffect(() => {
    if (userId && authToken) {
      redirectToHome();
    }
  }, [authToken]);

  return <>{children}</>;
};

export default RouteGuard;
