import React from "react";
import { NavLink } from "react-router-dom";

const navStyles = {
  padding : "10px",
  margin : " 0 20px 10px 20px",
  color : "orange",
  fontStyle : "oblique",
  textDecoration : "none"
}

function NavBar() {
  return (
    <div className="navbar">
       <NavLink 
       to="/"
       exact
       style = {navStyles}
       activeStyle = {{
         background : "orange",
         color : "white"
       }}
       >
        Home
       </NavLink>

       <NavLink 
       to="/movies"
       exact
       style = {navStyles}
       activeStyle = {{
         background : "orange",
         color : "white"
       }}
       >
        Movies
       </NavLink>

       <NavLink 
       to="/directors"
       exact
       style = {navStyles}
       activeStyle = {{
         background : "orange",
         color : "white"
       }}
       >
        Directors
       </NavLink>

       <NavLink 
       to="/actors"
       exact
       style = {navStyles}
       activeStyle = {{
         background : "orange",
         color : "white"
       }}
       >
        Actors
       </NavLink>
       
    </div>
  );
}

export default NavBar;
