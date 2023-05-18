import Track from "../../assets/home/pngwing.com.png";
import HeroImage from "../../assets/home/hero-section-background.png";
const Banner = () => {
  return (
    <section
      className="hero md:min-h-[600px]"
      style={{
        backgroundImage: `url("${HeroImage}")`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col md:flex-row text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to ToyVerse</h1>
          <p className="mb-5">
            Discover a World of Endless Play and Imagination
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
        <div className="max-w-xl grid grid-cols-2">
          <img
            src="https://cdn.pixabay.com/photo/2017/09/09/10/45/model-car-2731660_640.png"
            alt="car"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/09/09/10/46/model-car-2731662_960_720.png"
            alt="car"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/10/03/14/22/running-car-2812643_960_720.png"
            alt="car"
          />
          <img src={Track} alt="Track" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
