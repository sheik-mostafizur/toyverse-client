import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-screen-xl mx-auto px-4 my-24 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
        <img
          src="https://media.4rgos.it/i/Argos/2621-m007-25-01-8298481-lamborghini-v2"
          alt=""
        />

        <RegisterForm />
      </div>

      <Footer />
    </>
  );
};

export default Register;
