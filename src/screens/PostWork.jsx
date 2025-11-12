// src/screens/PostWork.jsx
import React, { useState, useRef } from "react";
import "../styles/PostWork.css";
import CreateWorkPostForm from "../components/ComponentScreens/CreateWorkPostForm";
import WorkerAvailabilityCard from "../components/ComponentScreens/WorkerAvailabilityCard";
import JobOfferCard from "../components/ComponentScreens/JobOfferCard";
import { IoChevronBack } from "react-icons/io5";

// ICONS
import plumberIcon from "../assets/plumber.png";
import electricianIcon from "../assets/electrician.png";
import cookIcon from "../assets/cook.png";
import houseCleaningIcon from "../assets/housecleaning.png";
import driverIcon from "../assets/driver.png";
import washermanIcon from "../assets/washerman.png";
import masonIcon from "../assets/mason.png";
import paintingIcon from "../assets/painting.png";
import carpenterIcon from "../assets/carpenter.png";
import allJobsIcon from "../assets/workers.png";

const services = [
  { name: "All Jobs", icon: allJobsIcon },
  { name: "Plumber", icon: plumberIcon },
  { name: "Electrician", icon: electricianIcon },
  { name: "Cook", icon: cookIcon },
  { name: "House Cleaning", icon: houseCleaningIcon },
  { name: "Driver", icon: driverIcon },
  { name: "Washerman", icon: washermanIcon },
  { name: "Mason", icon: masonIcon },
  { name: "Painting", icon: paintingIcon },
  { name: "Carpenter", icon: carpenterIcon }
];

const PostWork = () => {
  const [toggleMode, setToggleMode] = useState("Search Customer");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [workerPosts, setWorkerPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const [customerJobs, setCustomerJobs] = useState([
    {
      id: 1,
      customerName: "Ravi Sharma",
      service: "Plumber",
      address: "Flat 101, Noida",
      phone: "9876543210",
      date: "2025-11-15",
      description: "Fix kitchen sink",
      budget: "₹800",
      requirements: "Bring tools",
      profileImage: "https://i.pravatar.cc/150?img=1",
      accepted: false
    },
    {
      id: 2,
      customerName: "Priya Mehta",
      service: "Cook",
      address: "B-22, Green Park, Delhi",
      phone: "9123456789",
      date: "2025-11-16",
      description: "Need North Indian cook",
      budget: "₹1500/day",
      requirements: "Vegetarian only",
      profileImage: "https://i.pravatar.cc/150?img=2",
      accepted: false
    }
  ]);

  const [selectedService, setSelectedService] = useState("All Jobs");
  const scrollRef = useRef(null);

  // === TOGGLE ===
  const handleToggle = () => {
    const newMode = toggleMode === "Search Customer" ? "Create Work Post" : "Search Customer";
    setToggleMode(newMode);
    if (newMode === "Create Work Post" && workerPosts.length === 0) {
      setShowCreateForm(true);
    } else if (newMode === "Search Customer") {
      setShowCreateForm(false);
    }
  };

  const handleServiceClick = (service) => setSelectedService(service);
  const handleScrollLeft = () => scrollRef.current?.scrollBy({ left: -150, behavior: "smooth" });
  const handleScrollRight = () => scrollRef.current?.scrollBy({ left: 150, behavior: "smooth" });

  const filteredJobs = selectedService === "All Jobs"
    ? customerJobs
    : customerJobs.filter(j => j.service === selectedService);

  // === ACCEPT / CANCEL ACCEPTANCE ===
  const handleAccept = (id) => {
    setCustomerJobs(prev => prev.map(j => j.id === id ? { ...j, accepted: true } : j));
  };

  const handleCancelAcceptance = (id) => {
    setCustomerJobs(prev => prev.map(j => j.id === id ? { ...j, accepted: false } : j));
  };

  // === POST / UPDATE ===
  const handlePost = (data) => {
    if (editingPost) {
      setWorkerPosts(prev => prev.map(p => p.id === editingPost.id ? { ...data, id: editingPost.id, status: editingPost.status } : p));
      setEditingPost(null);
    } else {
      setWorkerPosts(prev => [...prev, { ...data, id: Date.now(), status: "Pending" }]);
    }
    setShowCreateForm(false);
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setShowCreateForm(true);
  };

  const handleCancel = (id) => {
    setWorkerPosts(prev => prev.filter(p => p.id !== id));
  };

  const toggleStatus = (id) => {
    setWorkerPosts(prev => prev.map(p => p.id === id ? { ...p, status: p.status === "Pending" ? "Accepted" : "Pending" } : p));
  };

  return (
    <div className="postwork-container">
      <button className="back-button" onClick={() => window.history.back()}>
        <IoChevronBack size={28} color="white" />
      </button>

      <header className="header-section">
        <h1>Find Customers</h1>
        <div className="toggle-container">
          <button className={`toggle-btn ${toggleMode === "Search Customer" ? "active" : ""}`} onClick={handleToggle}>
            Search Customer
          </button>
          <button className={`toggle-btn ${toggleMode === "Create Work Post" ? "active" : ""}`} onClick={handleToggle}>
            Create Work Post
          </button>
        </div>
      </header>

      {/* SERVICE BUTTONS */}
      {toggleMode === "Search Customer" && !showCreateForm && (
        <section className="service-buttons-section">
          <div className="scroll-controls">
            <button className="scroll-btn left" onClick={handleScrollLeft}>{"<"}</button>
            <div className="service-buttons-scroll" ref={scrollRef}>
              {services.map((s) => (
                <button
                  key={s.name}
                  className={`service-btn ${selectedService === s.name ? "active" : ""}`}
                  onClick={() => handleServiceClick(s.name)}
                >
                  <img src={s.icon} alt={s.name} className="service-icon" />
                  <span>{s.name}</span>
                </button>
              ))}
            </div>
            <button className="scroll-btn right" onClick={handleScrollRight}>{">"}</button>
          </div>
        </section>
      )}

      <section className="posts-section">

        {/* CREATE WORK POST MODE */}
        {toggleMode === "Create Work Post" && (
          <div className="availability-section">
            {showCreateForm ? (
              <CreateWorkPostForm
                initialData={editingPost}
                onPost={handlePost}
                onCancel={() => { setShowCreateForm(false); setEditingPost(null); }}
              />
            ) : (
              <>
                {workerPosts.length > 0 ? (
                  workerPosts.map(post => (
                    <WorkerAvailabilityCard
                      key={post.id}
                      post={post}
                      onEdit={handleEdit}
                      onCancel={handleCancel}
                      onToggleStatus={toggleStatus}
                    />
                  ))
                ) : (
                  <p className="no-posts">No availability posted yet.</p>
                )}

                <div className="post-another-container">
                  <button onClick={() => setShowCreateForm(true)} className="post-another-btn">
                    Post Another Availability
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* SEARCH CUSTOMER MODE */}
        {toggleMode === "Search Customer" && !showCreateForm && (
          <>
            <h2>{selectedService}</h2>
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <JobOfferCard
                  key={job.id}
                  offer={job}
                  onAccept={handleAccept}
                  onCancel={handleCancelAcceptance}
                />
              ))
            ) : (
              <p className="no-posts">No job offers found for {selectedService}.</p>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default PostWork;