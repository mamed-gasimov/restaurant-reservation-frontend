import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getAccessTokenByUserId } from "@services/sendRequest";
import { AuthContext } from "@context/authContext";
import { Router } from "./router";
import { AccessTokenApiResponse } from "./types/apiResponse";

function App() {
  const { setUserId, userId, authToken, setAuthToken } =
    useContext(AuthContext);
  const item = localStorage.getItem("restaurant-reservation-app");

  useEffect(() => {
    if (item) {
      try {
        const { userId } = JSON.parse(item);
        if (userId) setUserId(userId);
      } catch (error) {
        console.log(error);
      }
    }
  }, [item]);

  useEffect(() => {
    if (userId && !authToken) {
      const sendRequest = async () => {
        const response = (await getAccessTokenByUserId("/auth/token", {
          userId,
        })) as AccessTokenApiResponse;

        if (response?.status === "success") {
          setAuthToken(response.data.token);
        }
      };

      sendRequest();
    }
  }, [userId, authToken]);

  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
