import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Home = () => {
  return (
    <>
      <div className="w-[100%] h-[15%] flex flex-row">
        <div className="h-[100%] w-[15%]">
          <img
            className="w-[60%] h-[120%] flex hover:scale-110  "
            src="/images/al.png"
            alt=""
          />
        </div>
        <div className="h-[100%] w-[70%] flex flex-row justify-center items-center p-3 gap-14 text-black  ">
          <span className="hover:underline cursor-pointer">HOME</span>
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
          <span >
            < PersonOutlineIcon  />
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
