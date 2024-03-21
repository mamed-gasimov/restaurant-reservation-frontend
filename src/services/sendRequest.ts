import { AxiosResponseError } from "src/types/errorTypes";
import { AccessTokenApiResponse, ApiResponse } from "src/types/apiResponse";
import { AccessTokenByUserId, LoginForm, RegisterForm } from "src/types/forms";
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

export const sendGetRestaurantsRequest = async (
  path: string,
  token: string
) => {
  let response;
  try {
    const res = (
      await axiosInstance.get(path, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    ).data as ApiResponse;
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
