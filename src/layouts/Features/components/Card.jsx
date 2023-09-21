import React from "react";

function Card({ title, body }) {
  return (
    <article className="bg-dark-background md:w-full md:h-auto w-[300px] h-[250px] p-5 rounded-xl border-[1px] border-placeholder-dark">
      <p className="text-lg font-bold">{title}</p>
      <p>{body}</p>
    </article>
  );
}

export default Card;
