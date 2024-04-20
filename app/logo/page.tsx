import React from "react";
import LHeader from "../Components/LHeader";
import LHero from "../Components/LHero";
import LFooter from "../Components/LFooter";
import LPHeader from "../Components/LPHeader";

function page() {
  return (
    <div>
      <LHeader />
      <LPHeader />
      <LHero />
      <LFooter />
    </div>
  );
}

export default page;
