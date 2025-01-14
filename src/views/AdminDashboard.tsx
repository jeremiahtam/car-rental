import { Outlet } from "react-router";
import { DashboardContainer } from "../components/DashboardContainer";

export const AdminDashboard = () => {

  return (
    <DashboardContainer>
      <Outlet />
    </DashboardContainer>
  );
};
