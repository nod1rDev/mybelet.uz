import React from "react";
import LRight from "./LRight";
import Left from "./Left";

function LHero() {
  return (
    <div className="max-w-[1240px] text-[#262626] mx-auto flex flex-col md:flex-row gap-10 py-10">
      <LRight />
      <Left />
    </div>
  );
}

export default LHero;
