import "@/app/globals.css";
import React, { useEffect, useState } from "react";
import Card from "./card";

export default function HomeSection(props) {
  const cardList =
    props.data &&
    props.data.map((value) => (
      <Card
        key={value.postId}
        author={value.author}
        title={value.title}
        category={value.category}
        url={value.url}
      />
    ));

  return (
    <section className="py-6 sm:py-12 ">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">{props.title}</h2>
          <p className="text-sm dark:text-gray-400">{props.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {cardList}
        </div>
      </div>
    </section>
  );
}
