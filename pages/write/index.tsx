import "@/app/globals.css";
import Header from "@/components/header/header";
import React, { useEffect, useState } from "react";
import TextInput from "../../components/write/TextInput";
import ToogleInput from "../../components/write/ToogleInput";
import FormButton from "../../components/write/FormButton";

export default function WritePage() {
  const [values, setValues] = useState({
    title: "",
    datail: "",
    url: "",
    category: "",
    isPublic: false,
  });
  return (
    <div>
      <Header />
      <div className="flex flex-col md:mt-10 lg:mt-10 xl:mt-10 items-center justify-center w-full relative py-6 ">
        <form className="w-full max-w-lg">
          <TextInput label="Title" />
          <TextInput label="Details" />
          <TextInput label="Url" />
          <div className="flex flex-row w-full justify-center justify-items-stretch">
            <ToogleInput label="Category" />
            <ToogleInput label="공개 여부" />
          </div>
          <FormButton />
        </form>
      </div>
    </div>
  );
}
