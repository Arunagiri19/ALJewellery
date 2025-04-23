const Home = () => {
  return (
    <>
      <div className="w-[100%] h-[20%] bg-slate-800 flex flex-row">
        <div className="h-[100%] w-[15%] bg-yellow-300">
          <img
            className="w-[100%] h-[100%] flex hover:scale-110"
            src="/images/jewellery.jpg"
            alt=""
          />
        </div>
        <div className="h-[100%] w-[70%] bg-orange-900 flex flex-row justify-center items-center p-3 gap-14 text-white ">
          <span>HOME</span>
          <span>CATEGORY</span>
          <span>PRODUCTS</span>
          <span>ABOUT US</span>
          <span>WHY US</span>
          <span>CONTACT US</span>
        </div>
        <div> </div>
      </div>
    </>
  );
};

export default Home;
