import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center rounded-lg">
      <div className="flex items-center space-x-4 w-full">
        <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Navbar;
