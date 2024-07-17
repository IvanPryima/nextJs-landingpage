import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="sticky top-0 z-[9999] flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 h-[100px] w-full bg-[#F8FBFF]">
      <div className="flex items-center">
        <img
          src="assets/logo.png"
          alt="Global Wolves Logo"
          className="w-[110px] h-[111px] absolute top-5"
        />
      </div>
      <nav className="bg-white hidden sm:flex justify-between items-center gap-16 text-base h-[99px] px-24">
        <a href="#" className="hover:text-customBlue-dark">
          Home
        </a>
        <a href="#" className="hover:text-customBlue-dark">
          About
        </a>
        <a href="#" className="text-customBlue-dark">
          MVP
        </a>
        <a href="#" className="hover:text-customBlue-dark">
          Golang Development
        </a>
      </nav>

      <nav className="hidden sm:flex justify-between items-center">
        <button
          type="button"
          className="text-white bg-customBlue-dark hover:bg-customBlue-light focus:ring-4 focus:ring-blue-300 px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-[100px] w-[171px] text-lg font-semibold"
        >
          Contact Us
        </button>
      </nav>
      <nav className=" sm:hidden flex items-center space-x-8 ">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <>
            <a href="#" className="hover:text-gray-500">
              Home
            </a>
            <a href="#" className="hover:text-gray-500">
              About
            </a>
            <a href="#" className="hover:text-gray-500">
              Contact
            </a>
          </>
        )}
      </nav>
    </header>
  );
}
