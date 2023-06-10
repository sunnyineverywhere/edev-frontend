import "@/app/globals.css";
import UserName from "./userName";
import UserEmail from "./userEmail";
import FormButton from "../write/FormButton";
import LogoutButton from "./logout";

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
            <UserName name={props.name} />
            <UserEmail email={props.email} />
            <div className="flex flex-row-reverse">
              <LogoutButton />
              <FormButton name="이름 변경" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
