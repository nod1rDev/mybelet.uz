import React from "react";

function Card({ even, imgg }: { even?: boolean; imgg: string }) {
  return (
    <div
      className={`w-[295px] h-[377px] ${
        even ? "md:translate-y-[-50px]" : ""
      } rounded-full bg-[#FDFDFD] flex items-center justify-center bg-opacity-[10%]  shadow-[0px_100px_200px_0px_#327BD21A]`}
    >
      <div className="w-[241px] flex flex-col gap-6 items-center">
        <div className="w-[101px] h-[101px] rounded-full flex items-center justify-center bg-opacity-[5%] bg-[#313EF70D]">
          <img src={imgg} width={53.39} height={53.39} alt="" />
        </div>
        <span className="font-bold text-[20px] leading-[20px] text-center">
          Укажите направление и тип тура
        </span>
        <p className="font-[300] text-[#999999] text-center">
          Выберите направление и даты с самым дешёвым перелётом. а в личном
          кабинете вас ждут конкурсы и эксклюзивные скидки
        </p>
      </div>
    </div>
  );
}

export default Card;
