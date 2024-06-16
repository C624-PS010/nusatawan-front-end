import API from "./API";

const Auth = {
  async register(data) {
    const response = API.post("/auth/register", data, {
      "Content-Type": "application/json",
    });

    return (await response).data;
  },

  async login(data) {
    const response = API.post("/auth/login", data, {
      "Content-Type": "application/json",
    });

    return (await response).data;
  },
};

export default Auth;
