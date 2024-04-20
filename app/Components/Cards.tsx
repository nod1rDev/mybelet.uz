import React from "react";
import Card from "./Card";

const cards = [
  {
    imgg: "/search1.svg",
    even: false,
  },
  {
    imgg: "/systeam.svg",
    even: true,
  },
  {
    imgg: "/doc.svg",
    even: false,
  },
  {
    imgg: "/pay.svg",
    even: true,
  },
];

function Cards() {
  return (
    <div className="max-w-[1240px] px-6 md:px-0  leading-[25px] text-[#262626] mx-auto flex flex-col gap-[10px]  md:gap-[100px] items-center py-16 ">
      <span className="font-bold text-[26px] text-center md:text-[32px] ">
        Как происходит покупка авиабилетов онлайн?
      </span>
      <div className="w-full flex flex-col md:flex-row mt-10 md:mt-0 gap-4">
        {cards.map((e: any, i: number) => (
          <Card key={i} imgg={e.imgg} even={e.even} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
