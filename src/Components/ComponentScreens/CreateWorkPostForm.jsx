// components/ComponentScreens/CreateWorkPostForm.jsx
import React, { useState } from "react";
import "../ComponentStyles/CreateWorkPostForm.css";

const services = [
  "Plumber", "Electrician", "Cook", "House Cleaning",
  "Driver", "Washerman", "Mason", "Painting", "Carpenter"
];

const CreateWorkPostForm = ({ onPost, onCancel, initialData = null }) => {
  const [formData, setFormData] = useState(initialData || {
    workerName: "", service: "", address: "", phone: "", date: "",
    budget: "", requirements: "", experience: "", ratings: ""
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPost(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="create-work-form">
      <h2>{initialData ? "Edit Availability" : "Create Availability"}</h2>

      <input type="text" placeholder="Your Name" value={formData.workerName} onChange={(e) => handleChange("workerName", e.target.value)} required />
      <select value={formData.service} onChange={(e) => handleChange("service", e.target.value)} required>
        <option value="">Select Service</option>
        {services.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
      <input type="text" placeholder="Full Address" value={formData.address} onChange={(e) => handleChange("address", e.target.value)} required />
      <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} required />
      <input type="date" value={formData.date} onChange={(e) => handleChange("date", e.target.value)} required />
      <input type="text" placeholder="Expected Rate" value={formData.budget} onChange={(e) => handleChange("budget", e.target.value)} required />
      <textarea placeholder="Additional Info" value={formData.requirements} onChange={(e) => handleChange("requirements", e.target.value)} rows="2" />
      <input type="number" placeholder="Experience (years)" value={formData.experience} onChange={(e) => handleChange("experience", e.target.value)} required />
      <input type="text" placeholder="Ratings (e.g., 4.5)" value={formData.ratings} onChange={(e) => handleChange("ratings", e.target.value)} required />

      <div className="form-actions">
        <button type="submit" className="submit-btn">{initialData ? "Update" : "Post Availability"}</button>
        <button type="button" onClick={onCancel} className="cancel-btn">Cancel</button>
      </div>
    </form>
  );
};

export default CreateWorkPostForm;