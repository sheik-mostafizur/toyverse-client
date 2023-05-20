import {useLoaderData} from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {Rating} from "@smastrom/react-rating";
import useTitle from "../../hooks/useTitle";

const Toy = () => {
  const loadedToy = useLoaderData();
  const {
    name,
    email,
    toy_name,
    price,
    rating,
    quantity,
    photo_url,
    categories,
    description,
  } = loadedToy;
  useTitle(toy_name);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="max-w-screen-xl mx-auto px-4 py-24">
        <div className="shadow p-6 max-w-4xl mx-auto space-y-4">
          <img className="mb-8" src={photo_url} alt={toy_name} />
          <h2 className="text-xl">
            <b>Name:</b> {toy_name}
          </h2>
          <h3 className="text-xl">
            <b>Author:</b> {name}
          </h3>
          <p>
            <b>Email:</b> {email}
          </p>
          <p>
            <b>Price:</b> ${price}
          </p>
          <div className="flex gap-2">
            <b>Ratings:</b>{" "}
            <Rating style={{maxWidth: 100}} value={rating} readOnly />
            {rating}
          </div>
          <p>
            <b>Quantity:</b> {quantity}
          </p>
          <p>
            <b>Categories:</b> {categories}
          </p>
          <p>
            <b>Description:</b> {description}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Toy;
