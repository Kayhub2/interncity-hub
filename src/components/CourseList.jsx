import React from "react";
import "../App.css"; 
 // Ensure the CSS file is linked

const courses = [
  "WordPress",
  "Frontend Development",
  "Backend Development",
  "Product Design - UX/UI",
  "Product Management",
  "Virtual Assistance",
  "Data Analysis",
  "Digital Marketing & Copywriting",
  "Project Management",
];

const CourseList = () => {
  return (
    <div className="courses-container">
      <h2>Available Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
