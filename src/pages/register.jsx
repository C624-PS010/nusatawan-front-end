import { Link } from "react-router-dom";
import FormRegister from "../components/Input/FormRegister";

const RegisterPage = () => {
  return (
    <div className="registerPage">
      <h1 className="text-2xl font-[700] text-primary text-center">Login</h1>
      <FormRegister></FormRegister>
      <p className="text-sm mt-5 text-center">
        Sudah punya akun?{" "}
        <Link to="/auth/login" className="font-bold text-primary">
          Masuk Sekarang
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
