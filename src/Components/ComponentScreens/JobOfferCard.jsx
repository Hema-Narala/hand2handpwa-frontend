// components/ComponentScreens/JobOfferCard.jsx
import React, { useState } from "react";
import "../ComponentStyles/JobOfferCard.css";
import { IoLogoWhatsapp } from "react-icons/io5";

const JobOfferCard = ({ offer, onAccept, onCancel }) => {
  // -------------------------------------------------
  // NEW: state for the confirmation overlay
  // -------------------------------------------------
  const [showOverlay, setShowOverlay] = useState(false);

  // -------------------------------------------------
  // Wrap accept – show overlay after original logic
  // -------------------------------------------------
  const handleAccept = (id) => {
    onAccept(id);               // keep original behaviour
    setShowOverlay(true);       // always show the overlay
  };

  // -------------------------------------------------
  // Close overlay (Cancel button)
  // -------------------------------------------------
  const closeOverlay = () => setShowOverlay(false);

  return (
    <>
      {/* ------------------- ORIGINAL CARD ------------------- */}
      <div className="job-offer-card" style={{ position: "relative" }}>
        <img src={offer.profileImage} alt={offer.customerName} className="customer-img" />
        <div className="offer-details">
          <p><strong>{offer.customerName}</strong> • {offer.service}</p>
          <p className="date">{new Date(offer.date).toLocaleDateString("en-IN")}</p>
          <p className="address">{offer.address}</p>
          <p className="description">{offer.description}</p>
          <p className="budget">Budget: <strong>{offer.budget}</strong></p>
          {offer.requirements && <p className="requirements">Extra: {offer.requirements}</p>}
          <p className="phone"><a href={`tel:${offer.phone}`}>{offer.phone}</a></p>

          <div className="offer-actions">
            <a
              href={`https://wa.me/${offer.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <IoLogoWhatsapp /> Chat
            </a>

            {offer.accepted ? (
              <button className="cancel-accept-btn" onClick={() => onCancel(offer.id)}>
                Cancel Acceptance
              </button>
            ) : (
              <button className="accept-btn" onClick={() => handleAccept(offer.id)}>
                Accept Job
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ------------------- FULL‑SCREEN CONFIRMATION CARD ------------------- */}
      {showOverlay && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "2rem",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              color: "#000",
              padding: "2rem 1.5rem",
              borderRadius: "12px",
              maxWidth: "380px",
              width: "90%",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            }}
          >
            <h2 style={{ margin: "0 0 1rem", fontSize: "1.5rem" }}>
              Booking Confirmed!
            </h2>
            <p style={{ margin: "0 0 1.5rem", fontSize: "1rem" }}>
              Open <strong>Your Bookings</strong> page to see details.
            </p>
            <button
              onClick={closeOverlay}
              style={{
                background: "#e63946",
                color: "#fff",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                fontSize: "1rem",
                cursor: "pointer",
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

export default JobOfferCard;