import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userBalance, deposit } from "../api/balance";

const Deposit = () => {
  const queryClient = useQueryClient();
  const { data: credit } = useQuery({
    queryKey: ["credit"],
    queryFn: () => userBalance(),
  });
  const { mutate: myBalance } = useMutation({
    mutationFn: () => userBalance(),
    onSuccess: queryClient.invalidateQueries({ queryKey: ["user"] }),
  });
  const { data: depose } = useQuery({
    queryKey: ["depose"],
    queryFn: () => deposit(),
  });

  const { mutate: depoFun } = useMutation({
    mutationFn: () => deposit(),
    onSuccess: queryClient.invalidateQueries({ queryKey: ["depo"] }),
  });
  const handleAmount = () => {
    depoFun();
  };

  const handleSubmit = () => {};

  if (!credit) return "";
  return (
    <div>
      <form onSubmit={handleAmount}>
        <div className="bg-white min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
          <div className="max-w-[90%] overflow-scroll w-full px-6 py-8 bg-gray-400 rounded-md shadow-md max-h-[80%]">
            <h2 className="text-3xl text-white font-semibold mb-6 ">
              My Account Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              <div className="flex flex-col justify-item item-center mt-[4px] ">
                {/* <div>{` Balance ${credit.balance} KD`}</div> */}
                <input
                  placeholder="Account Number"
                  type="text"
                  onChange={handleAmount}
                />

                <input
                  placeholder="Amount"
                  type="number"
                  onChange={handleAmount}
                />

                <button type="submit">Deposit</button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Deposit;
