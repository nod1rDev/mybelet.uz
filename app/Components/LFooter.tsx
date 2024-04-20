import Link from "next/link";
import React from "react";

function LFooter() {
  return (
    <div className=" pt-6 md:pt-3 pb-6 max-w-[1228px] flex flex-col md:flex-row gap-8 md:gap-0  justify-between items-center mx-auto">
      <Link href={"/logo"}>
        <span className="text-[#262626] font-bold text-[40px] leading-[25px]"> LOGO</span>
      </Link>
      <ul className="flex gap-14 text-[#747373]">
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
      <div className="flex gap-3">
        <div className="w-[46px] h-[46px] bg-[#327BD2] cursor-pointer transition-all hover:translate-y-[-6px] hover:w-[48px] hover:h-[48px]  rounded-full flex justify-center items-center">
          <span className="font-bold text-[20px] text-white ">f</span>
        </div>

        <div className="w-[46px] h-[46px] bg-[#327BD2] transition-all hover:translate-y-[-6px] hover:w-[48px] hover:h-[48px] cursor-pointer rounded-full flex justify-center items-center">
          <span className="font-bold text-[20px] text-white ">in</span>
        </div>

        <div className="w-[46px] h-[46px] bg-[#327BD2] transition-all hover:translate-y-[-6px] hover:w-[48px] hover:h-[48px] cursor-pointer rounded-full flex justify-center items-center">
          <img src="/twit.svg" width={23.01} height={17.63} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LFooter;
