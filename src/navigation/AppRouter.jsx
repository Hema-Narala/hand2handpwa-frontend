import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from "../screens/LandingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignupScreen";
import MainTabNavigator from "./MainTabNavigator";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />

        {/* ✅ Main tab navigator must be wrapped inside a Route */}
        <Route path="/app/*" element={<MainTabNavigator />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
