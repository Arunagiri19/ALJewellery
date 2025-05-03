interface posterModel{
  source:string;
  title:string;
}

const Collections = () => {

  const posters:posterModel[] = [
    { source: "images/anti.webp", title: "Antique" },
    { source: "images/contaem.jpg", title: "Contemporary" },
    { source: "images/nakshtra.jpg", title: "Nakshtra ZC" },
    { source: "images/victorian.webp", title: "Victorian" },
    { source: "images/bridal.webp", title: "Bridal" },
    { source: "images/kundan.webp", title: "Kundan" },
  ];

  return (
    <>
      <div>
        <div className="flex justify-center text-3xl p-3">Our Collections</div>
        <div className="flex flex-col md:flex-col lg:flex-row  gap-2">
          {posters.map((value: posterModel, index: number) => {
            return (
              <div key={index}  className="relative w-full  group rounded-3xl overflow-hidden ">
                <img
                  className="w-full h-[90%] object-cover rounded-3xl transition duration-500  group-hover:scale-105  cursor-pointer"
                  src={value.source}
                  alt=""
                />
                <div >
                <span className="flex justify-center items-center p-2 font-semibold">{value.title}</span>
                </div>
               
              </div>
              
            );
          })}
        </div>
      </div>
      
    </>
  );
};

export default Collections;
