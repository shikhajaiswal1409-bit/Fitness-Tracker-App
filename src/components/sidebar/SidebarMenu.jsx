import React from "react";
import { List } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";

import {
  StyledMenuItem,
  StyledMenuIcon,
  StyledMenuText,
} from "./SidebarMenu.styles";

const menuItems = [
  { label: "Home", icon: <HomeIcon />, path: "/" },
  { label: "My goals", icon: <FlagIcon />, path: "/goals" },
  { label: "Schedule", icon: <CalendarMonthIcon />, path: "/schedule" },
  { label: "Statistics", icon: <BarChartIcon />, path: "/statistics" },
  { label: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

const SidebarMenu = () => {
  return (
    <List>
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={{ textDecoration: "none" }}
        >
          {({ isActive }) => (
            <StyledMenuItem active={isActive}>
              <StyledMenuIcon active={isActive}>
                {item.icon}
              </StyledMenuIcon>

              <StyledMenuText active={isActive}>
                {item.label}
              </StyledMenuText>
            </StyledMenuItem>
          )}
        </NavLink>
      ))}
    </List>
  );
};

export default SidebarMenu;