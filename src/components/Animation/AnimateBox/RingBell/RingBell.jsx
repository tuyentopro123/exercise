import React from 'react'
import NotificationsIcon from "@mui/icons-material/Notifications";
import {amber} from "@mui/material/colors";
import "./RingBell.css"

const RingBell = () => {
  return (
    <div className="ring-bell">
        <div className="bell-animation">
            <NotificationsIcon sx={{ fontSize: 100, color: amber[700] }} />
        </div>
        <div className="notiNum">
            <span>+99</span>
        </div>
    </div>
  )
}

export default RingBell