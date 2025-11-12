// src/screens/WorkerSearch.jsx
import React, { useState, useRef } from "react";
import "../styles/WorkerSearch.css";
import JobPostCard from "../components/ComponentScreens/JobPostCard.jsx";
import { IoChevronBack, IoLogoWhatsapp } from "react-icons/io5";
import CreateJobPostForm from "../components/ComponentScreens/CreateJobPostForm";

// ICONS
import plumberIcon from "../assets/plumber.png";
import masonIcon from "../assets/mason.png";
import cookIcon from "../assets/cook.png";
import driverIcon from "../assets/driver.png";
import houseCleaningIcon from "../assets/housecleaning.png";
import carpenterIcon from "../assets/carpenter.png";
import paintingIcon from "../assets/painting.png";
import washermanIcon from "../assets/washerman.png";
import allWorkersIcon from "../assets/workers.png";

// SAMPLE DATA
const sampleJobPosts = [
  { id: 1, service: "Plumber", name: "Ravi Kumar", image: "https://i.pravatar.cc/150?img=1", price: "₹300/hr", phone: "9876543210", whatsapp: "9876543210" },
  { id: 2, service: "Plumber", name: "Ajay Singh", image: "https://i.pravatar.cc/150?img=2", price: "₹350/hr", phone: "9123456789", whatsapp: null },
  { id: 3, service: "Cook", name: "Priya Sharma", image: "https://i.pravatar.cc/150?img=3", price: "₹500/day", phone: "9988776655", whatsapp: "9988776655" },
  { id: 4, service: "Cook", name: "Anita Reddy", image: "https://i.pravatar.cc/150?img=4", price: "₹450/day", phone: "8899776655", whatsapp: "8899776655" },
  { id: 5, service: "Carpenter", name: "Vikram Singh", image: "https://i.pravatar.cc/150?img=5", price: "₹1000/day", phone: "7788990011", whatsapp: null },
  { id: 6, service: "Carpenter", name: "Mohan Lal", image: "https://i.pravatar.cc/150?img=6", price: "₹900/day", phone: "6677889900", whatsapp: "6677889900" },
  { id: 7, service: "House Cleaning", name: "Sita Devi", image: "https://i.pravatar.cc/150?img=7", price: "₹400/hr", phone: "5566778899", whatsapp: "5566778899" },
  { id: 8, service: "House Cleaning", name: "Laxmi Bai", image: "https://i.pravatar.cc/150?img=8", price: "₹380/hr", phone: "4455667788", whatsapp: null },
  { id: 9, service: "Painting", name: "Rahul Verma", image: "https://i.pravatar.cc/150?img=9", price: "₹800/day", phone: "3344556677", whatsapp: "3344556677" },
  { id: 10, service: "Painting", name: "Kiran Joshi", image: "https://i.pravatar.cc/150?img=10", price: "₹750/day", phone: "2233445566", whatsapp: null },
];

// Group by service
const groupedPosts = sampleJobPosts.reduce((acc, post) => {
  if (!acc[post.service]) acc[post.service] = [];
  acc[post.service].push(post);
  return acc;
}, {});

const services = [
  { name: "All", icon: allWorkersIcon },
  { name: "Plumber", icon: plumberIcon },
  { name: "Mason", icon: masonIcon },
  { name: "Cook", icon: cookIcon },
  { name: "Driver", icon: driverIcon },
  { name: "House Cleaning", icon: houseCleaningIcon },
  { name: "Carpenter", icon: carpenterIcon },
  { name: "Painting", icon: paintingIcon },
  { name: "Washerman", icon: washermanIcon },
];

// Random profile images for "Suggested Workers" section
const randomProfiles = Array.from({ length: 8 }, (_, i) => ({
  id: `rand-${i}`,
  image: `https://i.pravatar.cc/150?img=${i + 11}`,
}));

const WorkerSearch = ({ navigation }) => {
  const [toggleMode, setToggleMode] = useState("Search Worker");
  const [selectedService, setSelectedService] = useState("All");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [jobPosts, setJobPosts] = useState([]); // User-created job posts

  // Form state
  const [formData, setFormData] = useState({
  name: "",
  service: "",
  address: "",
  phone: "",
  date: "",
  description: "",
  budget: "",
  requirements: ""
});

  const scrollRef = useRef(null);

  const handleToggle = () => {
    const newMode = toggleMode === "Search Worker" ? "Create Job Post" : "Search Worker";
    setToggleMode(newMode);
    setShowCreateForm(newMode === "Create Job Post");
    if (newMode === "Create Job Post") resetForm();
  };

  const resetForm = () => {
    setFormData({ service: "", timeDate: "", phone: "", name: "", status: "Pending", id: null });
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      ...formData,
      id: formData.id || Date.now(),
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
    };

    if (formData.id) {
      setJobPosts(jobPosts.map(j => j.id === formData.id ? newJob : j));
    } else {
      setJobPosts([...jobPosts, newJob]);
    }
    resetForm();
    setShowCreateForm(false);
    setToggleMode("Search Worker");
  };

  const handleEdit = (job) => {
    setFormData(job);
    setShowCreateForm(true);
    setToggleMode("Create Job Post");
  };

  const handleCancel = (id) => {
    setJobPosts(jobPosts.filter(j => j.id !== id));
  };

  const toggleStatus = (id) => {
    setJobPosts(jobPosts.map(j =>
      j.id === id ? { ...j, status: j.status === "Pending" ? "Accepted" : "Pending" } : j
    ));
  };

  const filteredPosts = selectedService === "All"
    ? Object.values(groupedPosts).flat()
    : groupedPosts[selectedService] || [];

  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <div className="worker-search-container">
      {/* BACK BUTTON */}
      <button className="back-button" onClick={() => window.history.back()}>
        <IoChevronBack size={28} color="white" />
      </button>

      {/* HEADER + TOGGLE */}
      <header className="header-section">
        <h1>Find Workers</h1>
        <div className="toggle-container">
          <button
            className={`toggle-btn ${toggleMode === "Search Worker" ? "active" : ""}`}
            onClick={handleToggle}
          >
            Search Worker
          </button>
          <button
            className={`toggle-btn ${toggleMode === "Create Job Post" ? "active" : ""}`}
            onClick={handleToggle}
          >
            Create Job Post
          </button>
        </div>
      </header>

      {/* SERVICE ICONS WITH SCROLL + VIEW MORE */}
      {!showCreateForm && (
        <section className="service-buttons-section">
          <div className="scroll-controls">
            <button className="scroll-btn left" onClick={handleScrollLeft}>{"<"}</button>
            <div className="service-buttons-scroll" ref={scrollRef}>
              {services.map((service) => (
                <button
                  key={service.name}
                  className={`service-btn ${selectedService === service.name ? "active" : ""}`}
                  onClick={() => handleServiceClick(service.name)}
                >
                  <img src={service.icon} alt={service.name} className="service-icon" />
                  <span>{service.name}</span>
                </button>
              ))}
            </div>
            <button className="scroll-btn right" onClick={handleScrollRight}>{">"}</button>
            
          </div>
        </section>
      )}

      {/* JOB POSTS + FORM */}
      <section className="posts-section">
        {showCreateForm ? (
            <CreateJobPostForm
              formData={formData}
              onChange={(field, value) =>
                setFormData((prev) => ({ ...prev, [field]: value }))
              }
              onSubmit={handleSubmit}
              onCancel={resetForm}
              isEdit={!!formData.id}
            />
          ) : (
          <>
            <h2>{selectedService} Workers</h2>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <JobPostCard key={post.id} post={post} />
              ))
            ) : (
              <p className="no-posts">No workers found.</p>
            )}

            {/* ============================================================= */}
          {/*  YOUR JOB POSTS – appears after a user creates a job post   */}
          {/* ============================================================= */}
          {jobPosts.length > 0 && (
            <>
              {/* Section title */}
              <h2 style={{ marginTop: "30px" }}>Your Job Posts</h2>

              {/* Loop through every job the user created */}
              {jobPosts.map((job) => (
                <div
                  key={job.id}
                  className="user-job-card"
                  /* Clicking the whole card (except buttons) will open the job-profile later */
                  onClick={() => goToJobProfile(job.id)}
                >
                  {/* ---------- LEFT SIDE – USER PROFILE (random pic) ---------- */}
                  <img
                    src={job.image}
                    alt={job.name}
                    className="user-job-image"
                    /* Clicking the picture also opens the profile (future page) */
                    onClick={(e) => {
                      e.stopPropagation();               // don’t trigger card click
                      goToJobProfile(job.id);
                    }}
                  />

                  {/* ---------- RIGHT SIDE – JOB DETAILS & ACTIONS ---------- */}
                  <div className="user-job-details">
                    {/* Service name (bold) */}
                    <p>
                      <strong>{job.service}</strong>
                    </p>

                    {/* Date only – no time (format: 10 Nov 2025) */}
                    <p>{new Date(job.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}</p>

                    {/* Customer name + phone (click-to-call) */}
                    <p>
                      {job.name} • <a href={`tel:${job.phone}`}>{job.phone}</a>
                    </p>

                    {/* ---------- ACTION BUTTONS ---------- */}
                    <div className="user-job-actions">
                      {/* Status toggle – Pending to Accepted */}
                      <button
                        className={`status-btn ${job.status.toLowerCase()}`}
                        onClick={(e) => {
                          e.stopPropagation();           // prevent card navigation
                          toggleStatus(job.id);
                        }}
                      >
                        {job.status}
                      </button>

                      {/* Edit – opens the form pre-filled */}
                      <button
                        className="edit-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(job);
                        }}
                      >
                        Edit
                      </button>

                      {/* Cancel – deletes the card */}
                      <button
                        className="cancel-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCancel(job.id);
                        }}
                      >
                        Cancel
                      </button>

                      {/* WhatsApp chat (opens in new tab) */}
                      {job.phone && (
                        <a
                          href={`https://wa.me/${job.phone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="whatsapp-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <IoLogoWhatsapp /> Chat
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

           
            
          </>
        )}
      </section>
    </div>
  );
};

export default WorkerSearch;