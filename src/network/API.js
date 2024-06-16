import axios from "axios";
import config from "../utils/config";

// API request intance
const API = axios.create({
  baseURL: config.baseUrl,
  timeout: 15000,
});

// Response handler
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      throw error.response;
    } else {
      throw error;
    }
  }
);

export default API;
