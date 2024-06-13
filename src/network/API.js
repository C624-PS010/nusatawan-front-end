import axios from "axios";
import config from "../utils/config";

// API request intance
const API = axios.create({
  baseURL: config.baseUrl,
  timeout: 10000,
});

// Response handler
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      throw error.message;
    } else {
      throw error;
    }
  }
);

export default API;
