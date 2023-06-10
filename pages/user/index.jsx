import Header from "@/components/header/header";
import "@/app/globals.css";
import Layout from "@/components/home/layout";
import HomeSection from "@/components/home/section";
import UserInfoCard from "@/components/user/userInfo";
import React, { useState, useEffect } from "react";
import { getUserInfo } from "../../service/user";

export default function UserPage() {
  const [posts, setPost] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const result = getUserInfo();
    console.log(result);
    Promise.resolve(result).then((value) => {
      setName(value.name);
      setEmail(value.email);
      setPost(value.postList);
    });
  }, []);
  return (
    <>
      <Header />
      <div>
        <UserInfoCard name={name} email={email} />
        <section className="py-6 sm:py-12 ">
          <HomeSection
            title="📌 내가 작성한 글 목록"
            description="글을 누르면 수정할 수 있어요!"
            data={posts}
          />
        </section>
      </div>
    </>
  );
}
