import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-screen-xl mx-auto px-4 my-24 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1463200870069-e707405e5fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <LoginForm />
      </div>

      <Footer />
    </>
  );
};

export default Login;
