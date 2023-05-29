import "@/app/globals.css";

export default function Card() {
  return (
    <article className="flex flex-col shadow-lg">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Te nulla oportere reprimique his dolorum"
      >
        <img
          alt=""
          className="object-cover w-full h-52 dark:bg-gray-500"
          src="https://myhubsdotorg.files.wordpress.com/2017/04/ec9db4eb8c80ecc.jpg?w=610&h=381"
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        ></a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs font-medium tracking-wider uppercase hover:underline text-green-700"
        >
          회고
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          [졸프 그로스] 서버 배포 과정 회고
        </h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
          <span>June 1, 2020</span>
          <span>작성자</span>
        </div>
      </div>
    </article>
  );
}
