import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <div className="navbar">
            <span>
                <NavLink to="/"> Home </NavLink>
                <br></br>
                <NavLink to="/games"> Games </NavLink>
                <br></br>
                <NavLink to="/gameform"> New Game </NavLink>
            </span>
        </div>
        </>
    );
};

export default NavBar;