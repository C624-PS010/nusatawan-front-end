const ErrorPage = () => {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-primary text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-white text-lg">{"The page you're looking for doesn't exist."}</p>
    </div>
  );
};

export default ErrorPage;
