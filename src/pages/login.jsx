import { Link } from "react-router-dom";
import FormLogin from "../components/Input/FormLogin";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <h1 className="text-2xl font-[700] text-primary text-center">Login</h1>
      <FormLogin></FormLogin>
      <p className="text-sm mt-5 text-center">
        Belum punya akun?{" "}
        <Link to="/auth/register" className="font-bold text-primary">
          Ayo Daftar
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
