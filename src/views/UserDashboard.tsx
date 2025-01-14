import { Outlet, useNavigate } from "react-router";
import { DashboardContainer } from "../components/DashboardContainer";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { useEffect } from "react";
import { fetchUser } from "../api/userApi";
import { updateAdminActiveAccount } from "../store/admin/adminSlice";

export const UserDashboard = () => {
  const navigate = useNavigate();
  const userInfo = useAppSelector((state) => state.userInfo);
  const dispatch = useAppDispatch();

  /** fetch user data if status is idle */
  useEffect(() => {
    if (userInfo.status === "idle") {
      dispatch(fetchUser());
    }
    // make admin portal inactive
    dispatch(updateAdminActiveAccount(false));
  }, []);

  /**  */
  useEffect(() => {
    if (!userInfo.active) {
      navigate("/login");
    }
  }, [userInfo]);

  return (
    <DashboardContainer>
      <Outlet />
    </DashboardContainer>
  );
};
