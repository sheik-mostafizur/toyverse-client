import {Link} from "react-router-dom";

const ShowMyToys = ({myToys}) => {
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
              Price
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
                    <Link
                      to={`/toy/${_id}`}
                      className="me-2 font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Delete
                    </Link>
                    <Link
                      to={`/toy/${_id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
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
