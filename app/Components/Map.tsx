import React from "react";

function Map() {
  return (
    <div className="bg-[#327BD2] w-full hidden md:block bg-[url(/Map.png)] bg-no-repeat h-[711px] pt-10">
      <div className="max-w-[1228px] mx-auto pl-10 flex gap-[150px] flex-col items-center ">
        <span className="text-white font-bold text-[33px] leading-[25px]">
          О нас
        </span>
        <div className="w-full flex justify-between items-center">
          <img src="/about.png" width={560} height={456} alt="" />
          <div className="flex flex-col gap-10 max-w-[505px]">
            <p className="text-[18px] font-[300] leading-[25px] text-[#EBEBEB] text-start">
              АвиакомпанияТекст - это одна из крупнейших авиакомпаний . Она была
              основана в 1992 году и является одним из ведущих перевозчиков.
              Авиакомпания обслуживает более 100 направлений и за ее пределами.
              Она предлагает пассажирам широкий выбор услуг, включая
              бизнес-класс, эконом-класс и премиальный сервис. Авиакомпания
              имеет собственную сеть аэропортов и предлагает пассажирам
              привлекательные цены на авиабилеты. Авиакомпания стремится
              предоставлять пассажирам безопасное, комфортное и приятное
              путешествие.
            </p>
            <button className="w-[182px] h-[56px] flex justify-center items-center rounded-full border boreder-[#FFFFFF] text-white text-[20px] font-bold leading-[25px]">
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
