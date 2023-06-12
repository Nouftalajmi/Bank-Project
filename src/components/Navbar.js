import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <div className="flex justify-evenly items-center bg-sky-700 text-white h-16">
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/users">Users</NavLink> */}
        {user ? (
          <button to="/login" className="">
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login" className="">
              Login
            </NavLink>
            <NavLink to="/register" className="">
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
