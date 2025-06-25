import { useState, useEffect } from "react";

type productType = {
  src: string;
  title1: string;
  price: string;
};

const Product = () => {
  const [productImg, setProductImg] = useState<productType[]>([]);
  const [cart, setCart] = useState<productType[]>([]);

  useEffect(() => {
    fetch("public/jfile/products.json")
      .then((res) => res.json())
      .then((data: productType[]) => setProductImg(data))
      .catch((error) => console.error("Failed to fetch products:", error));
  }, []);

  const handleAddToCart = (product: productType) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title1} added to cart!`);
  };

  return (
    <>
      <div className="text-center text-xl font-semibold text-gray-700 mt-4">
        🛒 Cart Items: {cart.length}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gradient-to-b from-white to-gray-100 min-h-screen">
        {productImg.map((value, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl shadow-lg bg-white transition transform hover:scale-105"
          >
            <img
              className="w-full h-80 object-cover rounded-3xl transition-transform duration-300 group-hover:scale-110"
              src={value.src}
              alt={value.title1}
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="text-lg font-semibold">{value.title1}</h3>
              <p className="text-sm mt-1">{value.price}</p>
            </div>

            <button
              className="absolute top-4 right-4 bg-white text-black text-sm px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-300"
              onClick={() => handleAddToCart(value)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
