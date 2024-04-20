"use client";
import { Button } from "konsta/react";
import React from "react";
import { showMenu } from "../modal";
import Link from "next/link";

function Phero() {
  return (
    <div className="flex md:hidden w-full flex-col text-white gap-6 bg-[#327BD2] px-4 pt-6 pb-10">
      <header className="flex  items-center justify-between w-full">
        <Link href={"/"}>
          <img src="/logo.png" width={114} height={114} alt="" />
        </Link>
        <div className="flex gap-8">
          <div className="flex gap-4">
            <div className="flex gap-1 cursor-pointer">
              <img src="flag1.png" width={26} alt="" />
              <span className="font-bold text-[16px] text-white leading-[25px]">
                RU
              </span>
              <img src="/pass.svg" alt="" />
            </div>
            <img src="/human.svg" alt="" />
          </div>
          <button onClick={showMenu}>
            <img src="/menu.svg" width={32} height={32} alt="" />
          </button>
        </div>
      </header>
      <main className="flex flex-col gap-4 ">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[22px] font-bold">
            Онлайн покупка авиабилетов
          </span>
          <p className="text-[14px] font-[300] text-center">
            Все направления, доступные цены, офлайн и онлайн оплата с Uzcard
          </p>
        </div>
        <div className="mt-6">
          <span className="text-[16px] font-[300] mb-4">Откуда</span>
          <div className="flex gap-3  mt-2 flex-col ">
            <div className="flex gap-1">
              <input
                type="text"
                className="w-[170px] rounded-l-xl bg-white h-[59px] pl-6 text-[18px] text-[#262626] flex items-center placeholder:text-[#999999]"
                defaultValue={"Ташкент"}
              />
              <input
                type="text"
                className="w-[170px] rounded-r-xl bg-white h-[59px] pl-6 text-[18px] text-[#262626] flex items-center placeholder:text-[#999999]"
                placeholder="Куда"
              />
            </div>
            <div className="flex gap-1">
              <input
                type="text"
                className="w-[170px] rounded-l-xl bg-white h-[59px] pl-6 text-[18px] text-[#262626] flex items-center placeholder:text-[#999999]"
                placeholder={"Туда"}
              />
              <input
                type="text"
                className="w-[170px] rounded-r-xl bg-white h-[59px] pl-6 text-[18px] text-[#262626] flex items-center placeholder:text-[#999999]"
                placeholder="Обратно"
              />
            </div>
            <div className="flex gap-1">
              <input
                type="text"
                className="w-[170px] rounded-l-xl mr-2 bg-white h-[59px] pl-6 text-[18px] text-[#262626] flex items-center placeholder:text-[#999999]"
                placeholder={"эконом"}
              />
              <Link href={"/logo"}>
                <button className="h-[59px] w-[164px] rounded-xl flex justify-center items-center bg-[#327BD2]  shadow-[0px_1px_17px_0px_#acc7e8] text-[#FFFFFF] font-bold text-[20px] ">
                  Найти билеты
                </button>
              </Link>
            </div>
          </div>
        </div>

        <img
          src="/plane.png"
          className="mt-10 mx-auto"
          width={400}
          height={450}
          alt=""
        />
      </main>
    </div>
  );
}

export default Phero;
