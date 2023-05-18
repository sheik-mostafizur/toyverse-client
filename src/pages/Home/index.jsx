import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import ClientSay from "./ClientSay";
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
      <ClientSay/>
      <Footer />
    </div>
  );
};

export default Home;
