import React, { useState } from "react";
import "./JobForm.css"; // make sure to create the styles

const TagInput = ({ label, tags, setTags }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="tag-input">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
            <button onClick={() => removeTag(tag)}>&times;</button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Add ${label.toLowerCase()}...`}
        />
      </div>
    </div>
  );
};

const JobForm = () => {
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);

  return (
    <form className="job-form">
      <h2>Post a Job</h2>

      <div className="form-group">
        <label>Job title *</label>
        <input type="text" placeholder="Fresher Java Developer" />
      </div>

      <div className="form-group">
        <label>Company *</label>
        <input type="text" placeholder="Associative" />
      </div>

      <div className="form-group">
        <label>Job location *</label>
        <input type="text" placeholder="Lohegaon, Pune, Maharashtra" />
      </div>

      <div className="form-group">
        <label>Salary</label>
        <input type="text" placeholder="₹5,000 - ₹15,000 a month" />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea placeholder="Associative is a software company..."></textarea>
      </div>

      <div className="form-group">
        <label>Responsibilities</label>
        <textarea placeholder="List responsibilities separated by commas"></textarea>
      </div>

      <div className="form-group">
        <label>Qualifications</label>
        <textarea placeholder="List qualifications separated by commas"></textarea>
      </div>

      <TagInput label="Skills" tags={skills} setTags={setSkills} />
      <TagInput label="Languages" tags={languages} setTags={setLanguages} />

      <div className="form-group">
        <label>Office address</label>
        <input
          type="text"
          placeholder="Shop No. 12, Khandve Complex, Lohegaon, Pune"
        />
      </div>

      <div className="form-group">
        <label>Office timing</label>
        <input type="text" placeholder="10:00 AM - 8:00 PM" />
      </div>

      <div className="form-group">
        <label>Contact number</label>
        <input type="text" placeholder="+91 9028850524" />
      </div>

      <div className="form-group">
        <label>Company website</label>
        <input type="text" placeholder="https://associative.in" />
      </div>

      <div className="form-group">
        <label>Career page</label>
        <input type="text" placeholder="https://associative.in/career" />
      </div>

      <button type="submit" className="submit-btn">
        Submit Job
      </button>
    </form>
  );
};

export default JobForm;
