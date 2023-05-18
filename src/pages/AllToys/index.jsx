import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Search from "./Search";
import ShowToy from "./ShowToy";

const AllToys = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section className="max-w-screen-xl mx-auto p-4 md:py-24">
        <Search />
        <div className="my-6">
          <ShowToy />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllToys;
