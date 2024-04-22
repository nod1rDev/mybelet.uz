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
      <div className="h-[830px] z-10 bg-[#327BD2] hidden md:block bg-no-repeat  bg-top bg-[url(/shine.png)]">
        <Header />
        <Hero />
        <img
          src="/plane.png"
          className="  w-[1228px]  mx-auto mt-[100px]"
          alt=""
        />
      </div>
      <Phero />
      <Cards />
      <About />
      <Map />
      <Footer />
    </>
  );
}
