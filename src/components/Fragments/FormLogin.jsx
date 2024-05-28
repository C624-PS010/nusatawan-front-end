import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
    return (
        <form action="" className="flex flex-col gap-6 mt-10">
        <InputForm
          type="email"
          placeholder="Email"
          name="email">
        </InputForm>
        <InputForm
          type="password"
          placeholder="Kata Sandi"
          name="kataSandi">
        </InputForm>

        <Button classname="bg-primary w-full">Masuk</Button>
      </form>
    );
};

export default FormLogin;