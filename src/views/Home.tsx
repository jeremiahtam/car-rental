import MiddleFooter from "../components/MiddleFooter";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeAboutUs from "../components/HomeAboutUs";
import CatchPhraseSection from "../components/CatchPhraseSection";
import HomeChooseCar from "../components/HomeChooseCar";
import HomeWhatWeDo from "../components/HomeWhatWeDo";
import TopFooter from "../components/TopFooter";
import BottomFooter from "../components/BottomFooter";
import { useState } from "react";
import GenericCar2 from "../assets/images/GenericCar2.png";
import SidebarNav from "../components/SidebarNav";

function Home() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const handleSidenav = () => setIsSidenavOpen(!isSidenavOpen);

  return (
    <div className="">
      <SidebarNav handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <Header handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <Hero />
      <HomeWhatWeDo />
      <HomeAboutUs />
      <HomeChooseCar />
      <CatchPhraseSection bgImage={GenericCar2} />
      <TopFooter />
      <MiddleFooter />
      <BottomFooter />
    </div>
  );
}

export default Home;
