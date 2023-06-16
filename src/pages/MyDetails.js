import React from "react";
import { userBalance, loggedInTransactions } from "../api/balance";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const MyDetails = () => {
  // const { profileId } = useParams();
  const queryClient = useQueryClient();

  const { data: credit } = useQuery({
    queryKey: ["credit"],
    queryFn: () => userBalance(),
  });
  const { mutate: myBalance } = useMutation({
    mutationFn: () => userBalance(),
    onSuccess: queryClient.invalidateQueries({ queryKey: ["user"] }),
  });

  const { data: transactions } = useQuery({
    queryKey: ["transaction"],
    queryFn: () => loggedInTransactions(),
  });
  const { mutate: myTransaction } = useMutation({
    mutationFn: () => loggedInTransactions(),
    onSuccess: queryClient.invalidateQueries({ queryKey: ["transaction"] }),
  });
  const handleTransactions = () => {
    myTransaction();
  };

  if (!credit) return "";
  return (
    <div className="bg-white min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-[90%] overflow-scroll w-full px-6 py-8 bg-gray-400 rounded-md shadow-md max-h-[80%]">
        <h2 className="text-3xl text-white font-semibold mb-6 ">
          My Account Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className=" "></div>
          <div>{` Balance ${credit.balance} KD`}</div>
          {transactions?.map((transaction) => (
            <p>
              {transaction.type} [{transaction.amount} KD]
            </p>
          ))}
          <div className="flex flex-col">
            <div className="bg-red">
              <NavLink to="/deposits">Deposits</NavLink>
            </div>
            <NavLink to="/transfer/:username">Transfer</NavLink>
            <NavLink to="/withdraw">Withdraw</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyDetails;
