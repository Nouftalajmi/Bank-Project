import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center bg-sky-700 text-white h-16">
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/users">Users</NavLink> */}
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
