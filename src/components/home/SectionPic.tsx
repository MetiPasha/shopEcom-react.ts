import ImageSlider from "../ImageSlider";

const SectionPic = () => {
  return (
    <>
      <div className="flex justify-around mr-33 ">
        <div className="mt-12 flex flex-col gap-6 ml-12">
          <h3 className="cursor-pointer hover:text-cyan-700">
            Woman’s Fashion
          </h3>
          <h3 className="cursor-pointer hover:text-cyan-700">Men’s Fashion</h3>
          <h3 className="cursor-pointer hover:text-cyan-700">Electronics</h3>
          <h3 className="cursor-pointer hover:text-cyan-700">
            Home & Lifestyle
          </h3>
          <h3 className="cursor-pointer hover:text-cyan-700">Medicine</h3>
          <h3 className="cursor-pointer hover:text-cyan-700">
            Sports & Outdoor
          </h3>
          <h3 className="cursor-pointer hover:text-cyan-700">Baby’s & Toys</h3>
          <h3 className="cursor-pointer hover:text-cyan-700">
            Groceries & Pets
          </h3>
          <h3 className="cursor-pointer hover:text-cyan-700">
            Health & Beauty
          </h3>
        </div>
        <div className="border-r border-gray-300 "></div>
        <div className="mr-12 w-200 mt-12">
          <ImageSlider />
        </div>
      </div>
    </>
  );
};

export default SectionPic;
