import { Link } from "react-router-dom";
import { Menubar } from "primereact/menubar";

const Home = () => {
  const items = [
    {
      label: "Category",

      items: [
        {
          label: "Rings",
        },
        {
          label: "Bracelet",
        },
        {
          label: "Chains",
        },
        {
          label: "Bangles",
        },
        {
          label: "Silver Chains",
        },
        {
          label: "Necklace",
        },
        
      ],
    },
  ];
  return (
    <>
      <div className="w-full h-[15%] flex flex-row  ">
        <div className="h-[100%] w-[15%] flex justify-center items-center">
          <Link to="/">
            <img
              className="w-[70%] h-[150%]"
              src="/images/alj.png"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="h-full w-[70%] flex flex-col md:flex-col lg:flex-row justify-center items-center p-3 gap-14 text-black text-lg">
          <Link to="/category" className="hover:underline cursor-pointer">
            <Menubar className="font-  " model={items} />
          </Link>
          <Link to="/products" className="hover:underline cursor-pointer">
            Products
          </Link>
          <Link to="/aboutus" className="hover:underline cursor-pointer">
            About Us
          </Link>
          <Link to="/whyus" className="hover:underline cursor-pointer">
            Why Us
          </Link>
          <Link to="/contactus" className="hover:underline cursor-pointer">
            Contact Us
          </Link>
        </div>

        <div className="w-[15%] h-[100%] text-black flex justify-end items-center p-5 gap-4">
          <span className="pi pi-search"></span>
          <span className="pi pi-user"></span>
          <span className="pi pi-shopping-cart"></span>
        </div>
      </div>
    </>
  );
};

export default Home;
