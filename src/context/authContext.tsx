import { createContext, useMemo, useState } from "react";

interface IDefaultState {
  authToken: string;
  setAuthToken: (token: string) => void;
  userId: string;
  setUserId: (userId: string) => void;
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
}

const authDefaultState: IDefaultState = {
  authToken: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setAuthToken: (_token: string) => {},
  userId: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUserId: (_userId) => {},
  isAuth: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsAuth: (_bool) => {},
};

export const AuthContext = createContext(authDefaultState);

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [authToken, setAuthToken] = useState("");
  const [userId, setUserId] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const ctx = useMemo(
    () => ({ authToken, setAuthToken, userId, setUserId, isAuth, setIsAuth }),
    [authToken, userId, isAuth]
  );
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};
