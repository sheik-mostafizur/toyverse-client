import {Link} from "react-router-dom";

const ShowToys = ({toys}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Person Name
            </th>
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
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row one */}
          {toys &&
            toys.map(({_id, name, toy_name, price, quantity, categories}) => (
              <tr
                key={_id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {name}
                </th>
                <td className="px-6 py-4">{toy_name}</td>
                <td className="px-6 py-4 max-w-xl">{categories?.label}</td>
                <td className="px-6 py-4">${price}</td>
                <td className="px-6 py-4">{quantity}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/toy/${_id}`}
                    className="font-medium text-primary-600 dark:text-primary-500 hover:underline">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowToys;
