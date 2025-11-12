// src/components/ComponentScreens/JobPostCard.jsx
import React, { useState } from "react";
import "../ComponentStyles/JobPostCard.css";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const JobPostCard = ({ post, onHire, onProfileClick }) => {
  // -------------------------------------------------
  // State: was this card just hired?
  // -------------------------------------------------
  const [isHired, setIsHired] = useState(false);

  // -------------------------------------------------
  // State: show confirmation overlay?
  // -------------------------------------------------
  const [showConfirm, setShowConfirm] = useState(false);

  // -------------------------------------------------
  // Hire handler – run parent logic + UI update
  // -------------------------------------------------
  const handleHire = () => {
    onHire?.(post);           // your original booking logic
    setIsHired(true);         // button → Success
    setShowConfirm(true);     // show full‑screen card
  };

  // -------------------------------------------------
  // Close overlay
  // -------------------------------------------------
  const closeConfirm = () => setShowConfirm(false);

  // -------------------------------------------------
  // Chat helper
  // -------------------------------------------------
  const handleChat = (whatsapp) => {
    if (whatsapp) {
      window.open(`https://wa.me/${whatsapp}`, "_blank");
    } else {
      alert("WhatsApp number not available.");
    }
  };

  return (
    <>
      {/* ===================== ORIGINAL CARD ===================== */}
      <div className="worker-detail-card">
        {/* LEFT: PROFILE (CLICKABLE) */}
        <button
          className="profile-btn"
          onClick={() => onProfileClick?.(post)}
          aria-label={`View ${post.name}'s profile`}
        >
          <img src={post.image} alt={post.name} className="worker-avatar-large" />
        </button>

        {/* RIGHT: ALL TEXT & ACTIONS */}
        <div className="worker-content">
          {/* Name + Service */}
          <div className="header-section">
            <h3 className="worker-name">{post.name}</h3>
            <p className="worker-service">{post.service}</p>
          </div>

          {/* Info Grid */}
          <div className="worker-info-grid">
            <div className="info-item">
              <span className="info-label">Budget</span>
              <span className="info-value budget-value">{post.price}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Address</span>
              <span className="info-value">{post.address || "Not provided"}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">
                <a href={`tel:${post.phone}`}>{post.phone || "N/A"}</a>
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Available Date</span>
              <span className="info-value">{post.date || "Flexible"}</span>
            </div>
          </div>

          {/* Rating + Experience */}
          <div className="rating-row">
            <FaStar className="star-icon" />
            <span className="rating-number">{post.rating || "4.5"}</span>
            <span className="experience">• {post.experience || "3+ years"}</span>
          </div>

          {/* Additional Info */}
          {(post.description || post.requirements) && (
            <div className="additional-info">
              {post.description && <p><strong>Description:</strong> {post.description}</p>}
              {post.requirements && <p><strong>Requirements:</strong> {post.requirements}</p>}
            </div>
          )}

          {/* Action Buttons */}
          <div className="worker-actions">
            <a href={`tel:${post.phone}`} className="phone-btn">
              Call
            </a>
            <button className="chat-btn" onClick={() => handleChat(post.whatsapp)}>
              <IoLogoWhatsapp size={16} /> Chat
            </button>

            {/* HIRE / SUCCESS BUTTON */}
            <button
              className="hire-btn"
              onClick={handleHire}
              disabled={isHired}
              style={{
                background: isHired ? "#27ae60" : undefined,
                cursor: isHired ? "default" : "pointer",
              }}
            >
              {isHired ? "Success" : "Hire Now"}
            </button>
          </div>
        </div>
      </div>

      {/* ===================== CONFIRMATION OVERLAY CARD ===================== */}
      {showConfirm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "1rem",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "14px",
              padding: "2rem 1.5rem",
              maxWidth: "380px",
              width: "90%",
              textAlign: "center",
              boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
            }}
          >
            <h2
              style={{
                margin: "0 0 1rem",
                fontSize: "1.6rem",
                color: "#27ae60",
                fontWeight: "bold",
              }}
            >
              Booking Confirmed!
            </h2>
            <p
              style={{
                margin: "0 0 1.5rem",
                fontSize: "1rem",
                color: "#2c3e50",
              }}
            >
              Open <strong>Your Bookings</strong> page to see details.
            </p>
            <button
              onClick={closeConfirm}
              style={{
                background: "#e74c3c",
                color: "#fff",
                border: "none",
                padding: "0.75rem 1.8rem",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                minWidth: "100px",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default JobPostCard;