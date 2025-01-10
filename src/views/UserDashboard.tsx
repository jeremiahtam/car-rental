import { Outlet } from "react-router";
import { DashboardContainer } from "../components/DashboardContainer";

export const UserDashboard = () => {
  return (
    <DashboardContainer>
      <Outlet />
    </DashboardContainer>
  );
};
