import AuthLayout from '../components/Layouts/AuthLayouts'
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
    return (
        <AuthLayout title="Daftar ke Nusatawan" type="register">
            <FormRegister />
        </AuthLayout>
    )
}

export default RegisterPage;