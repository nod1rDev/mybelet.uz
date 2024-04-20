import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="w-[1228px] text-[#FFFFFF] mx-auto z-50 mt-10 leading-[25px] flex flex-col gap-6 items-center">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="font-bold text-[47px] ">Онлайн покупка авиабилетов</h2>
        <p className="font-[300] text-[17px]">
          Все направления, доступные цены, офлайн и онлайн оплата с Uzcard
        </p>
      </div>
      <div className="w-full">
        <h1 className="text-[18px] font-[300] mb-4">Откуда</h1>
        <div className="flex gap-3">
          <div className="flex gap-1">
            <input
              type="text"
              className="w-[213px] rounded-l-xl bg-white h-[59px] pl-6 text-[18px] text-[#262626] flex items-center placeholder:text-[#999999]"
              defaultValue={"Ташкент"}
            />
            <input
              type="text"
              className="w-[213px]  h-[59px] bg-white pl-6 text-[18px] text-[#262626] flex items-center placeholder:text-[#999999]"
              placeholder={"Куда"}
            />
            <input
              type="text"
              className="w-[156px]  h-[59px] bg-white pl-6 text-[18px] text-[#262626] flex items-center placeholder:text-[#999999]"
              placeholder={"Туда"}
            />
            <input
              type="text"
              className="w-[156px] bg-white h-[59px] pl-6 text-[18px] text-[#262626] flex items-center placeholder:text-[#999999]"
              placeholder={"Обратно"}
            />
            <div className=" relative">
              <span className=" absolute  text-[18px] text-[#262626] top-4 left-6">
                1 пассажир,
              </span>
              <input
                type="text"
                className="w-[263px] bg-white  h-[59px] rounded-r-xl pl-[140px] text-[18px] text-[#262626] flex items-center placeholder:text-[#999999]"
                placeholder={"эконом"}
              />
            </div>
          </div>
          <Link href={"/logo"}>
            <button className="h-[59px] w-[198px] rounded-xl flex justify-center items-center bg-[#327BD2]  shadow-[0px_1px_17px_0px_#327BD2] text-[#FFFFFF] font-bold text-[20px] ">
              Найти билеты
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
