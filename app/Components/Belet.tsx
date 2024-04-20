import React from "react";

function Belet() {
  return (
    <div className="flex gap-4 w-[819px] h-[249px] bg-slate-50 rounded-xl">
      <div className="flex flex-col pr-4 border-r border-r-[#99999924] border-opacity-[14%] pb-6 ">
        <button className="w-[239px] h-[32px] bg-[#009E23] shadow-[0px_0px_30px_0px_#009E2399] bg-opacity-[60%] rounded-lg flex justify-center items-center text-white font-bold text-[19px] leading-[24.36px]">
          Самый дешевый
        </button>
        <div className="flex flex-col gap-20 mx-auto mt-9 max-w-[220px]">
          <h1 className="font-bold text-[#262626] text-[30px] leading-[34px]">
            1.000.000 сум
          </h1>
          <button className="w-[201px] bg-[#327BD2] h-[47px] shadow-[0px_1px_17px_0px_#327BD240] rounded-xl bg-opacity-[80%] font-bold text-white text-[19px] leading-[19px]">
            К оформлению
          </button>
        </div>
      </div>
      <div className="flex gap-10 py-6 ">
        <div className="flex flex-col  justify-between h-full">
          <div className="flex flex-col gap-1 items-center">
            <span className="text-[21px] text-[#595959]  leading-[26.92px]  opacity-[50%]">
              Кишинев-Москва
            </span>
            <div className="w-[105px] text-center font-[450] text-[20px] leading-[26.92px] text-[#4D4D4D]">
              23февВт: 9:50-11:40
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="text-[21px] text-[#595959]  leading-[26.92px]  opacity-[50%]">
              Москва-Кишинев
            </span>
            <div className="w-[105px] text-center font-[450] text-[20px] leading-[26.92px] text-[#4D4D4D]">
              4 мар. Вс: 9:50-11:40
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full ">
          <div className="flex flex-col gap-5 items-center">
            <span className="text-[21px] text-[#595959]  leading-[26.92px]  opacity-[50%]">
              В пути
            </span>
            <span className="font-[450] text-[20px] leading-[26.92px] text-[#4D4D4D]">
              1час 50мин
            </span>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <span className="text-[21px] text-[#595959]  leading-[26.92px]  opacity-[50%]">
              В пути
            </span>
            <span className="font-[450] text-[20px] leading-[26.92px] text-[#4D4D4D]">
              1час 25мин
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full ">
          <div className="flex flex-col gap-5 items-center">
            <span className="text-[21px] text-[#595959]  leading-[26.92px]  opacity-[50%]">
              2 Пересадки
            </span>
            <span className="font-[450] text-[20px] leading-[26.92px] text-[#4D4D4D]">
              Мадрид, Монако
            </span>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <span className="text-[21px] text-[#595959]  leading-[26.92px]  opacity-[50%]">
              Без пересадок
            </span>
            <span className="font-bold text-[50px] leading-[26.92px] text-[#4D4D4D]">
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Belet;
