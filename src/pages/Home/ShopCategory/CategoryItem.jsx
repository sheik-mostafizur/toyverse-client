import {Rating} from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CategoryItem = ({id, name, picture, price, rating}) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-8 h-72 rounded-t-lg"
        src={picture}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex items-center mt-2.5 mb-5">
          <Rating style={{maxWidth: 100}} value={rating} readOnly />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <a href="#" className="btn btn-primary">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
