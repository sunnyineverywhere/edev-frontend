import "@/app/globals.css";
import Header from "@/components/header/header";
import React, { useEffect, useState } from "react";
import TextInput from "../../components/write/TextInput";
import ToogleInput from "../../components/write/ToogleInput";
import FormButton from "../../components/write/FormButton";
import addPost from "../../service/post";

export default function WritePage() {
  const categoryList = [
    {
      key: "RETROSPECT",
      title: "회고",
    },
    {
      key: "ARTICLE",
      title: "정리",
    },
    {
      key: "REVIEW",
      title: "후기",
    },
    {
      key: "ETC",
      title: "일반",
    },
  ];

  const publicList = [
    {
      key: false,
      title: "비공개",
    },
    {
      key: true,
      title: "공개",
    },
  ];

  const [values, setValues] = useState({
    title: "",
    detail: "",
    url: "",
    category: categoryList[0].key,
    isPublic: false,
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (addPost(values)) {
      window.location.href = "https://edev.co.kr";
    } else {
      alert("입력이 되지 않았습니다. 다시 시도해주세요!");
    }
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col md:mt-10 lg:mt-10 xl:mt-10 items-center justify-center w-full relative py-6 ">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <TextInput
            name="title"
            label="Title"
            value={values.title}
            onChange={handleChange}
          />
          <TextInput
            name="detail"
            label="Details"
            value={values.detail}
            onChange={handleChange}
          />
          <TextInput
            label="Url"
            name="url"
            value={values.url}
            onChange={handleChange}
          />
          <div className="flex flex-row w-full justify-center justify-items-stretch">
            <ToogleInput
              name="category"
              label="Category"
              value={values.category}
              onChange={handleChange}
              list={categoryList}
            />
            <ToogleInput
              name="isPublic"
              label="공개 여부"
              value={values.isPublic}
              onChange={handleChange}
              list={publicList}
            />
          </div>
          <FormButton onSubmit={handleSubmit} />
        </form>
      </div>
    </div>
  );
}
