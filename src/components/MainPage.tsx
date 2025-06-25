const MainPage = () => {
  return (
    <>
      <div>
        <span className=" flex justify-center text-rose-700">
          Welcome to AL Jewellers...
        </span>
      </div>
      <div className=" bg-black  w-[100%] h-[7%] flex flex-row ">
        <div className="w-[58%] h-[100%]  flex justify-end items-center text-white p-1">
          Free Shipping Above INR-2000
        </div>
        <div className="w-[42%] h-[100%] text-white flex justify-end items-center p-5 gap-4">
          <a
            href="https://www.instagram.com/_.aroon._a?igsh=MWc3MDdmMGp3NjIxeg=="
            target="_blank"
          >
            <span className="pi pi-instagram"></span>
          </a>
          <a href="https://wa.me/917010336171">
            <span className="pi pi-whatsapp"></span>
          </a>
          <a href="https://youtube.com/@arunagiri02?si=fidlw3NSHTlBMSen">
            <span className="pi pi-youtube"></span>
          </a>
          <a href="https://www.facebook.com/share/1Vx8tKbvuE/">
            <span className="pi pi-facebook"></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default MainPage;
