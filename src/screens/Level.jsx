import React from "react";
import "../styles/Level.css";
import Header from "../Components/ComponentScreens/Header";

export default function Level() {
  // ✅ Only Worker data
  const workersOnly = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Worker",
      rank: 1,
      rating: 4.95,
      jobs: 245,
      image:
        "https://images.unsplash.com/photo-1738656043825-eccc30bc7873?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "John Martinez",
      role: "Worker",
      rank: 2,
      rating: 4.92,
      jobs: 238,
      image:
        "https://images.unsplash.com/photo-1672748341520-6a839e6c05bb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      name: "David Brown",
      role: "Worker",
      rank: 5,
      rating: 4.85,
      jobs: 185,
      image: "",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "Worker",
      rank: 6,
      rating: 4.82,
      jobs: 172,
      image: "",
    },
    {
      id: 8,
      name: "Jennifer Lee",
      role: "Worker",
      rank: 8,
      rating: 4.78,
      jobs: 158,
      image: "",
    },
    {
      id: 10,
      name: "Maria Garcia",
      role: "Worker",
      rank: 10,
      rating: 4.73,
      jobs: 135,
      image: "",
    },
  ];

  const topUsers = workersOnly.slice(0, 3);

  const getRankIcon = (rank) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  return (
    <div className="level-wrapper">

      {/* Header */}
      {/* <div className="level-header">
        <h2>Worker Level Rankings</h2>
        <p>Top performing workers</p>
      </div> */}
      <Header 
        heading="Worker Level Rankings"
        text="Top performing workers"
        // onBack={goBack}
        onBack={() => console.log("Back button pressed")}
      />

      <div className="level-content">

        {/* ✅ Top 3 Podium */}
        <div className="podium">
          
          {/* Rank 2 */}
          <div className="podium-card">
            <div className="podium-avatar">
              <img src={topUsers[1].image} alt="user" />
              <div className="rank-badge small">🥈</div>
            </div>
            <p>{topUsers[1].name.split(" ")[0]}</p>
            <span className="role-badge">{topUsers[1].role}</span>
            <p className="rating">⭐ {topUsers[1].rating}</p>
          </div>

          {/* Rank 1 */}
          <div className="podium-card main">
            <div className="podium-avatar large">
              <img src={topUsers[0].image} alt="user" />
              <div className="rank-badge">🥇</div>
            </div>
            <p>{topUsers[0].name.split(" ")[0]}</p>
            <span className="role-badge main-role">Worker</span>
            <p className="rating">⭐ {topUsers[0].rating}</p>
          </div>

          {/* Rank 3 */}
          <div className="podium-card">
            <div className="podium-avatar">
              <img src={topUsers[2].image} alt="user" />
              <div className="rank-badge small">🥉</div>
            </div>
            <p>{topUsers[2].name.split(" ")[0]}</p>
            <span className="role-badge">{topUsers[2].role}</span>
            <p className="rating">⭐ {topUsers[2].rating}</p>
          </div>

        </div>

        {/* ✅ Full Worker Rankings (No Customers) */}
        <h3 className="ranking-title">Full Worker Rankings</h3>
        <div className="ranking-list">
          {workersOnly.map((user) => (
            <div key={user.id} className="ranking-card">
              <div className="rank-icon">{getRankIcon(user.rank)}</div>

              <img
                src={
                  user.image ||
                  "https://via.placeholder.com/100x100.png?text=User"
                }
                className="ranking-avatar"
                alt="avatar"
              />

              <div className="ranking-info">
                <h4>{user.name}</h4>
                <p className="details">
                  ⭐ {user.rating} • {user.jobs} jobs
                </p>
              </div>

              <div className="ranking-actions">
                <button className="btn-outline">Achievements</button>
                <button className="btn-primary">Profile</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
