// src/components/ComponentScreens/BookingCard.jsx
import React from "react";
import "../ComponentStyles/BookingCard.css";
import { FaStar } from "react-icons/fa";

export default function BookingCard({ booking, type }) {
  const getButtonClass = () => {
    switch (type) {
      case "Active":     return "action-button";
      case "Completed":  return "action-button completed";
      case "Cancelled":  return "action-button cancelled";
      default:           return "action-button";
    }
  };

  const getButtonText = () => {
    switch (type) {
      case "Active":     return "Cancel";
      case "Completed":  return "Write a Review";
      case "Cancelled":  return "Re-book";
      default:           return "Cancel";
    }
  };

  return (
    <div className="booking-card">
      <img src={booking.image} alt={name} className="profile-image" />

      <div className="details-container">
        <div className="profession">{booking.profession}</div>
        <div className="name">{booking.name}</div>

        <div className="info-row">
          <div className="rating">
            <FaStar className="star-icon" />
            <span className="rating-number">{booking.rating}</span>
          </div>
          <div className="charges">{booking.charges}</div>
        </div>

        <div className="date-time-action-row">
          <div className="date-time-box">
            <div className="date-time-label">Date</div>
            <div className="date-time-value">{booking.date}</div>
          </div>
          <div className="date-time-box">
            <div className="date-time-label">Time</div>
            <div className="date-time-value">{booking.time}</div>
          </div>

          <button className={getButtonClass()}>
            <span className="action-button-text">{getButtonText()}</span>
          </button>
        </div>
      </div>
    </div>
  );
}