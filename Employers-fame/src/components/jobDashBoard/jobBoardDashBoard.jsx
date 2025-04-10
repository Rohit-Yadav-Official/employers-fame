import React, { useState } from "react";
import './jobBoardDashboard.css';
import jobsvg from "../../assets/jobBoardDashboard.svg"

import { FaBars } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { BsPeople, BsGraphUp } from "react-icons/bs";
import { AiOutlineTool } from "react-icons/ai";
import { MdWorkOutline, MdOutlineCreateNewFolder } from "react-icons/md";
import { PiMagnifyingGlass } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";

export default function JobsDashboard() {
  const [showStatus, setShowStatus] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="JobDashBoard">
      <div className="hamburger" onClick={() => setIsOpen(true)}>
        <FaBars size={20} />
      </div>

      {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)}></div>}

      {isOpen && (
        <div className="sidebar">
          <div className="sidebar-item collapse-btn" onClick={() => setIsOpen(false)}>
            ✖ Collapse
          </div>
          <div className="sidebar-item"><MdOutlineCreateNewFolder /> Create new</div>
          <div className="sidebar-item active"><MdWorkOutline /> Jobs</div>
          <div className="sidebar-item"><FiPhoneCall /> Phone calls</div>
          <div className="sidebar-item"><PiMagnifyingGlass /> Smart Sourcing</div>
          <div className="sidebar-item"><BsPeople /> Candidates</div>
          <div className="sidebar-item"><FaCalendarAlt /> Interviews</div>
          <div className="sidebar-item"><BsGraphUp /> Analytics</div>
          <div className="sidebar-item"><AiOutlineTool /> Tools</div>
        </div>
      )}

      <div className={`dashboard ${isOpen ? "shifted" : ""}`}>
        <header className="dashboard-header">
          <h1 className="title">Jobs</h1>
          <button className="post-job-btn">Post a job</button>
        </header>

        <div className="filters">
          <button className="new-tag">New</button>

          <div className="filter-wrapper">
            {/* Status */}
            <div className="dropdown">
              <div
                className="dropdown-btn"
                role="button"
                tabIndex="0"
                onClick={() => setShowStatus(!showStatus)}
              >
                Status <span className="arrow">▾</span>
              </div>
              {showStatus && (
                <div className="dropdown-content">
                  <div className="dropdown-item">Open</div>
                  <div className="dropdown-item">Closed</div>
                </div>
              )}
            </div>

            {/* Title */}
            <div className="dropdown">
              <div
                className="dropdown-btn"
                role="button"
                tabIndex="0"
                onClick={() => setShowTitle(!showTitle)}
              >
                Title <span className="arrow">▾</span>
              </div>
              {showTitle && (
                <div className="dropdown-content">
                  <input className="dropdown-input" placeholder="Search title..." />
                </div>
              )}
            </div>

            {/* Location */}
            <div className="dropdown">
              <div
                className="dropdown-btn"
                role="button"
                tabIndex="0"
                onClick={() => setShowLocation(!showLocation)}
              >
                Location <span className="arrow">▾</span>
              </div>
              {showLocation && (
                <div className="dropdown-content">
                  <input className="dropdown-input" placeholder="Search location..." />
                </div>
              )}
            </div>
          </div>

          <button className="filter-btn outlined">★</button>
          <button className="filter-btn filter-applied">
            <span className="slider-icon">≡</span> 1 filter applied
          </button>
          <span className="result-text">0 results</span>
        </div>

        <div className="illustration-section">
          <img src={jobsvg} alt="Woman with laptop" className="illustration" />
          <h2 className="promo-title">
            Get up to 4x more applications. Post your first job directly on Indeed.
          </h2>
          <p className="promo-subtext">
            Indeed Apply brings you up to four times more applications than redirecting applications
            to your career website. Make it simpler. Hire faster.
          </p>
          <button className="post-job-btn large">Post a job</button>
        </div>
      </div>
    </div>
  );
}
