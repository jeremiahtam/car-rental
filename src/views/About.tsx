import { useState } from "react";
import Header from "../components/Header";
import TopFooter from "../components/TopFooter";
import MiddleFooter from "../components/MiddleFooter";
import BottomFooter from "../components/BottomFooter";
import { aboutPageBreadcrumbsArray } from "../data/breadcrumbsArrays";
import PageHeading from "../components/PageHeading";
import AboutInfo from "../components/AboutInfo";
import AboutStats from "../components/AboutStats";
import AboutMoreInfo from "../components/AboutMoreInfo";
import CatchPhraseSection from "../components/CatchPhraseSection";
import AboutAccordion from "../components/AboutAccordion";
import GenericCar3 from "../assets/images/GenericCar3.png";
import PageSubHeading from "../components/PageSubHeading";
import Reviews from "../components/Reviews";
import SidebarNav from "../components/SidebarNav";

function About() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const handleSidenav = () => setIsSidenavOpen(!isSidenavOpen);

  return (
    <div className="">
      <SidebarNav handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <Header handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <PageHeading breadcrumbsArray={aboutPageBreadcrumbsArray} title="About" />
      <AboutInfo />
      <AboutStats />
      <AboutMoreInfo />
      <PageSubHeading subheading="Reviews from our customers" />
      <Reviews />
      <PageSubHeading subheading="Top Car Rental Questions" />
      <AboutAccordion />
      <CatchPhraseSection bgImage={GenericCar3} />
      <TopFooter />
      <MiddleFooter />
      <BottomFooter />
    </div>
  );
}

export default About;
