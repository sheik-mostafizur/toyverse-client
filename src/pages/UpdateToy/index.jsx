import {useLoaderData} from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EditForm from "./EditForm";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  const loadedToy = useLoaderData();
  useTitle("Edit a Toy")
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="max-w-screen-xl mx-auto p-4 md:py-24">
        <EditForm loadedToy={loadedToy} />
      </div>
      <Footer />
    </div>
  );
};

export default UpdateToy;
