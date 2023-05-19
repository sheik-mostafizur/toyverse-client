import {useLoaderData} from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EditForm from "./EditForm";

const UpdateToy = () => {
  const loadedToy = useLoaderData();
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
