// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingScreen from "./screens/LandingScreen";
// import LoginScreen from "./screens/LoginScreen";
// import SignupScreen from "./screens/SignupScreen";
// import HomeScreen from "./screens/HomeScreen";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingScreen />} />
//         <Route path="/login" element={<LoginScreen />} />
//         <Route path="/signup" element={<SignupScreen />} />
//         <Route path="/home" element={<HomeScreen />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import AppRouter from "./navigation/AppRouter";

export default function App() {
  return <AppRouter />;
}

// #2

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingScreen from "./screens/LandingScreen";
// import LoginScreen from "./screens/LoginScreen";
// import SignupScreen from "./screens/SignupScreen";
// import HomeScreen from "./screens/HomeScreen";
// import SellScreen from "./screens/SellScreen";
// import TransactionScreen from "./screens/HistorySubScreens/TransactionScreen";
// import BuyScreen from "./screens/BuySubScreens/BuyScreen";
// import Level from "./screens/Level";
// // import BookingScreen from "./screens/BookingScreen";
// // import WorkerSearch from './screens/WorkerSearch';
// import BookingScreen from "./screens/BookingScreen";
// import WorkerSearch from "./screens/WorkerSearch";
// import PostWork from "./screens/PostWork";
// import UserProfileScreen from "./screens/UserProfileScreen";  // Fixed path
// import RedirectProfileScreen from "./screens/RedirectProfileScreen";



// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingScreen />} />
//         <Route path="/login" element={<LoginScreen />} />
//         <Route path="/signup" element={<SignupScreen />} />
//         <Route path="/home" element={<HomeScreen />} />
//         <Route path="/sell" element={<SellScreen/>} />
//         <Route path="/history" element={<TransactionScreen/>} />
//         <Route path="/buy" element={<BuyScreen/>} />
//         <Route path="/level" element={<Level/>} />
//         <Route path="/bookings" element={<BookingScreen />} />
//         <Route path="/worksearch" element={<WorkerSearch />} />
//         <Route path="/postwork" element={<PostWork />} />
//         <Route path="/profile" element={<UserProfileScreen />} />
//         <Route path="/workerprofile/:id" element={<RedirectProfileScreen />} />
//         <Route path="/workerprofile" element={<RedirectProfileScreen />} />
//         {/* <Route path="/bookings" element={<BookingScreen/>}/> */}
//         {/* <Route path="/worksearch" element={<WorkerSearch/>}/> */}

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;