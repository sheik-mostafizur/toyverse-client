import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Banner/>
      </header>
      <Gallery/>
      <Footer/>
    </div>
  );
};

export default Home;
