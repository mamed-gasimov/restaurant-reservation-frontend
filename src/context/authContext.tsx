/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useMemo, useState } from "react";

type restaurantInfo = {
  restaurantId: string | null;
  restaurantName: string | null;
};

interface IDefaultState {
  authToken: string;
  setAuthToken: (token: string) => void;
  userId: string;
  setUserId: (userId: string) => void;
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
  restaurantOwner: restaurantInfo;
  setRestaurantOwnerInfo: (info: restaurantInfo) => void;
}

const authDefaultState: IDefaultState = {
  authToken: "",
  setAuthToken: (_token: string) => {},
  userId: "",
  setUserId: (_userId) => {},
  isAuth: false,
  setIsAuth: (_bool) => {},
  restaurantOwner: {
    restaurantId: null,
    restaurantName: null,
  },
  setRestaurantOwnerInfo: (_info: restaurantInfo) => {},
};

export const AuthContext = createContext(authDefaultState);

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [authToken, setAuthToken] = useState("");
  const [userId, setUserId] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [restaurantOwner, setRestaurantOwnerInfo] = useState<restaurantInfo>({
    restaurantId: null,
    restaurantName: null,
  });
  const ctx = useMemo(
    () => ({
      authToken,
      setAuthToken,
      userId,
      setUserId,
      isAuth,
      setIsAuth,
      restaurantOwner,
      setRestaurantOwnerInfo,
    }),
    [authToken, userId, isAuth, restaurantOwner.restaurantId]
  );
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};
