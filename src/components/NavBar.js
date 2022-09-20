import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/games">Games</NavLink>
            <NavLink to="/gameform">New Game</NavLink>
        </div>
    );
};

export default NavBar;