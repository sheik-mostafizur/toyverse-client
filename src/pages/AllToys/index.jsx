import {useEffect, useState} from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Search from "./Search";
import ShowToys from "./ShowToys";
import LoaderSpinner from "../../components/LoaderSpinner";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [loading, setLoading] = useState(true);
  const [toys, setToys] = useState([]);
  const [searchToy, setSearchToy] = useState("");

  useEffect(() => {
    const toyName = searchToy ? `?toyName=${searchToy}` : "";
    fetch(`http://localhost:3001/toys${toyName}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, [searchToy]);

  useTitle("All Toys");
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section className="max-w-screen-xl mx-auto p-4 md:py-24">
        <Search setSearchToy={setSearchToy} />
        <div className="my-6">
          {loading ? <LoaderSpinner /> : <ShowToys toys={toys} />}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllToys;
