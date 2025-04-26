import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";


const MainPage = () => {
  return (
    <>
      <div>
        <span className="text-gradient flex justify-center  ">
          Welcome to AL Jewellers...
        </span>
      </div>
      <div className=" bg-black  w-[100%] h-[7%] flex flex-row ">
        <div className="w-[58%] h-[100%]  flex justify-end items-center text-white p-1">
          Free Shipping Above INR-2000
        </div>
        <div className="w-[42%] h-[100%] text-white flex justify-end items-center p-5 gap-4">
          <span>
            <InstagramIcon />
          </span>
          <span>
            <WhatsAppIcon />
          </span>
          <span>
            <YouTubeIcon />
          </span>
          <span>
            <FacebookIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default MainPage;
