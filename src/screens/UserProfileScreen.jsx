import { useState } from 'react';
import '../styles/UserProfileScreen.css';
import {
  FiEdit2,
  FiCamera,
  FiTrash2,
  FiX,
  FiCheckCircle
} from 'react-icons/fi';
import { FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import Header from '../Components/ComponentScreens/Header';

const UserProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userType, setUserType] = useState('worker');
  const [selectedServices, setSelectedServices] = useState({
    Construction: true,
    Plumbing: true,
    Electrical: true,
    Painting: false,
    Carpentry: false,
    Cleaning: false,
    Driving: false,
    Cooking: false,
  });

  const [form, setForm] = useState({
    name: 'John Martinez',
    phone: '+1 (555) 123-4567',
    email: 'john.martinez@email.com',
    address: '123 Main Street, Downtown',
    bio: 'Experienced construction worker with 3+ years in residential and commercial projects. Specializing in renovations, repairs, and custom builds.',
    instagram: 'john_martinez',
    facebook: 'john.martinez',
    rating: 4.8,
  });

  // Profile Image
  const [profileImage, setProfileImage] = useState('/assets/worker-profile.jpg');
  const [showProfileModal, setShowProfileModal] = useState(false);

  // Experience Images
  const [experienceImages, setExperienceImages] = useState([]);
  const [selectedExpIndex, setSelectedExpIndex] = useState(null);

  // Upload Profile
  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setShowProfileModal(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // Upload Experience
  const handleExperienceUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setExperienceImages(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeProfile = () => {
    setProfileImage(null);
    setShowProfileModal(false);
  };

  const removeExperiencePhoto = () => {
    if (selectedExpIndex !== null) {
      setExperienceImages(prev => prev.filter((_, i) => i !== selectedExpIndex));
      setSelectedExpIndex(null);
    }
  };

  const toggleService = (service) => {
    setSelectedServices(prev => ({ ...prev, [service]: !prev[service] }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add API save logic here later
  };

  const servicesList = [
    'Construction', 'Plumbing', 'Electrical', 'Painting',
    'Carpentry', 'Cleaning', 'Driving', 'Cooking'
  ];

  return (
    <div className="profile-container">
      {/* Header */}
      {/* <header className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your personal information</p>
      </header> */}
      <Header 
        heading="My Profile"
        text="Manage your personal informationt"
        // onBack={goBack}
        onBack={() => console.log("Back button pressed")}
      />

      {/* Profile Card */}
      <section className="profile-card">
        <div className="profile-image-wrapper">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
              onClick={() => setShowProfileModal(true)}
            />
          ) : (
            <label htmlFor="profile-upload" className="empty-profile">
              <FiCamera size={32} />
              <span>Add Photo</span>
            </label>
          )}
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            onChange={handleProfileUpload}
            style={{ display: '  none' }}
          />
        </div>

        {/* Profile Modal */}
        {showProfileModal && (
          <div className="modal-overlay" onClick={() => setShowProfileModal(false)}>
            <div className="profile-modal" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowProfileModal(false)}>
                <FiX />
              </button>
              <img src={profileImage} alt="Profile" className="modal-profile-img" />
              <label htmlFor="profile-upload-modal" className="change-photo-btn">
                Change Photo
              </label>
              <input
                id="profile-upload-modal"
                type="file"
                accept="image/*"
                onChange={handleProfileUpload}
                style={{ display: 'none' }}
              />
              <button className="remove-photo-btn" onClick={removeProfile}>
                <FiTrash2 /> Remove Profile Photo
              </button>
            </div>
          </div>
        )}

        {/* View Mode */}
        {!isEditing ? (
          <>
            <h2 className="worker-name">{form.name}</h2>
            <div className="worker-badge">
              <span className="user-type-badge">
                {userType === 'both' ? 'Worker & Customer' : userType.charAt(0).toUpperCase() + userType.slice(1)}
              </span>
              {(userType === 'worker' || userType === 'both') && (
                <span className="rating"><FaStar /> {form.rating}</span>
              )}
            </div>

            {(userType === 'worker' || userType === 'both') && (
              <>
                <p className="worker-bio">{form.bio}</p>
                <div className="services">
                  {Object.keys(selectedServices)
                    .filter(s => selectedServices[s])
                    .map(s => (
                      <span key={s} className="service-tag">{s}</span>
                    ))}
                </div>
              </>
            )}

            <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>
              <FiEdit2 /> Edit Profile
            </button>

            <div className="personal-info-below">
              <div className="info-item"><FaPhone /> <span>{form.phone}</span></div>
              <div className="info-item"><FaEnvelope /> <span>{form.email}</span></div>
              <div className="info-item"><FaMapMarkerAlt /> <span>{form.address}</span></div>
            </div>
          </>
        ) : (
          /* Edit Form */
          <div className="edit-form">
            <h3>Edit Profile</h3>

            <div className="user-type-selection">
              <button className={userType === 'customer' ? 'active' : ''} onClick={() => setUserType('customer')}>
                Customer
              </button>
              <button className={userType === 'worker' ? 'active' : ''} onClick={() => setUserType('worker')}>
                Worker
              </button>
              <button className={userType === 'both' ? 'active' : ''} onClick={() => setUserType('both')}>
                Both
              </button>
            </div>

            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />

            {(userType === 'worker' || userType === 'both') && (
              <textarea
                placeholder="Short bio"
                value={form.bio}
                onChange={e => setForm({ ...form, bio: e.target.value })}
                rows="3"
              />
            )}

            {(userType === 'worker' || userType === 'both') && (
              <div className="services-grid">
                {servicesList.map(service => (
                  <button
                    key={service}
                    className={`service-btn ${selectedServices[service] ? 'selected' : ''}`}
                    onClick={() => toggleService(service)}
                  >
                    {service}
                    {selectedServices[service] && <FiCheckCircle className="tick" />}
                  </button>
                ))}
              </div>
            )}

            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Address"
              value={form.address}
              onChange={e => setForm({ ...form, address: e.target.value })}
            />

            <div className="social-input">
              <AiOutlineInstagram />
              <input
                type="text"
                placeholder="Instagram username"
                value={form.instagram}
                onChange={e => setForm({ ...form, instagram: e.target.value })}
              />
            </div>
            <div className="social-input">
              <AiOutlineFacebook />
              <input
                type="text"
                placeholder="Facebook profile URL"
                value={form.facebook}
                onChange={e => setForm({ ...form, facebook: e.target.value })}
              />
            </div>

            <div className="form-actions">
              <button onClick={handleSave} className="save-btn">Save</button>
              <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
            </div>
          </div>
        )}
      </section>

      {/* 4 Stats Box */}
      {(userType === 'worker' || userType === 'both') && !isEditing && (
        <section className="stats-box">
          <div className="stats-grid">
            <div className="stat-item"><h3>245</h3><p>Jobs Completed</p></div>
            <div className="stat-item highlight"><h3>$3,240</h3><p>Earned This Month</p></div>
            <div className="stat-item"><h3>{form.rating}</h3><p>Average Rating</p></div>
            <div className="stat-item"><h3>98%</h3><p>Success Rate</p></div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {(userType === 'worker' || userType === 'both') && !isEditing && (
        <section className="experience-section">
          <div className="experience-header">
            <h3>Experience</h3>
            <label htmlFor="experience-upload" className="add-photos-btn">
              + Add Photos
            </label>
          </div>
          <p className="experience-desc">Add your experience and works here</p>

          <div className="experience-gallery">
            {experienceImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Experience ${i + 1}`}
                className="exp-img"
                onClick={() => setSelectedExpIndex(i)}
              />
            ))}
          </div>

          <input
            id="experience-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleExperienceUpload}
            style={{ display: 'none' }}
          />

          {/* Experience Photo Modal */}
          {selectedExpIndex !== null && (
            <div className="modal-overlay" onClick={() => setSelectedExpIndex(null)}>
              <div className="exp-modal" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setSelectedExpIndex(null)}>
                  <FiX />
                </button>
                <img
                  src={experienceImages[selectedExpIndex]}
                  alt="Experience"
                  className="modal-exp-img"
                />
                <button className="remove-photo-btn" onClick={removeExperiencePhoto}>
                  <FiTrash2 /> Delete Photo
                </button>
              </div>
            </div>

          )}
        </section>
      )}

      {/* Social Links */}
      {!isEditing && (form.instagram || form.facebook) && (
        <section className="social-section">
          <h3>Social Links</h3>
          {form.instagram && (
            <div className="social-input">
              <AiOutlineInstagram /> <span>@{form.instagram}</span>
            </div>
          )}
          {form.facebook && (
            <div className="social-input">
              <AiOutlineFacebook /> <span>{form.facebook}</span>
            </div>
          )}
        </section>
      )}

      {/* Reviews */}
      {(userType === 'worker' || userType === 'both') && !isEditing && (
        <section className="reviews-section">
          <h3>Customer Reviews</h3>
          <div className="review-item">
            <div className="review-header">
              <strong>Michael Chen</strong>
              <span>Nov 8, 2025</span>
            </div>
            <div className="stars">5 stars</div>
            <p>Excellent work! Very professional and completed the job on time.</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default UserProfileScreen;