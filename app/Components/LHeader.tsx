import Link from "next/link";
import React from "react";

function LHeader() {
  return (
    <div className="w-full bg-[#327BD2] hidden md:block text-white h-[264px] pt-10 pb-6">
      <div className=" flex flex-col gap-16 max-w-[1240px] mx-auto ">
        <div className="flex w-full justify-between items-center">
          <h1 className="font-bold text-[40px] leading-[25px]">
            <Link href={"/logo"}>LOGO</Link>
          </h1>
          <div className="flex -gap-2 items-center">
            <ul className="flex gap-10">
              <li className="text-[20px] font-[300]  leading-[25px] cursor-pointer ">
                <Link href={"/"}>Главная</Link>
              </li>
              <li className="text-[20px] font-[300]  leading-[25px] cursor-pointer ">
                О нас
              </li>
              <li className="text-[20px] font-[300]  leading-[25px] cursor-pointer ">
                Отзывы
              </li>
            </ul>

            <div className="flex gap-8 ml-[140px] items-center">
              <div className="flex gap-2 cursor-pointer">
                <img src="flag1.png" width={26} alt="" />
                <span className="font-bold text-[20px] leading-[25px]">RU</span>
                <img src="/pass.svg" alt="" />
              </div>
              <div className="flex gap-2  cursor-pointer">
                <img src="/human.svg" alt="" />
                <span className="font-bold text-[20px]  leading-[25px]">
                  Мой профиль
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-[18px] font-[300] mb-2">Откуда</h1>

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
              <button className="h-[59px] w-[198px] rounded-xl flex justify-center items-center border border-white text-[#FFFFFF] font-bold text-[20px] ">
                Найти билеты
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LHeader;
