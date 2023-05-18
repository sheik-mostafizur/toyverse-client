// (including website logo, name, copyright, some contact information, social media links, address, etc.)
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary-50">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="footer p-10 text-base-content">
          <div className="md:max-w-xs">
            <img className="w-36" src={Logo} alt="Logo" />
            <p>
              ToyVerse is your ultimate destination for imaginative play and toy
              exploration. We believe in the power of toys to inspire
              creativity, encourage learning, and create endless adventures.
            </p>
            <p>Providing reliable tech since 2023</p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Sourcing</a>
            <a className="link link-hover">Reviews</a>
            <a className="link link-hover">Customization</a>
            <a className="link link-hover">Repair and Restoration</a>
            <a className="link link-hover">Rental</a>
            <a className="link link-hover">Donation</a>
            <a className="link link-hover">Gift Wrapping</a>
            <a className="link link-hover">Education and Workshops</a>
          </div>
          <div>
            <span className="footer-title">Company</span>

            <a className="link link-hover">Home</a>
            <a className="link link-hover">Shop</a>
            <a className="link link-hover">Products</a>
            <a className="link link-hover">Categories</a>
            <a className="link link-hover">New Releases</a>
            <a className="link link-hover">Special Offers</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">FAQ</a>
            <a className="link link-hover">Terms and Conditions</a>
            <a className="link link-hover">Privacy Policy</a>
          </div>
          <div className="w-full">
            <form className="w-full">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-primary-100 border border-primary-300 text-primary-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-700 dark:border-primary-600 dark:placeholder-primary-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-primary-600 bg-primary-100 rounded-lg border border-primary-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-primary-700 dark:border-primary-600 dark:placeholder-primary-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-200 dark:border-primary-600 ">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          <div>
            Copyright © 2023. Tiy<span className="text-[#116FFF]">erse</span> by
            <b> Sheik Mostafiuzr</b>
          </div>
          <div className="flex items-center gap-4 text-primary-600">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
