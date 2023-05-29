import Link from "next/link";
import "../app/globals.css";

export default function Header() {
  return (
    <nav
      className="relative z-50 h-24 select-none tails-selected-element"
      x-data="{ showMenu: false }"
    >
      <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
        <div className="flex items-center justify-start w-1/4 h-full pr-4">
          <a href="#_" className="inline-block py-4 md:py-0">
            <span className="p-1 text-xl font-black leading-none text-gray-900">
              E-DEV.
            </span>
          </a>
        </div>
        <div className="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
          <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
            <a
              href="#_"
              className="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden"
            >
              E-DEV<span className="text-green-700">.</span>
            </a>
            <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center"></div>
            <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
              <Link
                href="#"
                className="w-full px-3 py-2 mr-0 text-gray-700 md:mr-2 lg:mr-3 md:w-auto"
              >
                Sign In
              </Link>
              <Link
                href="#_"
                className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-green-700 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-green-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring--green-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 flex flex-row items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
          <svg
            className="w-6 h-6 text-gray-700"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
}
