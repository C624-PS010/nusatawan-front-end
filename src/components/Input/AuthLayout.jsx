import { Link } from 'react-router-dom';

const AuthLayout = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children, title, type } = props;
    return (
        <section className='bg-[#F9FAF4] min-h-screen flex items-center justify-center'>
            <div className="bg-white flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="md:w-1/2 px-8 md:px-10"> 
                    <h1 className="text-2xl font-[700] text-primary text-center">{title}</h1>
                    {children}
                    <NavigationForm type={type} />
                </div>
                <div className='md:block hidden w-1/2 p-5'>
                    <img src="./public/img/login.jpg" alt="" className='rounded-2xl' />
                </div>
            </div>
        </section>
    );
};

// eslint-disable-next-line react/prop-types
const NavigationForm = ({ type }) => {
    if (type === "login") {
        return (
            <p className='text-sm mt-5 text-center'>
                Belum punya akun?{" "}
                <Link to="/register" className='font-bold text-secondary'>
                    Ayo Daftar 
                </Link>
            </p>
        );
    } else {
        return (
            <p className='text-sm mt-5 text-center'>
            Sudah punya akun?{" "}
            <Link to="/login" className='font-bold text-secondary'>
                Masuk Sekarang
            </Link>
        </p>
        )
    }
}

export default AuthLayout;