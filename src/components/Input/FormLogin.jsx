import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../Input";
import Button from "../Button";
import LoadingSpin from "../Loading/LoadingSpin";
import { setErrorMessage } from "../../utils/errorHandler";

// API
import Auth from "../../network/Auth";
import localUser from "../../utils/localUser";
import { storeAuth, storeAdminAuth } from "../../utils/authHandler";

const FormLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const submitLoginHandler = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      const email = event.target.email.value;
      const password = event.target.password.value;

      const responseData = await Auth.login({ email, password });

      localUser.set(responseData.data);

      storeAuth(responseData.token.userToken);
      if (responseData.token.adminToken) storeAdminAuth(responseData.token.adminToken);

      setLoading(false);
      cleanInputField(event);
      console.log("Login successful:", responseData);

      setError(false);
      setMessage("Login successful");

      navigate("/");
    } catch (error) {
      console.log(error);

      setLoading(false);
      setError(true);
      setMessage(setErrorMessage(error));
    }
  };

  return (
    <form onSubmit={submitLoginHandler} className="flex flex-col gap-6 mt-10">
      <InputForm type="email" placeholder="Email" name="email"></InputForm>
      <InputForm type="password" placeholder="Kata Sandi" name="password"></InputForm>

      <p className={`text-${error ? "red" : "green"}-500`}>{message}</p>

      <Button classname="bg-primary w-full">
        {loading ? <LoadingSpin color="white" /> : "Masuk"}
      </Button>
    </form>
  );
};

const cleanInputField = (event) => {
  event.target.email.value = "";
  event.target.password.value = "";
};

export default FormLogin;
