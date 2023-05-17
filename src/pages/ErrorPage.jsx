import {Link} from "react-router-dom";
import errorImg from "../assets/Error-bro404.svg";
const ErrorPage = () => {
  return (
    <div className="container mx-auto h-screen md:flex items-center justify-center">
      <div className="text-center my-8">
        <h1 className="font-bold text-3xl md:text-5xl mb-8 text-primary">
          404 Page not found!
        </h1>
        <Link
          to="/"
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          go home
        </Link>
      </div>
      <div>
        <img
          className="w-full md:w-[700px] max-w-3xl"
          src={errorImg}
          alt="error 404 page"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
