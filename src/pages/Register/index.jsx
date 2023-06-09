import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import useTitle from "../../hooks/useTitle";
import RegisterForm from "./RegisterForm";

const Register = () => {
  useTitle("Register a new User")
  return (
    <>
      <Navbar />

      <div className="max-w-screen-xl mx-auto px-4 my-24 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
        <div>
          <img
            src="https://img.freepik.com/free-vector/children-repairing-car-together_1308-80884.jpg?w=1380&t=st=1684391046~exp=1684391646~hmac=0f10ee659b08ab772441d257bec59c313a63f20066ba72918eba854ed489f9db"
            alt="Register and join with our kids toys"
          />
        </div>

        <RegisterForm />
      </div>

      <Footer />
    </>
  );
};

export default Register;
