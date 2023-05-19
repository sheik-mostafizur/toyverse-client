import {useEffect, useState} from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Search from "./Search";
import ShowToys from "./ShowToys";
import LoaderSpinner from "../../components/LoaderSpinner";
import useTitle from "../../hooks/useTitle";
import {useLoaderData} from "react-router-dom";

const AllToys = () => {
  const [loading, setLoading] = useState(true);
  const [toys, setToys] = useState([]);
  const [searchToy, setSearchToy] = useState("");

  // Start for Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const {totalToys} = useLoaderData();
  const limit = 20;
  const totalPage = Math.ceil(totalToys / limit);

  const pageNumbers = [...Array(totalPage).keys()];

  const pageItemStyle =
    "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const pageItemActiveStyle =
    "z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const baseURL = "http://localhost:3001/toys";

    const url = new URL(baseURL);
    url.searchParams.append("toyName", searchToy);
    url.searchParams.append("page", currentPage);
    url.searchParams.append("limit", limit);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, [searchToy, currentPage, limit]);

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
        <nav className="flex flex-col items-center gap-4">
          <ul className="inline-flex items-center -space-x-px">
            {pageNumbers.map((page) => (
              <li key={page}>
                <button
                  className={
                    page === currentPage ? pageItemActiveStyle : pageItemStyle
                  }
                  onClick={() => handlePagination(page)}>
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <Footer />
    </div>
  );
};

export default AllToys;
