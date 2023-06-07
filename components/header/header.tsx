import Link from "next/link";
import "@/app/globals.css";
import LogInButton from "./loginButton";
import CustomHeader from "./customHeader";
import React, { useEffect } from "react";

export default function Header() {
  const jwtCheck = () => {
    let jwt = "";
    if (typeof window != "undefined") {
      jwt = localStorage.getItem("jwt") || "";
    }
    if (jwt) {
      return true;
    } else false;
  };

  if (jwtCheck()) {
    return (
      <nav className="relative z-50 h-24">
        <div className="container relative flex flex-row items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 overflow-visible sm:margin-left-4 md:px-2 lg:px-0 ">
          <div className="flex items-center justify-start w-1/4 h-full pr-4">
            <Link href="/" className="inline-block py-4 md:py-0 sm:px-2">
              <span className="h3 text-2xl font-black leading-none sm:left-2 ml-2 text-gray-900">
                <span className="text-green-900">E</span>-DEV.
              </span>
            </Link>
          </div>
          <CustomHeader />
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="relative z-50 h-24">
        <div className="container relative flex flex-row items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 overflow-visible sm:margin-left-4 md:px-2 lg:px-0 ">
          <div className="flex items-center justify-start w-1/4 h-full pr-4">
            <a href="#_" className="inline-block py-4 md:py-0 sm:px-2">
              <span className="h3 text-2xl font-black leading-none sm:left-2 ml-2 text-gray-900">
                <span className="text-green-900">E</span>-DEV.
              </span>
            </a>
          </div>
          <LogInButton />
        </div>
      </nav>
    );
  }
}
