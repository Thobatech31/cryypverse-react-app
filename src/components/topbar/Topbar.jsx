import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Cryptoverse</span>
        </div>
        <div className="topRight">
          <img src="https://skyelanguagestudies.com/wp-content/uploads/2018/11/Profile-pic.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
