const AllProducts = () => {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: 40,
      img: "https://via.placeholder.com/200x150",
      rating: 4,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: 35,
      img: "https://via.placeholder.com/200x150",
      rating: 4,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: 30,
      img: "https://via.placeholder.com/200x150",
      rating: 4,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: 25,
      img: "/products/Hzblack.jpg",
      rating: 4,
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 mt-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[#DB4444] font-semibold">Todays's</p>
          <h2 className="text-2xl font-bold">Flash Sales</h2>
        </div>
        {/* Timer */}
        <div className="flex space-x-4 text-center">
          {["03 Days", "23 Hours", "19 Minutes", "56 Seconds"].map((t, i) => {
            const [num, label] = t.split(" ");
            return (
              <div key={i}>
                <div className="text-lg font-bold">{num}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-md p-4 hover:shadow-md transition"
          >
            <div className="relative">
              <span className="absolute top-52 right-2 bg-[#DB4444] text-white text-xs px-2 py-1 rounded-sm">
                -{p.discount}%
              </span>
              <img src={p.img} alt={p.name} className="mx-auto mb-3" />
            </div>
            <h3 className="text-sm font-medium mb-1">{p.name}</h3>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[#DB4444] font-semibold">${p.price}</span>
              <span className="text-gray-400 line-through text-sm">
                ${p.oldPrice}
              </span>
            </div>
            <div className="flex">{"⭐".repeat(p.rating)}☆</div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-8">
        <button className="bg-[#DB4444] text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default AllProducts;
