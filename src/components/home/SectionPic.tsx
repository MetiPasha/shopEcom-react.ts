import ImageSlider from "../ImageSlider";

const SectionPic = () => {
  return (
    <>
      <div className="flex justify-around mr-33  ">
        <div className="mt-12 flex flex-col gap-6 ml-12">
          <h3>Woman’s Fashion</h3>
          <h3>Men’s Fashion</h3>
          <h3>Electronics</h3>
          <h3>Home & Lifestyle</h3>
          <h3>Medicine</h3>
          <h3>Sports & Outdoor</h3>
          <h3>Baby’s & Toys</h3>
          <h3>Groceries & Pets</h3>
          <h3>Health & Beauty</h3>
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
