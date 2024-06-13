import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="bg-white flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-10">
          <Outlet />
        </div>
        <div className="md:block hidden w-1/2 p-5">
          <img src="/img/login.jpg" alt="" className="rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
