import axios from "axios";
const instance = axios.create({
  baseURL: "https://coded-projects-api.herokuapp.com/api",
});
// const instanceBank = axios.create({
//   baseURL: " https://coded-projects-api.herokuapp.com/api/bank/v3",
// });
export default instance;

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// https://coded-projects-api.herokuapp.com/api/auth/v3/register
// https://coded-projects-api.herokuapp.com/api/auth/v3/login
// https://coded-projects-api.herokuapp.com/api/auth/v3/profile
