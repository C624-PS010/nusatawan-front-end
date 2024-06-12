const localUser = {
  get: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
  set: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    window.dispatchEvent(new Event("localUser"));
  },
  remove: () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("localUser"));
  },
};

export default localUser;
