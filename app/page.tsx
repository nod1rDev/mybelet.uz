import About from "./Components/About";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Map from "./Components/Map";
import Phero from "./Components/Phero";

export default function Home() {
  return (
    <>
      <div className="h-[830px] z-10 bg-[#327BD2] hidden md:block  bg-top bg-[url(/shine.png)]">
        <img
          src="/plane.png"
          className=" absolute w-[1228px] left-[140px] bottom-[-50px]"
          alt=""
        />
        <Header />
        <Hero />
      </div>
      <Phero />
      <Cards />
      <About />
      <Map />
      <Footer />
    </>
  );
}
