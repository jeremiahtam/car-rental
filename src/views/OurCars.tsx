import React, { useState } from "react";
import Header from "../components/Header";
import BottomFooter from "../components/BottomFooter";
import MiddleFooter from "../components/MiddleFooter";
import TopFooter from "../components/TopFooter";
import CarsFilter from "../components/CarsFilter";
import CarBrands from "../components/CarBrands";
import PageHeading from "../components/PageHeading";
import { ourCarsPageBreadcrumbsArray } from "../data/breadcrumbsArrays";
import SidebarNav from "../components/SidebarNav";

function OurCars() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const handleSidenav = () => setIsSidenavOpen(!isSidenavOpen);

  return (
    <div>
      <SidebarNav handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <Header handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <PageHeading
        breadcrumbsArray={ourCarsPageBreadcrumbsArray}
        title="Our Cars"
      />
      <CarsFilter />
      <CarBrands />
      <TopFooter />
      <MiddleFooter />
      <BottomFooter />
    </div>
  );
}

export default OurCars;
