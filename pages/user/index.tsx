import Header from "@/components/header/header";
import "@/app/globals.css";
import Layout from "@/components/home/layout";
import HomeSection from "@/components/home/section";
import UserInfoCard from "@/components/user/userInfo";

export default function UserPage() {
  return (
    <>
      <Header />
      <div>
        <UserInfoCard />
        <section className="py-6 sm:py-12 ">
          <HomeSection
            title="📌 내가 작성한 글 목록"
            description="글을 누르면 수정할 수 있어요!"
          />
        </section>
      </div>
    </>
  );
}
