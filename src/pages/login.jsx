import AuthLayout from '../components/Input/AuthLayout'
import FormLogin from '../components/Input/FormLogin'

const LoginPage = () => {
    return (
        <AuthLayout title="Masuk ke Nusatawan" type="login">
            <FormLogin></FormLogin>
        </AuthLayout>
    )
}

export default LoginPage;