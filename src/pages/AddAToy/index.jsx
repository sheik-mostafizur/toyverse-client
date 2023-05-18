import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AddForm from "./AddForm";

const AddAToy = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section className="max-w-screen-xl mx-auto p-4 md:py-24">
        <AddForm />
      </section>

      <Footer />
    </div>
  );
};

export default AddAToy;
