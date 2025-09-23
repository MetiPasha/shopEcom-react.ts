import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { id: 1, name: "Phones", icon: "📱" },
  { id: 2, name: "Computers", icon: "🖥️" },
  { id: 3, name: "SmartWatch", icon: "⌚" },
  { id: 4, name: "Camera", icon: "📷" },
  { id: 5, name: "HeadPhones", icon: "🎧" },
  { id: 6, name: "Gaming", icon: "🎮" },
];

export default function CategorySection() {
  const [selected, setSelected] = useState(4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 ">
      <div className="border border-gray-200 w- ml-28 mr-28 mb-24 "></div>
      {/* عنوان */}
      <div className="mb-6">
        <p className="text-[#DB4444] font-semibold">Categories</p>
        <h2 className="text-2xl font-bold">Browse By Category</h2>
      </div>

      {/* بخش دسته بندی */}
      <div className="relative flex items-center">
        {/* دکمه چپ */}
        {/* <button className="absolute -left-4 bg-white shadow-md rounded-full p-2">
          <ChevronLeft className="w-5 h-5" />
        </button> */}

        {/* کارت‌ها */}
        <div className="flex gap-7 mx-auto mr-12 ">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelected(cat.id)}
              className={`w-44 h-36 flex flex-col items-center justify-center border rounded-lg cursor-pointer transition ${
                selected === cat.id
                  ? "bg-red-500 text-white"
                  : "bg-white text-black border-gray-300 hover:border-red-400"
              }`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <p className="mt-2 text-sm font-medium">{cat.name}</p>
            </div>
          ))}
        </div>

        {/* دکمه راست */}
        {/* <button className="absolute -right-4 bg-white shadow-md rounded-full p-2">
          <ChevronRight className="w-5 h-5" />
        </button> */}
      </div>
    </div>
  );
}
