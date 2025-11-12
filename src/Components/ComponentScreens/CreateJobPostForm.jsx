// components/ComponentScreens/CreateJobPostForm.jsx
import React, { useState, useEffect } from "react";
import "./CreateJobPostForm.css";
import { IoLogoWhatsapp } from "react-icons/io5";

const services = [
  "Plumber", "Electrician", "Cook", "House Cleaning",
  "Driver", "Washerman", "Mason", "Painting", "Carpenter"
];

// LocalStorage Key
const STORAGE_KEY = "user-job-posts";

const CreateJobPostForm = () => {
  const [showForm, setShowForm] = useState(false); // Start with form hidden
  const [isEdit, setIsEdit] = useState(false);
  const [editingId, setEditingId] = useState(null);

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

  const [jobPosts, setJobPosts] = useState([]);

  // === LOAD FROM LOCALSTORAGE ===
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setJobPosts(JSON.parse(saved));
    }
  }, []);

  // === SAVE TO LOCALSTORAGE ===
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobPosts));
  }, [jobPosts]);

  // === HANDLE CHANGE ===
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // === HANDLE SUBMIT ===
  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      ...formData,
      id: editingId || Date.now(),
      profileImage: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      status: isEdit ? jobPosts.find(j => j.id === editingId)?.status || "Pending" : "Pending",
      acceptedBy: isEdit ? jobPosts.find(j => j.id === editingId)?.acceptedBy || null : null
    };

    if (isEdit) {
      setJobPosts(prev => prev.map(j => j.id === editingId ? newJob : j));
    } else {
      setJobPosts(prev => [...prev, newJob]);
    }

    resetForm();
  };

  // === RESET FORM ===
  const resetForm = () => {
    setFormData({
      name: "", service: "", address: "", phone: "", date: "",
      description: "", budget: "", requirements: ""
    });
    setIsEdit(false);
    setEditingId(null);
    setShowForm(false);
  };

  // === EDIT JOB ===
  const handleEdit = (job) => {
    setFormData({
      name: job.name,
      service: job.service,
      address: job.address,
      phone: job.phone,
      date: job.date,
      description: job.description,
      budget: job.budget,
      requirements: job.requirements
    });
    setEditingId(job.id);
    setIsEdit(true);
    setShowForm(true);
  };

  // === CANCEL JOB (DELETE) ===
  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this job post?")) {
      setJobPosts(prev => prev.filter(j => j.id !== id));
    }
  };

  // === TOGGLE STATUS ===
  const toggleStatus = (id) => {
    setJobPosts(prev =>
      prev.map(j => {
        if (j.id === id) {
          const newStatus = j.status === "Pending" ? "Accepted" : "Pending";
          return {
            ...j,
            status: newStatus,
            acceptedBy: newStatus === "Accepted"
              ? {
                  id: "worker-123",
                  name: "Rahul Verma",
                  service: j.service,
                  image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
                }
              : null
          };
        }
        return j;
      })
    );
  };

  // === RENDER ===
  return (
    <div className="create-job-section">

      {/* ====== FORM ====== */}
      {showForm && (
        <div className="create-job-form-container">
          <h2 className="form-title">{isEdit ? "Edit Job Post" : "Create Job Post"}</h2>
          <form onSubmit={handleSubmit} className="create-job-form">

            {/* NAME - NOW EDITABLE */}
            <input
              type="text"
              placeholder="Customer Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />

            <select value={formData.service} onChange={(e) => handleChange("service", e.target.value)} required>
              <option value="">Select Service</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>

            <input type="text" placeholder="Full Address" value={formData.address} onChange={(e) => handleChange("address", e.target.value)} required />
            <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} required />
            <input type="date" value={formData.date} onChange={(e) => handleChange("date", e.target.value)} required />
            <textarea placeholder="Job Description" value={formData.description} onChange={(e) => handleChange("description", e.target.value)} rows="3" required />
            <input type="text" placeholder="Budget (e.g., ₹800)" value={formData.budget} onChange={(e) => handleChange("budget", e.target.value)} required />
            <textarea placeholder="Additional Requirements (optional)" value={formData.requirements} onChange={(e) => handleChange("requirements", e.target.value)} rows="2" />

            <div className="form-actions">
              <button type="submit" className="submit-btn">{isEdit ? "Update" : "Post Job"}</button>
              <button type="button" onClick={resetForm} className="cancel-btn">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* ====== POST ANOTHER JOB BUTTON ====== */}
      {!showForm && jobPosts.length > 0 && (
        <div className="post-another-container">
          <button onClick={() => setShowForm(true)} className="post-another-btn">
            Post Another Job
          </button>
        </div>
      )}

      {/* ====== JOB CARDS ====== */}
      {jobPosts.length > 0 && jobPosts.map(job => (
        <div key={job.id} className="job-post-card">

          {/* LEFT: Customer Profile */}
          <div className="user-profile" onClick={() => alert("Customer Profile")}>
            <img src={job.profileImage} alt={job.name} />
            <p>{job.name}</p>
          </div>

          {/* RIGHT: Details */}
          <div className="job-details">
            <div className="job-info">
              <p><strong>{job.service}</strong> • {new Date(job.date).toLocaleDateString("en-IN")}</p>
              <p className="address">{job.address}</p>
              <p className="description">{job.description}</p>
              <p className="budget">Budget: <strong>{job.budget}</strong></p>
              {job.requirements && <p className="requirements">Extra: {job.requirements}</p>}
              <p className="phone"><a href={`tel:${job.phone}`}>{job.phone}</a></p>
            </div>

            <div className="job-actions">
              <button className={`status-btn ${job.status.toLowerCase()}`} onClick={() => toggleStatus(job.id)}>
                {job.status}
              </button>
              <button className="edit-btn" onClick={() => handleEdit(job)}>Edit</button>
              <button className="cancel-btn" onClick={() => handleCancel(job.id)}>Cancel</button>
              <a href={`https://wa.me/${job.phone}`} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                <IoLogoWhatsapp /> Chat
              </a>
            </div>

            {/* Worker if Accepted */}
            {job.status === "Accepted" && job.acceptedBy && (
              <div className="accepted-worker">
                <img src={job.acceptedBy.image} alt={job.acceptedBy.name} />
                <div>
                  <p><strong>{job.acceptedBy.name}</strong> • {job.acceptedBy.service}</p>
                  <p className="accepted-msg">Your job is accepted!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* ====== NO POSTS YET ====== */}
      {jobPosts.length === 0 && !showForm && (
        <div className="no-posts">
          <p>No job posts yet. <button onClick={() => setShowForm(true)} className="link-btn">Create one?</button></p>
        </div>
      )}
    </div>
  );
};

export default CreateJobPostForm;