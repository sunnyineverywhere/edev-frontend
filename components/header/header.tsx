import Link from "next/link";
import "@/app/globals.css";
import LogInButton from "./loginButton";
import CustomHeader from "./customHeader";

export default function Header() {
  return (
    <nav className="relative z-50 h-24">
      <div className="container relative flex flex-row items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 overflow-visible sm:margin-left-4 md:px-2 lg:px-0 ">
        <div className="flex items-center justify-start w-1/4 h-full pr-4">
          <a href="#_" className="inline-block py-4 md:py-0 sm:px-2">
            <span className="h3 text-xl font-black leading-none sm:left-2 text-gray-900">
              E-DEV.
            </span>
          </a>
        </div>
        <CustomHeader />
      </div>
    </nav>
  );
}
