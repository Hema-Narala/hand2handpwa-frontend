// src/screens/HiredByCustomerScreen.jsx
import React from "react";
import "../styles/HiredByCustomerScreenStyles.css";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const HiredByCustomerScreen = () => {
  const navigate = useNavigate();

  // Mock data — replace with real data from state later
  const hiredCustomers = [
    {
      id: 1,
      name: "Ravi Sharma",
      phone: "9876543210",
      profileImage: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Priya Mehta",
      phone: "9123456789",
      profileImage: "https://i.pravatar.cc/150?img=2",
    },
  ];

  return (
    <div className="hired-container">
      {/* Back Button - Only < icon */}
      <button className="hired-back-btn" onClick={() => navigate(-1)}>
        <IoChevronBack />
      </button>

      {/* Heading */}
      <h1 className="hired-title">Customer Who Hired You</h1>
      <p className="hired-subtitle">
        Contact him for further proceedings
      </p>

      {/* Cards */}
      <div className="hired-cards">
        {hiredCustomers.map((customer) => (
          <div key={customer.id} className="hired-card">
            {/* Left: Profile */}
            <div className="hired-profile">
              <img
                src={customer.profileImage}
                alt={customer.name}
                className="hired-avatar"
              />
            </div>

            {/* Right: Details */}
            <div className="hired-details">
              <h3 className="hired-name">{customer.name}</h3>
              <p className="hired-phone">
                <a href={`tel:${customer.phone}`}>{customer.phone}</a>
              </p>
              <div className="hired-actions">
                <a href={`tel:${customer.phone}`} className="hired-call-btn">
                  Call
                </a>
                <a
                  href={`https://wa.me/${customer.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hired-whatsapp-btn"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {hiredCustomers.length === 0 && (
        <p className="hired-empty">No customers have hired you yet.</p>
      )}
    </div>
  );
};

export default HiredByCustomerScreen;