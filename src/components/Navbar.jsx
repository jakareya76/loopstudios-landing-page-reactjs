import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="flex flex-row items-center justify-between font-bold text-white">
      <img src="images/logo.svg" alt="logo" />
      {/* Desktop Menu */}
      <div className="hidden h-10 md:flex md:space-x-8">
        <div className="group">
          <a href="#">About</a>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
        <div className="group">
          <a href="#">Careers</a>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
        <div className="group">
          <a href="#">Events</a>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
        <div className="group">
          <a href="#">Products</a>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
        <div className="group">
          <a href="#">Support</a>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
      </div>
      {/* Mobile Menu*/}
      <div className="block md:hidden">
        <div
          className="block w-full relative md:hidden"
          onClick={handleToggleMenu}
        >
          <img src="/images/icon-hamburger.svg" alt="icon" className="" />
        </div>
        <div
          className={`${
            toggleMenu ? "block" : "hidden"
          } w-full bg-red-500 relative`}
        >
          <div className="flex flex-col items-start justify-center absolute space-y-5 top-5 right-2 opacity-90 bg-zinc-800 px-10 py-6">
            <div className="group">
              <a href="#">About</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Careers</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Events</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Products</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Support</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
