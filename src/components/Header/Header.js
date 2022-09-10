import React from "react";

// style
import "./Header.css";
import { logo } from "../../images";
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@mui/icons-material";
import { IconButton, Avatar } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" />
      </div>

      <div className="header__middle">
        <Search />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
