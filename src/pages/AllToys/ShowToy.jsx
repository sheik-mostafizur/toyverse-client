const ShowToy = () => {
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
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Jhon
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">23</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-primary-600 dark:text-primary-500 hover:underline">
                View Details
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShowToy;
