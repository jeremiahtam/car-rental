import { Outlet } from "react-router";
import { DashboardContainer } from "../components/DashboardContainer";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { useEffect } from "react";
import { updateUserActiveAccount } from "../store/user/userSlice";
import { updateAdminActiveAccount } from "../store/admin/adminSlice";

export const AdminDashboard = () => {
  const adminInfo = useAppSelector((state) => state.adminInfo);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(updateUserActiveAccount(false));
  //   if (adminInfo.admin) {
  //     dispatch(updateAdminActiveAccount(true));
  //   }
  // });

  return (
    <DashboardContainer>
      <Outlet />
    </DashboardContainer>
  );
};
