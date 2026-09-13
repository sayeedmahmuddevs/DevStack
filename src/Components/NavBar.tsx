import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";

function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white pb-2">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="mt-3 mx-auto w-full  flex justify-between items-center relative ">
          {/* logo */}
          <div className=" flex gap-2 items-center">
            <div className=" size-9 lg:size-12  text-md md:text-xl bg-linear-60 from-pink-500 to-purple-500 flex justify-center items-center rounded-xl text-white font-bold text-sm ">
              <p>DS</p>
            </div>
            <div className="flex items-center justify-center ">
              <p className="text-xl font-semibold md:text-3xl">Dev</p>
              <p className="text-xl font-semibold text-pink-500 ml-1 md:text-3xl">
                Stack
              </p>
            </div>
          </div>

          {/* mentubar */}
          <nav
            className={`absolute md:static transform transition-transform duration-300 ${show ? "translate-x-5" : "translate-x-60"}   top-0 right-0 md:translate-0 z-100  bg-white md:bg-white pt-2 pb-30 md:pb-0`}
          >
            <div
              onClick={() => setShow(false)}
              className="absolute cursor-pointer right-2 text-3xl md:hidden"
            >
              <MdClose />{" "}
            </div>

            <ul className="ml-4 pr-20 md:pr-0 md:ml-0 flex flex-col md:flex-row gap-8 md:bg-none md:gap-5 font-semibold text-gray-600  text-md ">
              <li className="hover:text-pink-500 cursor-pointer text-pink-500">Home</li>
              <li className="hover:text-pink-500 cursor-pointer">
                Technologies
              </li>
              <li className="hover:text-pink-500 cursor-pointer ">Projects</li>
              <li className="hover:text-pink-500 cursor-pointer">About</li>
              <li className="hover:text-pink-500 cursor-pointer">Contact</li>
            </ul>
          </nav>

          {/* log in */}
          <div
            className={`absolute md:static ${show ? "translate-x-5" : "translate-x-60"} transform transition-transform duration-300 md:translate-x-0 top-85 right-15 z-110 item-center gap-3 flex md:flex`}
          >
            <button className=" hover:text-pink-500 font-semibold cursor-pointer">
              Sing In
            </button>
            <button className="hidden md:block px-3 py-2 rounded-4xl bg-pink-400 text-white font-semibold text-md hover:bg-pink-500 cursor-pointer">
              Sign Up
            </button>
          </div>

          <div
            onClick={() => setShow(true)}
            className="w-5 text-3xl md:text-4xl cursor-pointer md:hidden"
          >
            <LuMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
