import { ReactNode, useState } from "react";
import { PortalHeader } from "../components/PortalHeader";
import { PortalSidebarNav } from "../components/PortalSidebarNav";

interface DashboardContainerProps {
  children: ReactNode;
}

export const DashboardContainer = (props: DashboardContainerProps) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const handleSidenav = () => setIsSidenavOpen(!isSidenavOpen);

  return (
    <div>
      <PortalSidebarNav
        handleSidenav={handleSidenav}
        isSideNavOpen={isSidenavOpen}
      />
      <div
        className={`${
          isSidenavOpen ? "md:ml-64" : ""
        }  px-2 border-solid border-b-[1px] border-gray-100`}
      >
        <PortalHeader
          handleSidenav={handleSidenav}
          isSideNavOpen={isSidenavOpen}
        />
        {props.children}
      </div>
    </div>
  );
};
