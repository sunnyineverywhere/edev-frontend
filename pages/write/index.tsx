import "@/app/globals.css";
import Header from "@/components/header/header";
import React, { useEffect } from "react";
import TextInput from "../../components/write/TextInput";
import ToogleInput from "../../components/write/ToogleInput";
import FormButton from "../../components/write/FormButton";

export default function WritePage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center w-full relative py-6 ">
        <form className="w-full max-w-lg">
          <TextInput label="Title" />
          <TextInput label="Details" />
          <TextInput label="Url" />
          <ToogleInput />
          <FormButton />
        </form>
      </div>
    </div>
  );
}
