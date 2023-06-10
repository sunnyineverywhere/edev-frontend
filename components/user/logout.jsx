import Link from "next/link";
import "@/app/globals.css";
import { useRouter } from "next/router";

export default function LogoutButton() {
  const router = useRouter();
  const onClick = () => {
    window.localStorage.removeItem("jwt");
    router.push("/");
  };
  return (
    <div className="flex flex-row-reverse p-2">
      <button
        onClick={onClick}
        className="
        text-center px-6 py-3 text-sm font-medium leading-4 rounded-md
        text-red-600 bg-white border-red-500 border-solid border-2
        hover:bg-red-200 hover:shadow-lg
        focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring--green-700"
      >
        로그아웃
      </button>
    </div>
  );
}
