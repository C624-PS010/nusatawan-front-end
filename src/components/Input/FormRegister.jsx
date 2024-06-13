import InputForm from "../Input";
import Button from "../Button";
import Auth from "../../network/Auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import localUser from "../../utils/localUser";

const FormRegister = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const submitRegisterHandler = async (event) => {
    try {
      event.preventDefault();

      // Getting and confirming data
      const username = event.target.username.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const passwordConfirm = event.target.passwordConfirm.value;
      const phone = event.target.telepon.value;
      confirmPassword(password, passwordConfirm);

      // Post the data to API
      const responseData = await Auth.register({ username, email, password, phone });

      localUser.set(responseData.data);

      cleanInputField(event);
      console.log("Register successful:", responseData);

      setError(false);
      setSuccess(true);
      setMessage("Register successful");

      navigate("/");
    } catch (error) {
      console.log(error);
      setError(true);
      setSuccess(false);
      setMessage(error.message || "An error occurred during login.");
    }
  };

  return (
    <form onSubmit={submitRegisterHandler} className="flex flex-col gap-5 mt-10">
      <InputForm type="text" placeholder="Username" name="username"></InputForm>
      <InputForm type="email" placeholder="Email" name="email"></InputForm>
      <InputForm type="tel" placeholder="No. Telepon" name="telepon" />
      <InputForm type="password" placeholder="Kata Sandi" name="password"></InputForm>
      <InputForm
        type="password"
        placeholder="Konfirmasi Kata Sandi"
        name="passwordConfirm"
      ></InputForm>

      {error && <p className="text-red-500">{message}</p>}
      {success && <p className="text-green-500">{message}</p>}

      <Button classname="bg-primary w-full">Daftar</Button>
    </form>
  );
};

const confirmPassword = (password, passwordConfirm) => {
  if (password !== passwordConfirm) {
    throw new Error("Password confirmation doesn't match");
  }
};

const cleanInputField = (event) => {
  event.target.username.value = "";
  event.target.email.value = "";
  event.target.telepon.value = "";
  event.target.password.value = "";
  event.target.passwordConfirm.value = "";
};

export default FormRegister;
