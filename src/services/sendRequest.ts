import { AxiosResponseError } from "src/types/errorTypes";
import { ApiResponse } from "src/types/apiResponse";
import { axiosInstance } from "./axiosInstance";

export const sendRequest = async (path: string, values: unknown) => {
  let response;
  try {
    const res = (await axiosInstance.post(path, values)).data as ApiResponse;
    response = { message: res.message, status: "success" };
  } catch (error) {
    const err = error as AxiosResponseError;
    if (err.response?.data) {
      response = {
        message: err.response.data?.message || "Something went wrong!",
        status: "error",
      } as ApiResponse;
    }
  }

  return response;
};
