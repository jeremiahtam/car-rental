import { Avatar, Dropdown } from "flowbite-react";
import React from "react";
import { adminPortalMenu, userPortalMenu } from "../data/menuItems";
import { Link } from "react-router";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHook";
import { deleteUserToken } from "../store/user/userSlice";

export const UserProfileDropDownMenu = () => {
  const userInfo = useAppSelector((state) => state.userInfo);
  const adminInfo = useAppSelector((state) => state.adminInfo);
  const dispatch = useAppDispatch();

  return (
    <Dropdown label={<Avatar rounded />} arrowIcon={false} inline>
      <Dropdown.Header>
        <span className="block text-sm">
          {userInfo.active && userInfo.user?.name}
          {adminInfo.active && adminInfo.admin?.name}
        </span>
        <span className="block truncate text-sm font-medium">
          {userInfo.active && userInfo.user?.email}
          {adminInfo.active && adminInfo.admin?.email}
        </span>
      </Dropdown.Header>
      {userInfo.active &&
        userPortalMenu.map((item, index) => {
          return (
            <Link to={item.link} key={index}>
              <Dropdown.Item>{item.name}</Dropdown.Item>
            </Link>
          );
        })}
      {adminInfo.active &&
        adminPortalMenu.map((item, index) => {
          return (
            <Link to={item.link} key={index}>
              <Dropdown.Item>{item.name}</Dropdown.Item>
            </Link>
          );
        })}
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => dispatch(deleteUserToken())}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
};
