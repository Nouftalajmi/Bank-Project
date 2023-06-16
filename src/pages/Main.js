import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { profile, register } from "../api/auth";
import { userBalance } from "../api/balance";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
// import { useParams } from "react-router-dom";
const Main = () => {
  //const { profileId } = useParams();
  const [user, setUser] = useContext(UserContext);
  const queryClient = useQueryClient();

  const { data: me } = useQuery({
    queryKey: ["me"],
    queryFn: () => profile(),
  });
  const { data: credit } = useQuery({
    queryKey: ["credit"],
    queryFn: () => userBalance(),
  });

  const { mutate: profileFun } = useMutation({
    mutationFn: () => register(),
    onSuccess: queryClient.invalidateQueries({ queryKey: ["user"] }),
  });

  const { mutate: myBalance } = useMutation({
    mutationFn: () => userBalance(),
    onSuccess: queryClient.invalidateQueries({ queryKey: ["user"] }),
  });

  const handleChange = () => {
    profileFun();
  };

  const handleBalance = () => {
    myBalance();
  };

  if (!user || !credit) return "";
  return (
    <div className="bg-white min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-[90%] overflow-scroll w-full px-6 py-8 bg-gray-400 rounded-md shadow-md max-h-[80%]">
        <h2 className="text-3xl text-white font-semibold mb-6 ">My Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="flex flex-col items-center justify-center gap-4 font-bold text-center">
            <div className="">{me.username}</div>
            <img
              className="rounded-[15px] w-full"
              src={`https://coded-projects-api.herokuapp.com${me.image}`}
            />
            <div>{`Balance ${credit.balance} KD`}</div>
            <div>
              <NavLink to="/my-details">Account Details</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
