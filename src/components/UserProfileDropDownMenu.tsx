import { Avatar, Dropdown } from "flowbite-react";
import React from "react";
import { userPortalMenu } from "../data/menuItems";
import { Link } from "react-router";

export const UserProfileDropDownMenu = () => {
  return (
    <Dropdown label={<Avatar rounded />} arrowIcon={false} inline>
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      {userPortalMenu.map((item, index) => {
        return (
          <Link to={item.link} key={index}>
            <Dropdown.Item>{item.name}</Dropdown.Item>
          </Link>
        );
      })}
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
};
