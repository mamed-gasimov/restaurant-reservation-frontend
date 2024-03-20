import axios from "axios";

const url = "http://localhost:3001/api";

export const axiosInstance = axios.create({ baseURL: url });

export const axiosPrivate = axios.create({
  baseURL: url,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
