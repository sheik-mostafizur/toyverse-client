import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import Gallery from "./Gallery";
import PopularToy from "./PopularToy";
const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <Gallery />
      <PopularToy/>
      <Footer />
    </div>
  );
};

export default Home;
