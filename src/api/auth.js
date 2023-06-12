import instance from ".";

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);

    const { data } = await instance.post("/api/auth/v3/register", formData);
    // storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/api/auth/v3/login", userInfo);
    // storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const profile = async () => {
  try {
    const { data } = await instance.get("/api/auth/v3/profile");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

export { register, login, profile, storeToken };
