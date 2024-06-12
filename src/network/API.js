import axios from "axios";

// API request intance
const API = axios.create({
  baseURL: "http://103.150.92.104:2024",
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
