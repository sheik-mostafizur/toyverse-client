import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import useTitle from "../../hooks/useTitle";
import LoginForm from "./LoginForm";

const Login = () => {
  useTitle("Login user")
  return (
    <>
      <Navbar />

      <div className="max-w-screen-xl mx-auto px-4 my-24 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
        <img
          src="https://img.freepik.com/free-vector/children-fixing-robot-together-white-background_1308-78183.jpg?t=st=1684391046~exp=1684391646~hmac=090cbaf0ae7939c425a8de62304f37b78fe7ce2ca86d7432728126a2f4a4195a"
          alt="Login and enter kids toy website"
        />
        <LoginForm />
      </div>

      <Footer />
    </>
  );
};

export default Login;
