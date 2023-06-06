import Link from "next/link";
import "@/app/globals.css";

export default function FormButton() {
  return (
    <div className="flex flex-row-reverse w-full p-2">
      <div
        className="
        text-center px-6 py-3 text-sm font-medium leading-4 rounded-md
        text-white bg-green-700 
        hover:bg-green-800 hover:shadow-lg
        focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring--green-700"
      >
        SUBMIT
      </div>
    </div>
  );
}
