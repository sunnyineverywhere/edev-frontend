import "@/app/globals.css";
import axios from "axios";

export default function LogInButton() {
  const OAuth2LogIn = () => {
    console.log(process.env.NEXT_PUBLIC_API_OAUTH2_SUFFIX);
    const api =
      process.env.NEXT_PUBLIC_API_OAUTH2_SUFFIX || "https://edev.co.kr/login";
    window.location.href = api;
  };

  return (
    <button
      className="inline-block w-2/4 px-5 py-4 mt-3 text-lg font-bold text-center text-green-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease tails-selected-element"
      onClick={OAuth2LogIn}
    >
      이화인 계정으로 로그인
    </button>
  );
}
