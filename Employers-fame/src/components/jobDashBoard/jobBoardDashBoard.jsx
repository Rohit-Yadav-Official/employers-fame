import React from 'react';
import './jobBoardDashboard.css';
import jobsvg from "../../assets/jobBoardDashboard.svg"
export default function JobsDashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="title">Jobs</h1>
        <button className="post-job-btn">Post a job</button>
      </header>

      <div className="filters">
        <button className="new-tag">New</button>
        <button className="filter-btn">(2) Status ▼</button>
        <button className="filter-btn">Title</button>
        <button className="filter-btn">Location ▼</button>
        <button className="filter-btn outlined">★</button>
        <button className="filter-btn filter-applied">
          <span className="slider-icon">≡</span> 1 filter applied
        </button>
        <span className="result-text">0 results</span>
      </div>

      <div className="illustration-section">
        <img src={jobsvg} alt="Woman with laptop" className="illustration" />
        <h2 className="promo-title">Get up to 4x more applications. Post your first job directly on Indeed.</h2>
        <p className="promo-subtext">
          Indeed Apply brings you up to four times more applications than redirecting applications to your career website.
          Make it simpler. Hire faster.
        </p>
        <button className="post-job-btn large">Post a job</button>
      </div>
    </div>
  );
}
