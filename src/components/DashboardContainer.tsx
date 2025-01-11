import { ReactNode, useState } from "react";
import { PortalHeader } from "../components/PortalHeader";
import { PortalSidebarNav } from "../components/PortalSidebarNav";
import SidebarNav from "./SidebarNav";

interface DashboardContainerProps {
  children: ReactNode;
}

export const DashboardContainer = (props: DashboardContainerProps) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const handleSidenav = () => setIsSidenavOpen(!isSidenavOpen);

  return (
    <div>
      <SidebarNav handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <div className="flex flex-row">
        <PortalSidebarNav />
        <div className="w-full">
          <div className={`md:ml-32 relative`}>
            <PortalHeader
              handleSidenav={handleSidenav}
              isSideNavOpen={isSidenavOpen}
            />
            <div className="p-4 mt-4">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
