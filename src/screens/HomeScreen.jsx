import React, { useEffect, useRef, useState } from "react";
import "../styles/HomeScreen.css";
import {
  FiBell,
  FiMessageCircle,
  FiHome,
  FiCreditCard,
  FiTrendingUp,
  FiClock,
  FiBriefcase,
  FiSearch,
  FiHeart,
} from "react-icons/fi";
import { FaBell, FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import {
  IoChevronForward,
  IoReloadOutline,   // ✅ FIXED (Recycle)
  IoLeafOutline,
  IoTrophyOutline,
  IoStarOutline,
  IoWalletOutline,
  IoCartOutline
} from "react-icons/io5";

import BottomTabNavigator from "../Components/ComponentScreens/BottomTabNavigator";
import banner1 from "../assets/carousel4.png";
import banner2 from "../assets/carousel3.png";
import banner3 from "../assets/carousel2.png";
import profileImg from "../assets/woman1.jpg";
import logoFilled from "../assets/logo-filled.png";
import logoOutline from "../assets/logo-outline.png";
import levelup from "../assets/levelup.png";
import referimg from "../assets/refer.jpeg";

//images
import woman1 from "../assets/woman1.jpg";
import woman2 from "../assets/woman2.jpg";
import man1 from "../assets/man1.jpg";
import man2 from "../assets/man2.jpg";

const jobRecommendations = [
  {
    id: 1,
    title: "House Renovation",
    customer: "Michael Chen",
    budget: "$500",
    location: "Downtown",
    date: "Nov 12, 2025"
  },
  {
    id: 2,
    title: "Kitchen Cleaning",
    customer: "Emma Wilson",
    budget: "$80",
    location: "Suburb",
    date: "Nov 13, 2025"
  },
  {
    id: 3,
    title: "Furniture Assembly",
    customer: "Robert Davis",
    budget: "$120",
    location: "City Center",
    date: "Nov 14, 2025"
  }
];

const workerRecommendations = [
  {
    id: 1,
    name: "John Doe",
    skill: "Plumber",
    rating: "4.8",
    wage: "$25/hr",
    image: woman1,
  },
  {
    id: 2,
    name: "Jane Smith",
    skill: "Electrician",
    rating: "4.6",
    wage: "$30/hr",
    image: man1,
  },
  {
    id: 3,
    name: "Mike Johnson",
    skill: "Carpenter",
    rating: "4.9",
    wage: "$22/hr",
    image: woman2,
  },
  {
    id: 4,
    name: "Emma Brown",
    skill: "Cleaner",
    rating: "4.7",
    wage: "$18/hr",
    image: man2,
  }
];


const HomeScreen = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [banner1, banner2, banner3];

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((s) => {
        const next = (s + 1) % slides.length;
        carouselRef.current?.scrollTo({
          left: next * carouselRef.current.clientWidth,
          behavior: "smooth",
        });
        return next;
      });
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const onCarouselScroll = (e) => {
    const w = e.target.clientWidth;
    const scrollX = e.target.scrollLeft;
    const slide = Math.round(scrollX / w);
    setActiveSlide(slide);
  };

  return (
    <div className="pg-root">
      {/* TOP HEADER */}
      <header className="top-header">
        <div className="header-left">
          <img src={logoOutline} alt="logo" className="logo-img" />
          <div className="app-name">
            Hand<span className="highlight">2</span>Hand
          </div>
        </div>

        <div className="header-right">
          <button className="icon-btn">
            <FaBell size={22} color="rgb(129, 89, 207)" />
          </button>
          {/* <button className="icon-btn">
            <FaComments size={23} color="#7c5c98" />
          </button> */}
        </div>
      </header>

      {/* PROFILE SECTION */}
      <section className="hero-section">
        <div className="hero-inner">
          <img src={profileImg} alt="profile" className="hero-profile" />
          <div className="hero-text">
            <div className="welcome">Welcome Back,</div>
            <div className="name">Lakshmi</div>
            <p className="hero-desc">
              Find reliable help and post work in seconds. Explore trusted professionals and manage your jobs — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-card">

        {/* BUTTON ROW */}
        <div className="action-row">
          <button className="action-btn primary" onClick={() => navigate("/app/home/PostWork")}>
            <FiBriefcase /> Post Work
          </button>
          <button className="action-btn primary" onClick={() => navigate("/app/home/WorkerSearch")}>
            <FiSearch /> Search Work
          </button>
        </div>

        {/* CATEGORY CARD */}
        {/* <div className="category-card">
          <div className="category-header">
            <FiBriefcase className="category-icon" />
            <div className="category-title">Quick Categories</div>
          </div>

          <div className="category-grid">
            <div className="cat-item">
              <div className="cat-circle wallet">
                <FiCreditCard />
              </div>
              <div className="cat-label">Wallet</div>
            </div>

            <div className="cat-item" onClick={() => navigate("/app/home/level")}>
              <div className="cat-circle level">
                <FiTrendingUp />
              </div>
              <div className="cat-label">Level</div>
            </div>

            <div className="cat-item">
              <div className="cat-circle history">
                <FiClock />
              </div>
              <div className="cat-label">History</div>
            </div>

            <div className="cat-item">
              <div className="cat-circle work">
                <FiBriefcase />
              </div>
              <div className="cat-label">Work</div>
            </div>
          </div>
        </div> */}

        {/* REFER & EARN */}
        <div className="level-card" onClick={() => navigate("/app/home/hiredByCustomer")}>
          <img src={referimg} className="level-img" />

          <div className="level-info">
            <p className="level-title">Hey Worker</p>

            <div className="level-row">
              <p className="level-value">Job Offers</p>
              <div className="level-arrow">
                <IoChevronForward size={16} color="#7c5c98" />
              </div>
            </div>

            <p className="level-subtitle">You can see the people who have booked you for work</p>
          </div>
        </div>

        {/* LEVEL CARD */}
        <div className="level-card" onClick={() => navigate("/app/home/level")}>
          <div className="level-info">
            <p className="level-title">Worker's Level</p>

            <div className="level-row">
              <p className="level-value">Level</p>
              <div className="level-arrow">
                <IoChevronForward size={16} color="#7c5c98" />
              </div>
            </div>

            <p className="level-subtitle">You can see all the workers and their ranks here!</p>
          </div>

          <img src={levelup} className="level-img" />
        </div>

        

        {/* Recommendations section */}
        <section className="recommendations-section">
          {/* CUSTOMER RECOMMENDATIONS */}
          <div className="recommendation-block">
            <div className="block-header">
              <h3>Recommended Jobs</h3>
              <button className="view-all-btn" onClick={() => navigate("/app/home/PostWork")}>View All</button>
            </div>

            <div className="customer-cards">
              {jobRecommendations.map((job) => (
                <div className="customer-card" key={job.id}>
                  <div className="customer-card-left">
                    <h4>{job.title}</h4>
                    <div className="job-info">
                      <span>👤 {job.customer}</span>
                      <span>📍 {job.location}</span>
                      <span>📅 {job.date}</span>
                    </div>
                  </div>
                  <div className="customer-card-right">
                    <p className="budget">{job.budget}</p>
                    <button className="apply-btn">Apply</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WORKER RECOMMENDATIONS */}
          <div className="recommendation-block">
            <div className="block-header">
              <h3>Recommended Workers</h3>
              <button className="view-all-btn" onClick={() => navigate("/app/home/WorkerSearch")}>View All</button>
            </div>

            <div className="worker-cards">
              {workerRecommendations.map((worker) => (
                <div className="worker-card" key={worker.id}>
                  <img src={worker.image} alt={worker.name} className="worker-image" />
                  <div className="worker-info">
                    <h4>{worker.name}</h4>
                    <p className="skill">{worker.skill}</p>
                    <p className="rating">⭐ {worker.rating}</p>
                    <div className="worker-footer">
                      <span className="wage">{worker.wage}</span>
                      <button className="view-profile-btn" onClick={() => navigate("/app/home/redirectProfile")}>View Profile</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENVIRONMENTAL IMPACT */}
        <div className="impact-wrapper">
          <div className="impact-header">
            <p className="impact-title">🌱 Environmental Impact</p>
            <p className="impact-subtitle">Your contribution to a sustainable future</p>
          </div>

          <div className="impact-card-container">

            <div className="impact-row">
              <div className="impact-card green-card">
                <div className="icon-circle green-bg">
                  <IoReloadOutline size={24} color="#fff" /> {/* ✅ FIXED */}
                </div>
                <p className="card-value">246</p>
                <p className="card-label">Jobs Completed</p>
              </div>

              <div className="impact-card green-card">
                <div className="icon-circle green-bg">
                  <IoLeafOutline size={24} color="#fff" />
                </div>
                <p className="card-value">$3412</p>
                <p className="card-label">Earned this month</p>
              </div>
            </div>

            <div className="impact-row">
              <div className="impact-card yellow-card">
                <div className="icon-circle yellow-bg">
                  <IoTrophyOutline size={24} color="#fff" />
                </div>
                <p className="card-value bronze">Bronze</p>
                <p className="card-label bronze">Eco Level</p>
              </div>

              <div className="impact-card yellow-card">
                <div className="icon-circle yellow-bg">
                  <IoStarOutline size={24} color="#fff" />
                </div>
                <p className="card-value bronze">5 ★</p>
                <p className="card-label bronze">Community Rating</p>
              </div>
            </div>
            

          </div>
        </div>

        {/* WALLET */}
        <div className="wallet-wrapper">
          <div className="wallet-header">
            <p className="wallet-title">💳 Payment Dashboard</p>
            <p className="wallet-subtitle">Your earnings and eco-rewards balance</p>
          </div>

          <div className="wallet-body">

            <div className="wallet-card">
              <IoWalletOutline size={22} color="#7c5c98" />
              <p className="wallet-card-title">Available Balance</p>
              <p className="wallet-card-value">₹0</p>
            </div>

            <div className="earning-row">
              <div className="earning-card">
                <p className="earning-value">₹0</p>
                <p className="earning-label">Total Earned</p>
              </div>

              <div className="earning-card">
                <p className="earning-value">₹0</p>
                <p className="earning-label">Withdrawed</p>
              </div>
            </div>

            <div className="wallet-card">
              <IoWalletOutline size={22} color="#7c5c98" />
              <p className="wallet-card-title">
                Estimated amount per month if you continue Recycling
              </p>
              <p className="wallet-card-value">₹0</p>
            </div>

            <button className="shop-button">
              <IoCartOutline size={18} color="#fff" />
              Shop Eco Products
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <img
            src={logoOutline}
            className="footer-logo"
            // className="logo-img"
          />
          <div className="app-name">
              Hand<span className="highlight">2</span>Hand
            </div>

        </div>
        

        <div className="future-space" />
      </main>

      {/* BOTTOM NAV */}
      <BottomTabNavigator />
    </div>
  );
};

export default HomeScreen;
