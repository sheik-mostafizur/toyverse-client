import {useEffect, useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LoaderSpinner from "../../components/LoaderSpinner";
import ShowMyToys from "./ShowMyToys";
import {Link} from "react-router-dom";
import {uesAuthContext} from "../../context/AuthContext";

const MyToys = () => {
  const {user} = uesAuthContext();
  const [loading, setLoading] = useState(true);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/my-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setLoading(false);
      });
  }, [user?.email]);

  const handleDelete = (_id) => {
    const proceed = confirm("Are Your sure you want to delete?");

    if (proceed) {
      fetch(`http://localhost:3001/toy/${_id}/delete`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingToy = myToys.filter(
              (booking) => booking._id !== _id
            );
            setMyToys(remainingToy);
            toast.error("Delete Successfully!");
          }
        });
    }
  };

  const handleSort = () => {
    alert("Sort");
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="max-w-screen-xl mx-auto my-6 p-4 md:my-24">
        <Toaster />
        {myToys.length > 0 ? (
          ""
        ) : (
          <>
            {loading ? (
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
          </>
        )}
        {loading ? (
          <LoaderSpinner />
        ) : (
          myToys.length > 0 && (
            <ShowMyToys
              myToys={myToys}
              handleDelete={handleDelete}
              handleSort={handleSort}
            />
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyToys;
