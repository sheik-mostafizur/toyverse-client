import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import ClientSay from "./ClientSay";
import Gallery from "./Gallery";
import PopularToy from "./PopularToy";
import ShopCategory from "./ShopCategory";

import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <Gallery />
      <PopularToy />
      <ShopCategory />
      <ClientSay />
      <Footer />
    </div>
  );
};

export default Home;
