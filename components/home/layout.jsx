import "@/app/globals.css";
import Card from "./card";
import { getHomeData } from "../../service/home.service";
import React, { useState, useEffect } from "react";

export default function Layout() {
  const [data, setData] = useState([]);

  /*
  useEffect(() => {
    const result = getHomeData();
    Promise.resolve(result).then((value) => setData(value));
  });
  */

  return (
    <section className="py-6 sm:py-12 ">
      <div className="container p-6 mx-auto space-y-8">
        <Layout
          title="🚀 지금 뜨는 글"
          description="이화인들이 직접 작성한 기술블로그를 만나보세요!"
          data={data[0]}
        />
      </div>
    </section>
  );
}
