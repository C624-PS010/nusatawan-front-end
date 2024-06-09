import InputForm from "../Input";
import Button from "../Button";

const FormRegister = () => {
    return (
        <form action="" className="flex flex-col gap-5 mt-10">
        <InputForm
          type="text"
          placeholder="Nama Lengkap"
          name="namaLengkap">
        </InputForm>
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
        <InputForm
          type="password"
          placeholder="Konfirmasi Kata Sandi"
          name="konfirmasiKataSandi">
        </InputForm>

        <Button classname="bg-primary w-full">Daftar</Button>
      </form>
    );
};

export default FormRegister;