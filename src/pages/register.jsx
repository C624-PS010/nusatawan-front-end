import AuthLayout from '../components/Input/AuthLayout'
import FormRegister from '../components/Input/FormRegister'

const RegisterPage = () => {
    return (
        <AuthLayout title="Daftar ke Nusatawan" type="register">
            <FormRegister />
        </AuthLayout>
    )
}

export default RegisterPage;