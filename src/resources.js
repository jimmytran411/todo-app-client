import axios from "axios";
import { config } from "./config";
import { getToken } from "./utils/auth";

export const getTodos = () => {
  return axios.get(`${config.baseApi}/todos`, {
    headers: {
      "x-auth": getToken(),
    },
  });
};
