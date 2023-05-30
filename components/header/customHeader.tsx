import Link from "next/link";
import "@/app/globals.css";
import CreateButton from "./createPostButton";
import UserButton from "./userButton";

export default function CustomHeader() {
  return (
    <div className="flex flex-row items-end justify-end mr-4">
      <Link href="#">
        <CreateButton />
      </Link>
      <Link href="#">
        <UserButton />
      </Link>
    </div>
  );
}
