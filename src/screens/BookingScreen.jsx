// src/screens/BookingScreen.jsx
import React, { useState } from "react";
import "../styles/BookingScreen.css";
import BookingCard from "../Components/ComponentScreens/BookingCard";
import { IoChevronBack } from "react-icons/io5";
import Header from "../Components/ComponentScreens/Header";

export default function BookingScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("Active");

  const bookings = [
    {
      id: 1,
      name: "Ramesh Kumar",
      profession: "Electrician",
      rating: "4.5",
      charges: "₹500/day",
      date: "25 Sept 2025",
      time: "2:00 PM",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      status: "Active",
    },
    {
      id: 2,
      name: "Anita Sharma",
      profession: "Plumber",
      rating: "4.2",
      charges: "₹300/hour",
      date: "26 Sept 2025",
      time: "10:30 AM",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      status: "Completed",
    },
    {
      id: 3,
      name: "Priya Mehta",
      profession: "Painter",
      rating: "4.0",
      charges: "₹450/hour",
      date: "27 Sept 2025",
      time: "3:30 PM",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      status: "Cancelled",
    },
  ];

  const filteredBookings = bookings.filter(b => b.status === activeTab);

  return (
    <div className="bookings-container">
      <Header 
        heading="Your Bookings"
        text="Take a look of your bookings"
        // onBack={goBack}
        onBack={() => console.log("Back button pressed")}
      />
      <button className="back-button" onClick={() => navigation?.goBack?.()}>
        <IoChevronBack size={24} color="white" />
      </button>

      <h1 className="heading">My Bookings</h1>

      <div className="tab-container">
        {["Active", "Completed", "Cancelled"].map(tab => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            <span className="tab-text">{tab}</span>
          </button>
        ))}
      </div>

      <div className="cards-container">
        {filteredBookings.length === 0 ? (
          <p className="no-bookings">No {activeTab.toLowerCase()} bookings.</p>
        ) : (
          filteredBookings.map(booking => (
            <BookingCard
              key={booking.id}
              booking={booking}
              type={activeTab}
            />
          ))
        )}
      </div>
    </div>
  );
}