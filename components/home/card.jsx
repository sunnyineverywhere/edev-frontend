import "@/app/globals.css";

export default function Card(props) {
  console.log(props);
  return (
    <article className="flex flex-col border-solid border-2 border-gray-100 rounded-lg hover:scale-105">
      <a className="flex flex-col flex-1 p-6" href={props.url}>
        <div
          className="w-1/5 items-center my-4 text-green-800 rounded-full tails-selected-element"
          data-primary="blue-500"
          data-rounded="rounded-full"
          contenteditable="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 9l3 3l-3 3"></path>
            <line x1="13" y1="15" x2="16" y2="15"></line>
            <rect x="3" y="4" width="18" height="16" rx="2" class=""></rect>
          </svg>
        </div>
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
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-500">
          <span></span>
          <span>{props.author}</span>
        </div>
      </a>
    </article>
  );
}
