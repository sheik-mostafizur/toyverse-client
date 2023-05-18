import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Blog = () => {
  return (
    <div>
      <header>
        <Navbar />
        <div
          className="hero md:min-h-[600px]"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1586333237928-8b46d9d784bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Discover the Magic of Play
              </h1>
              <p className="mb-5">
                Delve into the enchanting world of ToyVerse and uncover the
                wonders of play, imagination, and endless adventures.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default Blog;
