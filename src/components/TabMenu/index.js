import React from "react";
import './style.css'
import { NavLink } from "react-router-dom";


const TabMenu = () => {
    return (
        <div className="tab-menu" id="tab-menu">
        <button>Home</button>
        <button>Calendar</button>
        <button>Profile</button>

        </div>
    )
} 

export default TabMenu;