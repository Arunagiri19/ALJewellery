import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Home = () => {
  return (
    <>
      <div className="w-[100%] h-[15%] flex flex-row">
        <div className="h-[100%] w-[15%] flex justify-center items-center">
          <img className="w-[70%] h-[150%]   " src="/images/alj.png" alt="" />
        </div>
        <div className="h-[100%] w-[70%] flex flex-row justify-center items-center p-3 gap-14 text-black  ">
        <div className="relative group inline-block">
  <span className="hover:underline cursor-pointer text-lg ">Home</span>

  {/* Dropdown Menu */}
  <div className="absolute left-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform scale-95 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 z-10">
    <div className="py-2 flex flex-col">
      <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black cursor-pointer transition hover:underline">Rings</span>
      <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black cursor-pointer transition hover:underline">Necklaces</span>
      <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black cursor-pointer transition hover:underline">Bracelets</span>
      <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black cursor-pointer transition hover:underline">Earrings</span>
      <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black cursor-pointer transition hover:underline">Anklets</span>
      <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black cursor-pointer transition hover:underline">Brooches</span>
    </div>
  </div>
</div>
          <span className="hover:underline cursor-pointer">CATEGORY</span>
          <span className="hover:underline cursor-pointer">PRODUCTS</span>
          <span className="hover:underline cursor-pointer">ABOUT US</span>
          <span className="hover:underline cursor-pointer">WHY US</span>
          <span className="hover:underline cursor-pointer">CONTACT US</span>
        </div>
        <div className="w-[15%] h-[100%] text-black flex justify-end items-center p-5 gap-4 ">
          <span>
            <SearchIcon />
          </span>
          <span>
            <PersonOutlineIcon />
          </span>
          <span>
            <LocalMallIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
