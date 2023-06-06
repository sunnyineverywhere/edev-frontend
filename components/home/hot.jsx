import "@/app/globals.css";
import Card from "./card";
import { getHomeData } from "../../service/home.service";
import React, { useState, useEffect } from "react";

export default function Layout(title, description, data) {
  return (
    <>
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">title</h2>
        <p className="text-sm dark:text-gray-400">
          이화인들이 직접 작성한 기술블로그를 만나보세요!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {<Card />}
        {<Card />}
        {<Card />}
        {<Card />}
        {<Card />}
      </div>
    </>
  );
}
