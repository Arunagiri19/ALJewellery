const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-gray-100 text-gray-800 px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Where's My Order?
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns & Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  AL Rewards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Warranty Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Jewelry Care & Repairs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Retail Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 max-w-2xl mx-auto text-center">
          <h4 className="font-semibold mb-4">Subscribe to our emails</h4>
          <form className="flex items-center justify-center gap-2">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 rounded px-4 py-2 w-full max-w-md"
              required
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              →
            </button>
          </form>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          © {year}, AL Jewellers Tindivanam.
        </p>
      </footer>
    </>
  );
};

export default Footer;
