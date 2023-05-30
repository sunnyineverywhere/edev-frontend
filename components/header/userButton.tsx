import Link from "next/link";
import "@/app/globals.css";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function UserButton() {
  return <UserCircleIcon className="h-8 mb-1 group-hover:animate-bounce" />;
}
