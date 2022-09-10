import React from "react";

// style
import "./Sidebar.css";
import { Button, IconButton } from "@mui/material";
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
// components
import SidebarOption from "../SidebarOption/SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button className="sidebar__compose" startIcon={<Add fontSize="large" />}>
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={54} />
      <SidebarOption Icon={LabelImportant} title="Important" number={54} />
      <SidebarOption Icon={NearMe} title="Sent" number={54} />
      <SidebarOption Icon={Note} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMore} title="More" number={54} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
