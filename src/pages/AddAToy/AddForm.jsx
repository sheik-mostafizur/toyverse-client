import {useState} from "react";
import {useForm} from "react-hook-form";
import Creatable from "react-select/creatable";

const AddForm = () => {
  const [categories, setCategories] = useState(null);
  const setCategoryOptions = [
    {value: "sports car", label: "Sports Car"},
    {value: "truck", label: "Truck"},
    {value: "regular car", label: "Regular Car"},
    {value: "mini fire", label: "Mini Fire Truck"},
    {value: "mini police car", label: "Mini Police Car"},
    {value: "vintage cars", label: "Vintage Cars"},
    {value: "muscle cars", label: "Muscle Cars"},
    {value: "off-road vehicles", label: "Off-Road Vehicles"},
    {value: "race cars", label: "Race Cars"},
    {value: "luxury cars", label: "Luxury Cars"},
    {value: "construction vehicles", label: "Construction Vehicles"},
    {value: "emergency vehicles", label: "Emergency Vehicles"},
    {value: "monster trucks", label: "Monster Trucks"},
    {value: "suvs and crossovers", label: "Suvs And Crossovers"},
    {value: "convertibles", label: "Convertibles"},
    {value: "police cars", label: "Police Cars"},
    {value: "fire trucks", label: "Fire Trucks"},
    {value: "ambulances", label: "Ambulances"},
    {value: "taxis", label: "Taxis"},
    {value: "delivery trucks", label: "Delivery Trucks"},
    {value: "farm vehicles", label: "Farm Vehicles"},
    {value: "public service vehicles", label: "Public Service Vehicles"},
    {value: "military vehicles", label: "Military Vehicles"},
    {value: "electric cars", label: "Electric Cars"},
    {value: "concept cars", label: "Concept Cars"},
  ];
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  // form handle here
  const onSubmit = (data) => {
    data.categories = categories;
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.exampleRequired && <span>This field is required</span>}

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Seller name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            {...register("name")}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Seller email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            {...register("email")}
            required
          />
        </div>
        <div>
          <label
            htmlFor="toy_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Toy Name
          </label>
          <input
            type="text"
            id="toy_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Toy name"
            {...register("toy_name")}
            required
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Price
          </label>
          <input
            type="text"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Price"
            {...register("price")}
            required
          />
        </div>
        <div>
          <label
            htmlFor="rating"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Rating
          </label>
          <input
            type="text"
            id="rating"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Rating"
            {...register("rating")}
            required
          />
        </div>
        <div>
          <label
            htmlFor="quantity"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Available quantity
          </label>
          <input
            type="text"
            id="quantity"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="quantity"
            {...register("quantity")}
            required
          />
        </div>
        <div>
          <label
            htmlFor="photo_url"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Photo URL
          </label>
          <input
            type="url"
            id="photo_url"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Photo URL"
            {...register("photo_url")}
            required
          />
        </div>

        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Sub category
          </label>
          <Creatable
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={categories}
            onChange={setCategories}
            options={setCategoryOptions}
            isMulti
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your description
        </label>
        <textarea
          id="description"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          {...register("description")}
          required></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full md:w-96 mx-auto block">
        Submit
      </button>
    </form>
  );
};

export default AddForm;
