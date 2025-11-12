// navigation/HomeRoutes.jsx
import { Routes, Route } from "react-router-dom";

import WorkerSearch from "../screens/WorkerSearch";
import PostWork from "../screens/PostWork";

import Home from "../screens/HomeScreen";

// import History from "../screens/HistorySubScreens/History";
import Level from "../screens/Level";
import HiredByCustomer from "../screens/HiredByCustomerScreen";
import RedirectProfileScreen from "../screens/RedirectProfileScreen";
// import WorkerSearch from "./screens/WorkerSearch";
// import PostWork from "./screens/PostWork";
// import UserProfileScreen from "./screens/UserProfileScreen";  // Fixed path
// import Rewards from "../screens/Home/Rewards";
// import Wallet from "../screens/Home/Wallet";

export default function HomeRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} /> 
      <Route path="/WorkerSearch" element={<WorkerSearch />} />
      <Route path="/PostWork" element={<PostWork />} />
      

      {/* <Route path="/history" element={<History />} /> */}
      <Route path="/level" element={<Level />} />
      <Route path="/hiredByCustomer" element={<HiredByCustomer />} />
      <Route path="/redirectProfile" element={<RedirectProfileScreen />} />
      {/* <Route path="/rewards" element={<Rewards />} />
      <Route path="/wallet" element={<Wallet />} /> */}
    </Routes>
  );
}
