import CategorySection from "../components/categories/CategoryList";
import FlashSales from "../components/categories/FlashSales";
import Header from "../components/home/Header";
import SectionPic from "../components/home/SectionPic";

const Home = () => {
  return (
    <>
      <Header />
      <SectionPic />
      <FlashSales />
      <CategorySection />
    </>
  );
};

export default Home;
