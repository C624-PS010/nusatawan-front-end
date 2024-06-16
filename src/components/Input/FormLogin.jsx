import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../Input";
import Button from "../Button";

// API
import Auth from "../../network/Auth";
import localUser from "../../utils/localUser";
import { storeAuth, storeAdminAuth } from "../../utils/authHandler";

const FormLogin = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const submitLoginHandler = async (event) => {
    try {
      event.preventDefault();

      const email = event.target.email.value;
      const password = event.target.password.value;

      const responseData = await Auth.login({ email, password });

      localUser.set(responseData.data);

      storeAuth(responseData.token.userToken);
      if (responseData.token.adminToken) storeAdminAuth(responseData.token.adminToken);

      cleanInputField(event);
      console.log("Login successful:", responseData);

      setError(false);
      setSuccess(true);
      setMessage("Login successful");

      navigate("/");
    } catch (error) {
      console.log(error);

      setError(true);
      setSuccess(false);

      if (error.data) setMessage(error.data.message);
      else setMessage(error.message);
    }
  };

  return (
    <form onSubmit={submitLoginHandler} className="flex flex-col gap-6 mt-10">
      <InputForm type="email" placeholder="Email" name="email"></InputForm>
      <InputForm type="password" placeholder="Kata Sandi" name="password"></InputForm>

      {error && <p className="text-red-500">{message}</p>}
      {success && <p className="text-green-500">{message}</p>}

      <Button classname="bg-primary w-full">Masuk</Button>
    </form>
  );
};

const cleanInputField = (event) => {
  event.target.email.value = "";
  event.target.password.value = "";
};

export default FormLogin;
