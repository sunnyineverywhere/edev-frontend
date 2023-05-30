import Link from "next/link";
import "@/app/globals.css";
import LogInButton from "./loginButton";

export default function Header() {
  return (
    <nav className="relative z-50 h-24">
      <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 overflow-visible lg:justify-center sm:margin-left-4 md:px-2 lg:px-0 ">
        <div className="flex items-center justify-start w-1/4 h-full pr-4">
          <a href="#_" className="inline-block py-4 md:py-0 sm:px-2">
            <span className="h3 text-xl font-black leading-none sm:left-2 text-gray-900">
              E-DEV.
            </span>
          </a>
        </div>
        <div className="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
          <div className="flex-row items-stretch  w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:relative md:flex md:flex-row">
            <a
              href=""
              className="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden"
            >
              E-DEV.
            </a>
            <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8"></div>
            <LogInButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
