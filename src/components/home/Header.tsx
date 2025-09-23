import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center mt-12  ">
        <div>
          <p className="font-bold text-3xl">shopecom</p>
        </div>
        <div className="flex justify-center align-middle space-x-12 ">
          <h3 className="cursor-pointer hover:text-cyan-700">Home</h3>
          <h3 className="cursor-pointer hover:text-cyan-700">Contact</h3>
          <h3 className="cursor-pointer hover:text-cyan-700">About</h3>
          <h3 className="cursor-pointer hover:text-cyan-700">Sign in </h3>
        </div>
        <div className="flex justify-center space-x-7">
          <div className="relative">
            <input
              className="w-full pr-10 pl-3 py-2 border rounded outline-none placeholder:text-sm"
              type="search"
              placeholder="What Are You Looking For?"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5" />
          </div>
          <div className="flex gap-5 items-center">
            <IoIosHeartEmpty className="w-7 h-7" />
            <PiShoppingCartLight className="w-7 h-7" />
          </div>
        </div>
      </div>
      <div className="border border-gray-200 mt-7"></div>
    </>
  );
};

export default Header;
