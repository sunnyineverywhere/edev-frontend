import Link from "next/link";
import "@/app/globals.css";

export default function LogInButton() {
  return (
    <div className="flex flex-col items-end justify-end w-full pt-4  md:w-1/3 md:flex-row">
      <Link
        href="login"
        className="items-center w-full px-6 py-3 text-sm font-medium leading-4 
    text-white bg-green-700 
    md:px-3 md:w-auto md:rounded-2xl lg:px-5 
    hover:bg-green-800 hover:shadow-lg
    focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring--green-700"
      >
        LogIn
      </Link>
    </div>
  );
}
