import "@/app/globals.css";
import LogInButton from "@/components/auth/logInButton";
import LogInLogo from "@/components/auth/logInLogo";
import Layout from "@/components/home/layout";
import React, { useEffect } from "react";

export default function LogInPage() {
  useEffect(() => {
    const jwt = window.location.search.substring(7);

    if (jwt) {
      const bearerJwt = "Bearer " + jwt;
      window.localStorage.setItem("jwt", bearerJwt);
      window.location.href = "https://edev.co.kr";
    }
  });

  return (
    <div className="justify-center w-full relative">
      <section className="absolute left-0 right-0 translate-y-1/3 flex justify-center flex-col items-center place-content-center">
        <div className="container p-6 mx-auto">
          <div className="flex flex-col text-center items-center">
            <LogInLogo />
            <div className="flex flex-col w-full pt-4 items-center md:py-0">
              <LogInButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
