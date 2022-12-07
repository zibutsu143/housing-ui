import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://housing-api.stag.mpao.mv/employments/";

export const getPublicContent = () => {
  return axios.get(API_URL + "M000001/123", { headers: authHeader() });
};

export const getUserBoard = () => {
  return axios.get(API_URL + "M000001/123", { headers: authHeader() });
};
