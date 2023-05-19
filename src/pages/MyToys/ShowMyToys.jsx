import {Link} from "react-router-dom";

const ShowMyToys = ({myToys, handleDelete, handleSort}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Toy Name
            </th>
            <th scope="col" className="px-6 py-3">
              Sub-category
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Price
                <button title="Sort" onClick={handleSort}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512">
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg>
                </button>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Available Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row one */}
          {myToys &&
            myToys.map(
              ({_id, toy_name, price, quantity, categories, description}) => (
                <tr
                  key={_id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {toy_name}
                  </th>
                  <td className="px-6 py-4 max-w-md">
                    {categories.map((category) => (
                      <span key={_id + `${Math.random()}`}>
                        {category.label},{" "}
                      </span>
                    ))}
                  </td>
                  <td className="px-6 py-4">${price}</td>
                  <td className="px-6 py-4">{quantity}</td>
                  <td className="px-6 py-4">{description.slice(0, 25)}...</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(_id)}
                      className="font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Delete
                    </button>
                    <Link
                      to={`/toy/${_id}/edit`}
                      className="mx-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </Link>
                    <Link
                      to={`/toy/${_id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      View
                    </Link>
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowMyToys;
