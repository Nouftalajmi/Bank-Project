import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import { logout } from "../api/auth";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  console.log("user", user);
  return (
    <div>
      <div className="flex justify-evenly items-center bg-sky-700 text-white h-16">
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/users">Users</NavLink> */}
        {user ? (
          <>
            <NavLink to="/main">profile</NavLink>
            <button
              onClick={() => {
                logout();
                setUser(false);
              }}
              className=""
            >
              Logout
            </button>
          </>
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
