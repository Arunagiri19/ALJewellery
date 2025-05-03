

const Whyus = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="rounded-3xl shadow-md p-8">
        <h2 className="text-4xl font-bold text-yellow-800 mb-6 text-center">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-2xl ">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">💎 Handcrafted Perfection</h3>
            <p className="text-gray-600">
              Every piece is crafted by skilled artisans, ensuring unmatched quality and attention to detail.
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl  ">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🌟 Exclusive Designs</h3>
            <p className="text-gray-600">
              We blend traditional heritage with modern aesthetics to create timeless, unique jewellery.
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl  ">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🛡️ Trusted Quality</h3>
            <p className="text-gray-600">
              All our products are BIS Hallmarked and quality-checked for purity and durability.
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl ">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🚚 Fast & Secure Delivery</h3>
            <p className="text-gray-600">
              Enjoy insured shipping and quick delivery options across India and abroad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
