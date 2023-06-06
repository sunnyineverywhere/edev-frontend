import "@/app/globals.css";

export default function Card(props) {
  console.log(props);
  return (
    <article className="flex flex-col shadow-lg rounded-lg hover:scale-105">
      <a rel="noopener noreferrer" href={props.url}>
        <img
          alt=""
          className="object-cover w-full h-52 dark:bg-gray-500"
          src="https://myhubsdotorg.files.wordpress.com/2017/04/ec9db4eb8c80ecc.jpg?w=610&h=381"
        />
      </a>
      <a className="flex flex-col flex-1 p-6" href={props.url}>
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
          {props.category}
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {props.title}
        </h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
          <span></span>
          <span>{props.author}</span>
        </div>
      </a>
    </article>
  );
}
