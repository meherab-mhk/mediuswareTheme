import { CiCalendar } from "react-icons/ci";

const Nav = () => {
  return (
    <div className="navbar pt-6 w-[1440px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
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
            </svg>
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
        <img className="z-10" src="../../images/Logo.svg" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
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
      <div className="navbar-end hidden">
        <a className="z-10 flex gap-2 py-3 px-6 sora font-semibold bg-transparent border border-[#CBD5E1] rounded-xl text-white">
          <CiCalendar className="text-2xl"></CiCalendar>
          Get a Schedule
        </a>
      </div>
    </div>
  );
};

export default Nav;
