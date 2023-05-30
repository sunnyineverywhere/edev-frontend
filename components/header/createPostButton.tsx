import Link from "next/link";
import "@/app/globals.css";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function CreateButton() {
  return <PencilSquareIcon className="h-7 m-1 group-hover:animate-bounce" />;
}
