import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { routes, pages } from "@/util/index";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const navRef = useRef(null);
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    if (!toggle) {
      setToggle(true);
      navRef.current.classList.remove("-left-[100%]");
      navRef.current.classList.add("left-0");
    } else {
      setToggle(false);
      navRef.current.classList.add("-left-[100%]");
      navRef.current.classList.remove("left-0");
    }
  };
  return (
    <>
      {/* Mobile Menu */}
      <nav className="w-screen fixed top-0 flex justify-between items-center px-5 z-50 bg-inherit lg:hidden">
        <div className="flex items-center gap-5 py-4">
          <div onClick={toggleMenu}>
            {toggle ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3BottomLeftIcon className="w-5 h-5" />
            )}
          </div>
          <Link to={"/"} className="text-sm italic">
            Latest
            <p>Happenings</p>
          </Link>
        </div>
        <MagnifyingGlassIcon className="w-5 h-5 text-neutral-500" />
        <div
          ref={navRef}
          className="absolute w-full -left-[100%] transition duration-300 ease-in-out top-16 px-5 py-10 border-t flex flex-col gap-5 bg-inherit"
        >
          {pages.map((page, index) => (
            <Link
              to={`${routes[2]}/${page}`}
              key={index}
              onClick={toggleMenu}
              className="capitalize px-2 py-1 rounded hover:bg-neutral-900"
            >
              {page}
            </Link>
          ))}
        </div>
      </nav>

      {/* Desktop Menu */}
      <nav className="w-screen fixed top-0 px-10 py-2 hidden bg-inherit z-50 lg:block">
        <div className="container flex justify-between items-center">
          <Link to={"/"} className="text-sm italic">
            Latest
            <p>Happenings</p>
          </Link>

          <form className="flex items-center gap-3 px-5 rounded-full font-light text-white bg-gray-900 w-1/2">
            <MagnifyingGlassIcon className="w-5 h-5" />
            <input
              type="search"
              className="py-2 bg-transparent border-l border-neutral-600 pl-2 outline-none w-full"
              placeholder="Search..."
            />
          </form>

          <div className="flex1 items-center gap-10">
            <Link
              to="/blog/login"
              className="py-2 px-4 text-white rounded-full font-bold hover:text-neutral-500"
            >
              Log in
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
