import instance from ".";

const userBalance = async () => {
  try {
    const { data } = await instance.get(`/bank/v3/balance`);
    return data;
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const loggedUserBalance = async () => {
  try {
    const { data } = await instance.get(`/bank/v3/balance`);
    return data;
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const loggedInTransactions = async () => {
  try {
    const { data } = await instance.get(`/bank/v3/transactions`);
    return data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const deposit = async () => {
  try {
    const { data } = await instance.post(`/bank/v3/deposit`);
    return data;
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const withdrawal = async () => {
  try {
    const { data } = await instance.post(`/bank/v3/withdrawal`);
    return data;
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const transfer = async (username) => {
  try {
    const { data } = await instance.post(`/bank/v3/transfer/:${username}`);
    return data;
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export {
  userBalance,
  loggedUserBalance,
  loggedInTransactions,
  deposit,
  withdrawal,
  transfer,
};
// loggedUserBalance
