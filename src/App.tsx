import { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getAccessTokenByUserId,
  sendGetCurrentUser,
} from "@services/sendRequest";
import { AuthContext } from "@context/authContext";
import { Router } from "./router";
import {
  AccessTokenApiResponse,
  GetCurrentUserApiResponse,
} from "./types/apiResponse";

function App() {
  const { setUserId, userId, authToken, setAuthToken, setRestaurantOwnerInfo } =
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

  useEffect(() => {
    if (authToken) {
      const sendRequest = async () => {
        const response = (await sendGetCurrentUser(
          "/auth/current",
          authToken
        )) as GetCurrentUserApiResponse;
        if (response?.status === "error" || !response) {
          toast.error("Something went wrong!");
        } else if (response?.status === "success") {
          setRestaurantOwnerInfo({
            restaurantId: response.data.user?.restaurant?.id || null,
            restaurantName: response.data.user?.restaurant?.name || null,
          });
        }
      };

      sendRequest();
    }
  }, [authToken]);

  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
