// navigation/TabNavigation.jsx
import { Routes, Route, Link } from "react-router-dom";

import BottomTabNavigator from "../Components/ComponentScreens/BottomTabNavigator";

import HomeRoutes from "./HomeRoutes";
import Buy from "../screens/BuySubScreens/BuyScreen";
import Sell from "../screens/SellScreen";
import Bookings from "../screens/BookingScreen";
import Profile from "../screens/UserProfileScreen";

export default function MainTabNavigator() {
  return (
    <>
      {/* <div className="tab-bar">
        <Link to="/app/home">Home</Link>
        <Link to="/app/buy">Buy</Link>
        <Link to="/app/sell">Sell</Link>
        <Link to="/app/bookings">Bookings</Link>
        <Link to="/app/profile">Profile</Link>
      </div> */}
      
      {/* BOTTOM TAB NAVIGATION */}
      <BottomTabNavigator />

      <Routes>
        <Route path="home/*" element={<HomeRoutes />} />
        <Route path="buy" element={<Buy />} />
        <Route path="sell" element={<Sell />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}
