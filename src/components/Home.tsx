import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    "Rings",
    "Bracelet",
    "Chains",
    "Bangles",
    "Silver Chains",
    "Necklace",
  ];

  return (
    <div className="w-full h-auto md:h-[20vh] shadow-md bg-white text-black">
      <div className="max-w-7xl w-full mx-auto px-2 py-2 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

        <div className="w-[100px] md:w-[120px]">
          <Link to="/">
            <img
              src="/images/alj.png"
              alt="AL Jewellers"
              className="w-full hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        <nav className="flex flex-wrap md:flex-row items-center justify-center gap-3 md:gap-6 lg:gap-12 text-sm md:text-base">
          <div className="relative">
            <select
              className="text-black hover:text-amber-400 focus:outline-none cursor-pointer transition duration-200 font-medium"
            >
              <option disabled selected>Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat} className="text-black">
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <Link to="/products" className="hover:text-amber-400 transition duration-200 font-medium">Products</Link>
          <Link to="/aboutus" className="hover:text-amber-400 transition duration-200 font-medium">About Us</Link>
          <Link to="/whyus" className="hover:text-amber-400 transition duration-200 font-medium">Why Us</Link>
          <Link to="/contactus" className="hover:text-amber-400 transition duration-200 font-medium">Contact Us</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center justify-center gap-4 text-lg">
          <span className="pi pi-search hover:text-amber-400 cursor-pointer transition" />
          <Link to="/profile">
            <span className="pi pi-user hover:text-amber-400 cursor-pointer transition" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
