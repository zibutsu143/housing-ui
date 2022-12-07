import axios from "axios";

const API_URL = "https://housing-api.stag.mpao.mv/auth/";

export const login = (email: string, password: string) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      console.log("response from login", response);
      if (response.data.accessToken) {
        console.log("response from login", response);
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
