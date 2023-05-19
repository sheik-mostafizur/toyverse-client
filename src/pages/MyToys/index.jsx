import {useEffect, useState} from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LoaderSpinner from "../../components/LoaderSpinner";
import ShowMyToys from "./ShowMyToys";
import {Link} from "react-router-dom";

const MyToys = () => {
  const [loading, setLoading] = useState(true);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/my-toys?email=sheikmostafizur2001@gmail.com")
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="my-6 md:my-24">
        {myToys.length > 0 ? (
          ""
        ) : (
          <>
            <h1 className="font-bold text-3xl md:text-5xl text-center my-6 text-primary-600">
              Toy is not found. Please add a toy.
            </h1>
            <Link to="/add-a-toy">
              <button className="btn btn-primary block mx-auto">
                Add a toy
              </button>
            </Link>
          </>
        )}
        {loading ? (
          <LoaderSpinner />
        ) : (
          myToys.length > 0 && <ShowMyToys myToys={myToys} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyToys;
