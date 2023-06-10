import "@/app/globals.css";
import UserName from "./userName";
import UserEmail from "./userEmail";
import FormButton from "../write/FormButton";

export default function UserInfoCard(props) {
  return (
    <div className="border-b border-gray-200 mt-10">
      <div className="flex flex-col items-center justify-center  md:flex-row">
        <div class="block items-center mb-4 md:mr-16 ">
          <h2 class="uppercase text-2xl font-semibold leading-none text-green-900">
            EwhaIn <span className="text-gray-800">Info</span>
          </h2>
        </div>
        <div class="w-full md:mt-0 md:w-2/5">
          <form>
            <UserName name="sun" />
            <UserEmail email="ev@gmail.com" />
            <FormButton name="이름 변경" />
          </form>
        </div>
      </div>
    </div>
  );
}
