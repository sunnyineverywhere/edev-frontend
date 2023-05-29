import "@/app/globals.css";
import Card from "./card";

export default function Layout() {
  return (
    <section className="py-6 sm:py-12 ">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">🚀 지금 뜨는 글</h2>
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
      </div>
    </section>
  );
}
