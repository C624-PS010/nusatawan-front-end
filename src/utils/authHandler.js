const storeAuth = (userToken) => {
  localStorage.setItem("userToken", userToken);
};

const storeAdminAuth = (adminToken) => {
  localStorage.setItem("adminToken", adminToken);
};

const getAuth = () => {
  return localStorage.getItem("userToken");
};

const getAdminAuth = () => {
  return localStorage.getItem("adminToken");
};

const checkAuth = () => {
  if (!getAuth()) throw new Error("User token required, please login first");
};

const checkAdminAuth = () => {
  if (!getAdminAuth()) throw new Error("Admin token required, please login as admin first");
};

export { storeAuth, storeAdminAuth, getAuth, getAdminAuth, checkAuth, checkAdminAuth };
