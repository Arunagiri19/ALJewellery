const Product = () => {
  const productImg=[
    {src:"/images/productpics/necset.jpg",title1:"Necklace Set", price:"Rs.4000"},
    {src:"/images/productpics/brace.jpg",title1:"Bracelet",price:"Rs.5000"},
    {src:"/images/productpics/silverc.jpg",title1:"Silver Chain",price:"Rs.8000"},
    {src:"/images/productpics/ring.jpg",title1:"Ring Gold",price:"Rs.4800"},
    {src:"/images/productpics/earr1.jpg",title1:"Ear Ring",price:"Rs.5600"},
    {src:"/images/productpics/earsilver.jpg",title1:"Silver Ear Ring",price:"Rs.2500"},
    {src:"/images/productpics/bra.jpg",title1:"Ear Ring",price:"Rs.5600"},
    {src:"/images/productpics/goldnec.jpg",title1:"Gold Necklace",price:"Rs.10000"},
    {src:"/images/productpics/silvercset.jpg",title1:"Silver Chain Set",price:"Rs.3200"},
    {src:"/images/productpics/ring1.jpg",title1:"Ring",price:"Rs.5600"},
    {src:"/images/productpics/necset3.jpg",title1:"Necklace Set",price:"Rs.9600"},
    {src:"/images/productpics/nec1.jpg",title1:"Necklace",price:"Rs.14600"},
    {src:"/images/productpics/silverc2.jpg",title1:"Silver Chain",price:"Rs.3200"},
    {src:"/images/productpics/silverc.jpg",title1:"Silver Chain",price:"Rs.3600"},
    {src:"/images/productpics/nec3.jpg",title1:"Necklace",price:"Rs.8600"},
    {src:"/images/productpics/earsilver.jpg",title1:"Silver Ear Ring",price:"Rs.3350"}


  ]

   
  return (
    
    <>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
          {productImg.map((value,index) => {
            return (
              <div key={index}  className="relative w-[100%] group rounded-3xl overflow-hidden ">
                <img  className="w-full  aspect-square object-cover rounded-2xl   cursor-pointer"
                  src={value.src}
                  alt=""
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black bg-opacity-50">
                <span className="flex justify-start text-sm underline">{value.title1}</span>
                <span className="flex justify-start text-md ">{value.price}</span>
                </div>
              </div>
            
            );
          })}
        </div>
    </>
  );
};

export default Product;
