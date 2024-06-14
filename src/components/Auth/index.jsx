import { Navigate, Outlet } from "react-router-dom";
import localUser from "../../utils/localUser";

const Auth = () => {
  const isLoggedIn = localUser.get();

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default Auth;
