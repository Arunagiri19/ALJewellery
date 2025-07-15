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
    <div className="w-full h-[10vh] shadow-md bg-white text-black">
      <div className="max-w-7xl h-full mx-auto px-1 flex items-center justify-between">

        <div className="w-[120px]">
          <Link to="/">
            <img
              src="/images/alj.png"
              alt="AL Jewellers"
              className="w-full hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>


        <nav className="flex flex-col lg:flex-row items-center gap-4 md:gap-8 lg:gap-12 text-sm md:text-base">

          <div className="relative text-black ">
            <select
              className="text-black hover:text-amber-400 focus:outline-none cursor-pointer transition duration-200 font-medium"
              defaultValue=""
            >
              <option disabled value="" className="text-black">
                Select Category
              </option>
              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                  className="text-black font-semibold text-base  tracking-wide"
                >
                  {cat}
                </option>
              ))}
            </select>
          </div>


          <Link
            to="/products"
            className="hover:text-amber-400 transition duration-200 font-medium"
          >
            Products
          </Link>
          <Link
            to="/aboutus"
            className="hover:text-amber-400 transition duration-200 font-medium"
          >
            About Us
          </Link>
          <Link
            to="/whyus"
            className="hover:text-amber-400 transition duration-200 font-medium"
          >
            Why Us
          </Link>
          <Link
            to="/contactus"
            className="hover:text-amber-400 transition duration-200 font-medium"
          >
            Contact Us
          </Link>
        </nav>


        <div className="flex items-center gap-4 text-lg">
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
