import { Outlet } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AuthLayout = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="bg-white flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-10">
          <main id="maincontent">
            <Outlet />
          </main>
        </div>
        <div className="md:block hidden w-1/2 p-5">
          <LazyLoadImage src="/img/login.jpg" alt="" className="rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
