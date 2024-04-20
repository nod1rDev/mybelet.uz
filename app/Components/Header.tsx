import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="w-[1228px] text-[#FFFFFF] mx-auto pt-3 flex  items-center">
      <Link href={"/"}>
        <img src="/logo.png" className="mr-[320px]" alt="" />
      </Link>
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
    </header>
  );
}

export default Header;
