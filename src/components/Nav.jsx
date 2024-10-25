import { CiCalendar } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Nav = () => {
  return (
    <div className="navbar justify-between pt-6 max-w-[1440px] mx-auto relative">
      <div className="">
        <img className="ml-4 lg:ml-0" src="../../images/Logo.svg" alt="" />
      </div>
      <div className="hidden lg:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="inter text-lg font-medium text-white hover:underline">
              Home
            </a>
          </li>
          <li>
            <details>
              <summary className="inter text-lg font-medium text-white hover:underline">
                Survices
              </summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="inter text-lg font-medium text-white hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a className="inter text-lg font-medium text-white hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a className="inter text-lg font-medium text-white hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="hidden sm:block lg:block">
          <a className="flex gap-2 py-3 px-6 sora font-semibold bg-transparent border border-[#CBD5E1] rounded-xl text-white">
            <CiCalendar className="text-2xl"></CiCalendar>
            Get a Schedule
          </a>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost sm:block lg:hidden"
          >
            <HiOutlineMenuAlt2 className="text-white text-3xl"></HiOutlineMenuAlt2>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg> */}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
