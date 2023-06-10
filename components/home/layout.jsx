import "@/app/globals.css";
import HomeSection from "./section";
import React, { useEffect, useState } from "react";
import { getPostsInMain } from "../../service/post";

export default function Layout() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const result = getPostsInMain();
    Promise.resolve(result).then((value) => setData(value));
  }, []);
  return (
    <section className="py-6 sm:py-12 ">
      <HomeSection
        title="🚀 지금 뜨는 글"
        description="이화인들이 직접 작성한 기술블로그를 만나보세요!"
        data={data[0]}
      />
      <HomeSection
        title="🖥 기술 블로그 모음"
        description="어떤 기술을 공부했는지 살펴볼까요?"
        data={data[1]}
      />
      <HomeSection
        title="✍🏻 회고"
        description="지난 프로젝트를 회고해요"
        data={data[2]}
      />
      <HomeSection
        title="🎨 리뷰"
        description="어떤 일들이 있었는지 함께 봐요!"
        data={data[3]}
      />
    </section>
  );
}

/*
 */
