const setErrorMessage = (error) => {
  if (error.data && error.status === 500) return "Server error";
  if (error.data && error.status === 401) return "User not logged in";
  if (error.data && error.status === 403) return "User is not admin";
  if (error.data) return error.data.message;
  return error.message;
};

export { setErrorMessage };
