// components/ComponentScreens/WorkerAvailabilityCard.jsx
import React from "react";
import "../ComponentStyles/WorkerAvailabilityCard.css";
import { IoLogoWhatsapp } from "react-icons/io5";

const WorkerAvailabilityCard = ({ post, onEdit, onCancel, onToggleStatus }) => {
  const confirmCancel = () => {
    if (window.confirm("Are you sure you want to cancel this availability?")) {
      onCancel(post.id);
    }
  };

  return (
    <div className="worker-availability-card-full">
      {/* LEFT: Profile */}
      <div
        className="worker-profile"
        onClick={() => alert(`Go to ${post.workerName}'s profile`)}
      >
        <img
          src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`}
          alt={post.workerName}
        />
        <p>{post.workerName}</p>
      </div>

      {/* RIGHT: Details + Actions */}
      <div className="worker-details">
        <div className="worker-info">
          <p><strong>{post.service}</strong> • Available from {new Date(post.date).toLocaleDateString("en-IN")}</p>
          <p className="address">{post.address}</p>
          <p className="budget">Rate: <strong>{post.budget}</strong></p>
          <p className="experience">Experience: <strong>{post.experience} years</strong></p>
          <p className="ratings">Ratings: <strong>{post.ratings} stars</strong></p>
          {post.requirements && <p className="requirements">Extra: {post.requirements}</p>}
          <p className="phone">
            <a href={`tel:${post.phone}`}>{post.phone}</a>
          </p>
        </div>

        <div className="worker-actions">
          <button
            className={`status-btn ${post.status?.toLowerCase() || "pending"}`}
            onClick={() => onToggleStatus(post.id)}
          >
            {post.status || "Pending"}
          </button>
          <button className="edit-btn" onClick={() => onEdit(post)}>Edit</button>
          <button className="cancel-btn" onClick={confirmCancel}>Cancel</button>
          <a
            href={`https://wa.me/${post.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <IoLogoWhatsapp /> Chat
          </a>
        </div>

        {/* Accepted Message */}
        {post.status === "Accepted" && (
          <div className="accepted-msg">
            <p>Your availability is accepted by a customer!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkerAvailabilityCard;