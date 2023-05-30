import "@/app/globals.css";
import Layout from "@/components/home/layout";

export default function Home() {
  return (
    <div className="justify-center w-full relative">
      <section className="absolute left-0 right-0 translate-y-1/3 flex justify-center flex-col items-center place-content-center">
        <div className="container p-6 mx-auto">
          <div className="flex flex-col text-center items-center">
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.4233 74.3195L149.994 338.856C150.856 341.347 152.484 343.502 154.644 345.012C156.805 346.523 159.387 347.311 162.023 347.265C164.659 347.22 167.212 346.342 169.319 344.757C171.426 343.173 172.978 340.963 173.753 338.443L210.559 218.825C211.158 216.876 212.226 215.104 213.667 213.662C215.109 212.221 216.881 211.153 218.83 210.554L338.448 173.748C340.968 172.973 343.178 171.421 344.762 169.314C346.347 167.208 347.224 164.654 347.27 162.018C347.316 159.382 346.527 156.8 345.017 154.639C343.507 152.479 341.352 150.851 338.861 149.989L74.3245 58.4183C72.1077 57.651 69.7198 57.5229 67.4337 58.0487C65.1475 58.5745 63.0555 59.7331 61.3968 61.3918C59.738 63.0505 58.5795 65.1426 58.0537 67.4287C57.5279 69.7148 57.6559 72.1028 58.4233 74.3195Z"
                fill="#1E482F"
                stroke="#1E482F"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="flex flex-col w-full pt-4 items-center md:py-0">
              <button className="inline-block w-2/4 px-5 py-4 mt-3 text-lg font-bold text-center text-green-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease tails-selected-element">
                이화인 계정으로 로그인
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
