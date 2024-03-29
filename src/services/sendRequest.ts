import { AxiosResponseError } from "src/types/errorTypes";
import {
  AccessTokenApiResponse,
  ApiResponse,
  GetReservationsApiResponse,
  Reservation,
  Restaurant,
  User,
} from "src/types/apiResponse";
import {
  AccessTokenByUserId,
  LoginForm,
  RegisterForm,
  ReservationForm,
} from "src/types/forms";
import { axiosInstance } from "./axiosInstance";

export const sendRegisterRequest = async (
  path: string,
  values: RegisterForm
) => {
  let response;
  try {
    const res = (await axiosInstance.post(path, values)).data as ApiResponse;
    response = { data: res, status: "success" };
  } catch (error) {
    const err = error as AxiosResponseError;
    if (err.response?.data) {
      response = {
        data: err.response.data,
        status: "error",
      } as ApiResponse;
    }
  }

  return response;
};

export const sendLoginRequest = async (path: string, values: LoginForm) => {
  let response;
  try {
    const res = (await axiosInstance.post(path, values)).data as ApiResponse;
    response = { data: res, status: "success" };
  } catch (error) {
    const err = error as AxiosResponseError;
    if (err.response?.data) {
      response = {
        data: err.response.data,
        status: "error",
      } as ApiResponse;
    }
  }

  return response;
};

export const getAccessTokenByUserId = async (
  path: string,
  values: AccessTokenByUserId
) => {
  let response;
  try {
    const res = (await axiosInstance.post(path, values))
      .data as AccessTokenApiResponse;
    response = { data: res, status: "success" };
  } catch (error) {
    const err = error as AxiosResponseError;
    if (err.response?.data) {
      response = {
        data: err.response.data,
        status: "error",
      } as ApiResponse;
    }
  }

  return response;
};

export const sendGetRestaurantsRequest = async (path: string) => {
  let response;
  try {
    const res = (await axiosInstance.get(path)).data as {
      restaurants: Restaurant[];
    };
    response = { data: res, status: "success" };
  } catch (error) {
    const err = error as AxiosResponseError;
    if (err.response?.data) {
      response = {
        data: err.response.data,
        status: "error",
      } as ApiResponse;
    }
  }

  return response;
};

export const sendGetSingleRestaurant = async (path: string) => {
  let response;
  try {
    const res = (await axiosInstance.get(path)).data as {
      restaurant: Restaurant;
    };
    response = { data: res, status: "success" };
  } catch (error) {
    const err = error as AxiosResponseError;
    if (err.response?.data) {
      response = {
        data: err.response.data,
        status: "error",
      } as ApiResponse;
    }
  }

  return response;
};

export const sendCreateReservationRequest = async (
  path: string,
  values: ReservationForm & { restaurantId: string },
  authToken: string
) => {
  let response;
  try {
    const res = (
      await axiosInstance.post(path, values, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
    ).data as {
      message: string;
      reservation: Reservation;
    };
    response = { data: res, status: "success" };
  } catch (error) {
    const err = error as AxiosResponseError;
    if (err.response?.data) {
      response = {
        data: err.response.data,
        status: "error",
      } as ApiResponse;
    }
  }

  return response;
};

export const sendGetCurrentUser = async (path: string, authToken: string) => {
  let response;
  try {
    const res = (
      await axiosInstance.get(path, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
    ).data as {
      message: string;
      user: User;
    };
    response = { data: res, status: "success" };
  } catch (error) {
    const err = error as AxiosResponseError;
    if (err.response?.data) {
      response = {
        data: err.response.data,
        status: "error",
      } as ApiResponse;
    }
  }

  return response;
};

export const sendGetReservations = async (path: string, authToken: string) => {
  let response;
  try {
    const res = (
      await axiosInstance.get(path, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
    ).data as GetReservationsApiResponse;
    response = { data: res, status: "success" };
  } catch (error) {
    const err = error as AxiosResponseError;
    if (err.response?.data) {
      response = {
        data: err.response.data,
        status: "error",
      } as ApiResponse;
    }
  }

  return response;
};

export const sendUpdateReservation = async (
  path: string,
  values: { reservationId: string; status: "approved" | "rejected" },
  authToken: string
) => {
  let response;
  try {
    const res = (
      await axiosInstance.put(path, values, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
    ).data as { message: string };
    response = { data: res, status: "success" };
  } catch (error) {
    const err = error as AxiosResponseError;
    if (err.response?.data) {
      response = {
        data: err.response.data,
        status: "error",
      } as ApiResponse;
    }
  }

  return response;
};
