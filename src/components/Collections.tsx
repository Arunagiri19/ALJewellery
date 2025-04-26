interface posterModel{
  source:string;
  title:string;
}

const Collections = () => {

  const posters:posterModel[] = [
    { source: "images/anti.webp", title: "Antique" },
    { source: "images/contaem.jpg", title: "Ant" },
    { source: "images/nakshtra.jpg", title: "Nakshtra ZC" },
    { source: "images/victorian.webp", title: "Victorian" },
    { source: "images/bridal.webp", title: "Bridal" },
    { source: "images/kundan.webp", title: "Kundan" },
  ];

  return (
    <>
      <div>
        <div className="flex justify-center text-3xl p-3">Our Collections</div>
        <div className="flex flex-row gap-3   ">
          {posters.map((value: posterModel, index: number) => {
            return (
              <div key={index}  className="relative w-[16%] group rounded-3xl overflow-hidden">
                <img
                  className=" rounded-3xl w-full h-auto transition-transform duration-500 group-hover:scale-105 hover:underline cursor-pointer"
                  src={value.source}
                  alt=""
                />
                <span className="flex  justify-center items-center p-2 font-semibold ">{value.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Collections;
