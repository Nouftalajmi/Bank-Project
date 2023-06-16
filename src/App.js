import { Route, Routes } from "react-router-dom";
import "./App.css";
import Deposit from "./components/Deposit";
import Navbar from "./components/Navbar";
import Transfer from "./components/Transfer";
import Withdraw from "./components/Withdraw";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MyDetails from "./pages/MyDetails";
import MyTransactions from "./pages/MyTransactions";
import Register from "./pages/Register";
import Users from "./pages/Users";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { checkToken } from "./api/auth";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
  }, []);
  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/my-details" element={<MyDetails />} />
          <Route path="/my-transactions" element={<MyTransactions />} />
          <Route path="/deposits" element={<Deposit />} />
          <Route path="/transfer/:username" element={<Transfer />} />
          <Route path="/withdraw" element={<Withdraw />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
