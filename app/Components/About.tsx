import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center bg-[#327BD2] h-[700px] text-white pt-6 w-full px-4 bg-[url(/Map.png)] md:hidden">
      <h1 className="font-bold   text-[26px] mb-8 mx-auto">О нас</h1>
      <div className="flex flex-col mt-[30px] gap-10">
        <img src="/about.png" width={560} height={456} alt="" />
        <div className="flex flex-col gap-4 max-w-[505px]">
          <p className="text-[13px] font-[300] leading-[25px] text-[#EBEBEB] text-start">
            АвиакомпанияТекст - это одна из крупнейших авиакомпаний . Она была
            основана в 1992 году и является одним из ведущих перевозчиков.
            Авиакомпания обслуживает более 100 направлений и за ее пределами.
            Она предлагает пассажирам широкий выбор услуг, включая бизнес-класс,
            эконом-класс и премиальный сервис.
          </p>
          <button className="w-[182px] h-[56px] flex justify-center items-center rounded-full border boreder-[#FFFFFF] text-white text-[20px] font-bold leading-[25px]">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
