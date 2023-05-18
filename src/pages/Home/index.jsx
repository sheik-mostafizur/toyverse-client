import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import ClientSay from "./ClientSay";
import Gallery from "./Gallery";
import PopularToy from "./PopularToy";
import ShopCategory from "./ShopCategory";
const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <Gallery />
      <PopularToy/>
      <ShopCategory/>
      <ClientSay/>
      <Footer />
    </div>
  );
};

export default Home;
